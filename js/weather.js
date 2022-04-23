$(function() {

  // Call on API logic after submit button is clicked
  $("#btn-submit").click(function(event) {
    // Stops the default form action
    event.preventDefault();

    // Set Variables for API
    const weatherKey = "43b1a6beb72569b0ce472062c3570af7";
    const zipCode = $("#zip").val();
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${weatherKey}`;

    // Sending the OpenWeather API URL through the Fetch API's fetch method
    fetch(url)
    .then(response => response.json())
    .then(data => {
      // do stuff with the data
      console.log(data);

      alert("The city is: " + data.name + " and the current weather is " + data.weather[0]["description"]);
    })
    .catch(() => {
      // Catches the error returned when zip code provided is invalid and displays a message
      msg.textContent = "Please use a valid zip code";
    });

  });
  
});