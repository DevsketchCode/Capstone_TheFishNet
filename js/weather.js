$(function() {

  // Function keeps the API key from being hacked
  function getURL(zip) {
    // Set Variables for API
    const weatherKey = "43b1a6beb72569b0ce472062c3570af7";
    return `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${weatherKey}&units=imperial`;
  }

  function windDirection(degree) {
    // Sets the array for the direction
    const direction =  ["N", "NW", "W", "SW", "S", "SE", "E", "NE"];

    // Converts the inputted degree angle to the quadrant direction between 0 and 360 degrees
    const converted = Math.round((degree * Math.PI / 180) - 1);

    // returns the direction text
    return direction[converted];
  }

  // Call on API logic after submit button is clicked
  $("#btn-submit").click(function(event) {
    // Stops the default form action
    event.preventDefault();

    // Sending the OpenWeather API URL through the Fetch API's fetch method
    const zipCode = $("#zip").val();

    fetch(getURL(zipCode))
    .then(response => response.json())
    .then(data => {
      // Displays the API data in console
      console.log(data);

      // Set the API response JSON objects to local object variables
      const {main, name, weather, wind} = data;

      // Set the image icon from the API's website
      const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      // Creates weather card
      $("#weather").append(`<li>`);
      const cardData = `
        <h2 class="city-name" data-name="${name}">
          <span>${name}</span>
        </h2>
        <div class="temp-span">
          <strong>High: ${Math.round(main.temp_max)}<sup>°F</sup><strong>
        </div>
        <div class="temp-span">
          <strong>Low: ${Math.round(main.temp_min)}<sup>°F</sup><strong>
        </div>
        <figure class="icon-weather">
          <img class="icon" src=${icon} alt=${weather[0].main}>
          <figcaption><strong>${weather[0].description}</strong></figcaption>
          <h5>Wind: ${windDirection(wind.deg)} ${Math.round(wind.speed)} mph</h5>
          <h5>Humidity: ${Math.round(main.humidity)}%</h5>
        </figure>
        <div class="city-temp">
          <h4>Temp: ${Math.round(main.temp)}<sup>°F</sup></h4>
          <h4>Feels Like: ${Math.round(main.feels_like)}<sup>°F</sup></h4>
        </div>
      `;
      $("#weather").append(cardData).append(`</li>`);

      // Hides the seach option
      $("#input-zip").hide("fast");

      // Displays the weather card and refresh button
      $("#weather").show("normal");
      $("#btn-refresh").show("slow");
    })
    .catch((err) => {
      // Catches the error returned when zip code provided is invalid and displays a message
      //console.error(err);
      alert("Please use a valid zip code");
    });

  });

  $("#btn-refresh").click(function(event) {
    // Stops the default form action
    event.preventDefault();

    // Refreshes the page
    location.reload();
  });
  
});