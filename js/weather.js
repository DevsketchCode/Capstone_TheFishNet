$(function() {

  // Function keeps the API key from being hacked
  function getURL(zip) {
    // Set Variables for API
    const weatherKey = "43b1a6beb72569b0ce472062c3570af7";
    return "https://api.openweathermap.org/data/2.5/weather?zip=" + zip +",us&appid=" + weatherKey + "&units=imperial";
  }

  function getDailyURL(latitude, longitude) {
    // Set Variables for API
    const weatherKey = "43b1a6beb72569b0ce472062c3570af7";
    return "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude +"&lon=" + longitude + "&exclude=minutely,hourly,current&appid=" + weatherKey + "&units=imperial";
  }

  function getDayName(increase) {
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let currentDay = d.getDay();
    let listedDay = "";

    // Subtracts the necessary days to loop if current day amount is more than 6
    if ((currentDay + increase) > 6) {
      switch(currentDay){
        case 0:
          currentDay = -7;
        break;
        case 1:
          currentDay = -6;
          break;
        case 2:
          currentDay = -5;
        break;
        case 3:
          currentDay = -4;
        break;
        case 4:
          currentDay = -3;
        break;
        case 5:
          currentDay = -2;
        break;
        case 6:
          currentDay = -1;
        break;
      }
    }

    if (increase === 0) {
      listedDay = "Today";
    } else {
      listedDay = day[(currentDay + increase)];
    }

    return listedDay;
  }

  function windDirection(degree) {
    // returns the direction text
    const direction = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    const converted = Math.floor((degree / 22.5) + 0.5);
    
    return direction[(converted % 16)];
  }

  // Call on API logic after current weather button is clicked
  $("#btn-submit").click(function() {

    // Verifies only a five digit zip code is entered to continue forward
    if ($("#zip").val() !== "" && !isNaN($("#zip").val())) {

      // Sending the OpenWeather API URL through the Fetch API's fetch method
      const zipCode = $("#zip").val();

      fetch(getURL(zipCode))
      .then(response => response.json())
      .then(data => {
        // Displays the API data in console
        //console.log(data);

        // Set the API response JSON objects to local object variables
        const {main, name, weather, wind} = data;

        // Set the image icon from the API's website
        const icon = "https://openweathermap.org/img/wn/" + weather[0].icon + "@2x.png";

        // Creates weather container displaying data from API
        const weatherData = `
        <div class="current-weather-container">
          <h2 class="city-name" data-name="${name}"><span>${name}</span></h2>
          <div class="city-temp">
            <h4>Temp: ${Math.round(main.temp)}<sup>°</sup>F</h4>
            <h4 id="feels">Feels Like: ${Math.round(main.feels_like)}<sup>°</sup>F</h4>
          </div>
          <figure class="icon-weather">
            <img class="icon" src=${icon} alt=${weather[0].main}>
            <figcaption><strong>${weather[0].description}</strong></figcaption>
            <h5>Wind: ${windDirection(wind.deg)} ${Math.round(wind.speed)} mph</h5>
            <h5>Humidity: ${Math.round(main.humidity)}%</h5>
          </figure>
        </div>`;
        $("#weather").html(weatherData);

        // Hides the search option
        $("#search-zip-title").hide("fast");
        $("#input-zip").hide("fast");

        // Displays the weather container, refresh button, and daily forecast button
        $("#weather").fadeIn("fast");
        $(".current-weather-container").fadeIn("normal");
        $("#btn-refresh").show("slow");
        $("#btn-weekly").show("slow");
      })
      .catch((err) => {
        // Catches the error returned when zip code provided is invalid and displays a message
        //console.error(err);
        alert("Please make sure you entered a valid zip code");
      });

    } else {
      alert("Please enter a valid five digit zip code");
    }

  });

  $("#btn-refresh").click(function(event) {
    // Refreshes the page
    location.reload();
  });

  // Call on API logic after daily forecast button is clicked
  $(".weekly").click(function() {

    // Verifies only a five digit zip code is entered to continue forward
    if ($("#zip").val() !== "" && !isNaN($("#zip").val())) {
      
      // Sending the OpenWeather API URL through the Fetch API's fetch method
      const zipCode = $("#zip").val();

      fetch(getURL(zipCode))
      .then(response => response.json())
      .then(data => {
        // Displays the API data in console
        //console.log(data);

        // Set the API response JSON objects to local object variables
        const {coord, name} = data;
        const latitude = coord.lat;
        const longitude = coord.lon;

        // Set title
        const cityName = `<h2 class="city-name" data-name="${name}"><span>${name}</span></h2><br>`;
        $("#weather-search").prepend(cityName);

        fetch(getDailyURL(latitude, longitude))
        .then(response => response.json())
        .then(data => {
          // Displays the API data in console
          console.log(data);

          // Set the API response JSON objects to local object variables
          const {daily} = data;

          // Clear previous content if already set from current weather search
          $("#weather").empty();

          // Creates weather container displaying data from API for each day
          for (let i = 0; i < daily.length; i++) {
            
            // Starts setting up the object literal
            let dailyData = "";

            // Set the image icon from the API's website
            const icon = "https://openweathermap.org/img/wn/" + daily[i].weather[0].icon + "@2x.png";

            dailyData += `
            <div class="weather-container">
              <h3>${getDayName(i)}</h3>
              <div class="city-temp">
                <h4>${Math.round(daily[i].temp.max)}<sup>°</sup>F</h4>
                <h4>${Math.round(daily[i].temp.min)}<sup>°</sup>F</h4>
              </div>
              <figure class="icon-weather">
                <img class="icon" src=${icon} alt=${daily[i].weather[0].main}>
                <figcaption><strong>${daily[i].weather[0].description}</strong></figcaption>
                <h5>${daily[i].pop * 100}%</h5>
              </figure>
            </div>`;
            $("#weather").append(dailyData);

          }

          // Hides the search option and daily forecast button
          $("#search-zip-title").hide("fast");
          $("#input-zip").hide("fast");
          $("#btn-weekly").hide("fast");

          // Displays the weather container and refresh button
          $("#weather").css("display", "flex").fadeIn("fast");
          $(".weather-container").fadeIn("normal");
          $("#btn-refresh").show("slow");
        })
        .catch((err) => {
          // Catches the error returned when zip code provided is invalid and displays a message
          //console.error(err);
          alert("Please make sure you entered a valid zip code");
        });

      })
      .catch((err) => {
        // Catches the error returned when zip code provided is invalid and displays a message
        //console.error(err);
        alert("Please make sure you entered a valid zip code");
      });

    } else {
      alert("Please enter a valid five digit zip code");
    }

  });
  
});