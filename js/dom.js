// DOM Activity
$("#users-fish-name").keypress(function(e) {
  // If enter is pressed on the search field, display the fish data
  if (e.which === 13) {
    $('#fish-search-button').click();
  }
});

// Function to hide all Lakes and Rivers
function quadrantHide() {
  $('.map-info').hide();
  $('.lake-river-list').hide();
  $('.north').hide();
  $('.south').hide();
  $('.east').hide();
  $('.west').hide();
}

// Function to display the Lakes and Rivers quadrant selection
function quadrantDisplay(quadrantSelection) {
  // Displays the image click information
  $('.map-info').fadeIn('fast');

  // Displays the lakes and rivers
  $('.lake-river-list').fadeIn();

  switch(quadrantSelection) {
    case 'north':
      $('.north').fadeIn('fast');
    break;

    case 'south':
      $('.south').fadeIn('fast');
    break;

    case 'east':
      $('.east').fadeIn('fast');
    break;

    case 'west':
      $('.west').fadeIn('fast');
    break;

    case 'all':
      $('.north').fadeIn('fast');
      $('.south').fadeIn('fast');
      $('.east').fadeIn('fast');
      $('.west').fadeIn('fast');
    break;
  }

}

// Used for multiple functions to keep track of which image is displaying for the search
let searchRealImageShown;

// Function to display fish search data
function displayFishSearchDetails(userData) {
  if(userData !== null && userData !== "") {
    if(userData.length >= 3 && userData.length <= 23) {
      // Get the index number of the searched fish from the fish object array
      let index = findFishData(userData);

      // Place the passed string into the search bar, to allow the user to adjust
      $('#users-fish-name').val(userData);

      // If the index returns -1, then no fish was found
      if(index !== -1) { 
        // Get API "English_Name" and strip out any extra characters
        let defaultNameFromAPI = fish[index].api_id_name.replace(/ *\([^)]*\) */g, "");

        // Set initial html string with the english name and scientific name
        let fishDataHtmlString = "";

        // Set default for drawing image instead of real image
        searchRealImageShown = false;

        // Only display fields if it has data
        fishDataHtmlString = "<div class='fish-data'>";
        fishDataHtmlString += (fish[index].image !== "") ? "<div id='f999999' onclick='fadeImage(" + index + ", 999999)'><img src='images/" + fish[index].image + "' class='fish-search-photo' alt='Photo of the fish'></div>" : "<div id='f999999'><img src='images/no_photo.png' class='fish-search-photo' alt='Photo of the fish'></div>";
        fishDataHtmlString += "<div class='fish-search-inner-details'>";      
        fishDataHtmlString += (fish[index].common_name !== "") ? "<h3>" + fish[index].common_name + "</h3>" : "";
        fishDataHtmlString += "<ul>";
        fishDataHtmlString += (fish[index].alt_names.length > 0) ? "<li>Alternate Names: " + fish[index].alt_names + "</li>" : "";
        fishDataHtmlString += (fish[index].common_name === "" && fish[index].alt_names.length <= 0) ? "<h3>" + defaultNameFromAPI + "</h3>" : "";
        fishDataHtmlString += (fish[index].scientific_name !== "") ? "<li>Scientific Name: " + fish[index].scientific_name + "</li>" : "";
        fishDataHtmlString += (fish[index].appearance !== "") ? "<li>Appearance: " + fish[index].appearance + "</li>" : "";
        fishDataHtmlString += (fish[index].average_size !== "") ? "<li>Average Size: " + fish[index].average_size + "</li>" : "";
        fishDataHtmlString += (fish[index].estimated_population !== "") ? "<li>Estimated Population: " + fish[index].estimated_population + "</li>" : "";
        fishDataHtmlString += (fish[index].states.length > 0) ? "<li>State Located: " + fish[index].states + "</li>" : "";
        fishDataHtmlString += (fish[index].popular_lakes.length > 0) ? "<li>Popular Lakes: " + fish[index].popular_lakes + "</li>" : "";
        fishDataHtmlString += (fish[index].popular_rivers.length > 0) ? "<li>Popular Rivers: " + fish[index].popular_rivers + "</li>" : "";
        fishDataHtmlString += (fish[index].bait.length > 0) ? "<li>Baits: " + fish[index].bait + "</li>" : "";
        fishDataHtmlString += (fish[index].hotspots !== "") ? "<li>Hotspot Tips: " + fish[index].hotspots + "</li>" : "";
        fishDataHtmlString += (fish[index].season !== "") ? "<li>Season: " + fish[index].season + "</li>" : "";
        fishDataHtmlString += (fish[index].time_of_day !== "") ? "<li>Best Time of Day: " + fish[index].time_of_day + "</li>" : "";
        fishDataHtmlString += (fish[index].lifespan !== "") ? "<li>Lifespan: " + fish[index].lifespan + "</li>" : "";

        // Add the google link if there was a scientific name found
        if(fish[index].scientific_name !== "") {


          fishDataHtmlString += "<p><a href='http://www.google.com/search?q=";
          fishDataHtmlString += encodeURIComponent(fish[index].scientific_name);
          console.log(fishDataHtmlString);
          fishDataHtmlString += "' target='_blank'>Search Google</a>" + 
          " | <a href='https://www.google.com/search?q=" + encodeURIComponent(fish[index].scientific_name) + "&hl=en&source=lnms&tbm=isch' target='_blank'>Google Images</a></p>";
        }
        fishDataHtmlString += "<p>Search results could also include non-local fish</p>";      
        fishDataHtmlString += "</ul>";
        fishDataHtmlString += "</div></div>";

        // Display Fish Data
        $("#fish-data").html(fishDataHtmlString);
      } else {

        // Populate fish cards if multiple results come back.
        if(multipleFishFoundIndices.length > 0) {

          fishDataHtmlString = "";
          // List all the possible matches
          $.each(multipleFishFoundIndices, function(i) {

            // Set variable to adjust card if known WI fish
            let wiFish = "";
            if(fish[multipleFishFoundIndices[i]].common_name !== "") {
              wiFish = " fish-search-wi-cards";
            }

            fishDataHtmlString += "<div id='fs" + i + "' class='site-card fish-search-cards" + wiFish + "'><div class='fish-search-card-upper'>";
            fishDataHtmlString += "<h4>" + fish[multipleFishFoundIndices[i]].api_id_name.replace(/ *\([^)]*\) */g, "") + "</h4>";
            fishDataHtmlString += "<p><a href='http://www.google.com/search?q=" + encodeURIComponent(fish[multipleFishFoundIndices[i]].scientific_name) + "' target='_blank'>Search Google</a><a href='https://www.google.com/search?q=" + 
            encodeURIComponent(fish[multipleFishFoundIndices[i]].scientific_name) + "&hl=en&source=lnms&tbm=isch' target='_blank'>Google Images</a></p></div>" + 
            " <p style='margin: 0'><i>Scientific Name: " + fish[multipleFishFoundIndices[i]].scientific_name + "</i></p>";
          
            if(fish[multipleFishFoundIndices[i]].common_name !== "") {
              fishDataHtmlString += "<p><p>Common Wisconsin Fish</p> <a href='Fish.html?findFish=" + encodeURIComponent(fish[multipleFishFoundIndices[i]].common_name) + "'>View More Details</a></p>";
            }
            
            fishDataHtmlString += "</div>";
          }); 

          $(".click-on-images").hide();

          // Adjust CSS for multiple results displayed
          $("#fish-data").append(fishDataHtmlString);
          $("#fish-data").addClass("fish-data-multiple-results");
          $(".fish-search").addClass("fish-search-results");
          
          if(multipleFishFoundIndices.length > 4) {
            $("#fish-search-details").css("width", "100%");
          }

        } else {
          $("#fish-data").html("<div><p>There was no fish named \"" + userData + "\" found. </p></div>");
        }
      }

      // Adjust the header to let the user know search results are displayed
      if (multipleFishFoundIndices.length > 0) {
        $("#fish-header").html("Multiple Search Results for \"" + userData + "\"");
      } else {
        $("#fish-header").html("Search Results for \"" + userData + "\"");
      }
     

      // Display the fish search results
      $("#fish-search-details").show();

      // Hide known fish list, so it is not confused from search results
      $(".fish-list").hide();

      $(".fish-search p").css("visibility", "visible");      

      $("#fish-search-reset-button").show();

      $("#user-input-alert").hide();
    } else {
      if(userData.length < 3) {
        // User input is too short, notify user
        $("#user-input-alert").html('Please enter more than two characters.');
        $("#user-input-alert").show();
      } else if(userData.length > 23) {
        $("#user-input-alert").html('Too many characters. Limit: 23');
        $("#user-input-alert").show();
      }
    }

  }
}

// Hide search results and show Known Fish list
$("#fish-search-reset-button").click(function() {

  // Adjust the header to let the user know known fish are displayed
  $("#fish-header").html("Common Fish in Wisconsin");

  // Hide the fish search results, so it is not confused from the known fish list
  $("#fish-search-details").hide();

  // Show known fish list
  $(".fish-list").show();

  // Clear the input fields
  $('#users-fish-name').val('');

  $("#fish-search-reset-button").hide();

  $(".fish-search p").css("visibility", "hidden");

  $(".click-on-images").show();
});

// Display fish data
$("#fish-search-button").click(function(){
  // Get a fish name from the input field
  let userData = $("#users-fish-name").val();
  
    // remove previous data
    $("#fish-data > div").remove();
    $("#fish-data > img").remove();

  // Display the fish search results from the input field
  displayFishSearchDetails(userData);
});

// Function displays multiple Wisconsin fish on the fish page
// Function cannot be called on page load due to API needed to be loaded
// Function call comes on main.js
function displayFish(){
  for(let i = 0; i < 12; i++){
    // Create index for fish API
    let index = findFishData(knownFishDetails[i].common_name);
    
    // Create string to insert into html
    let currentFishString = "";
    currentFishString += "<div class='fish-list-title'>" + knownFishDetails[i].common_name + "</div>";
    currentFishString += "<div class='fish-list-wrapper'>";
    currentFishString += "<div id='f" + i + "' class='fish-image' onclick='fadeImage(" + index + ", " + i + ")'>";
    currentFishString += (fish[index].image !== "") ? "<img src='images/" + fish[index].image + "' class='fish-search-photo'>" : "<img src='images/no_photo.png' class='fish-search-photo' alt='Photo of the fish'>";
    currentFishString += "</div>";
    currentFishString += "<div class='fish-list-data'>";
    currentFishString += "<ul>";
    currentFishString += "<li>Scientific Name: " + fish[index].scientific_name + "</li>";
    currentFishString += "<li>Appearance: " + knownFishDetails[i].appearance + "</li>";
    currentFishString += "<li>Average Size: " + knownFishDetails[i].average_size + "</li>";
    currentFishString += "<li>Baits: " + knownFishDetails[i].bait + "</li>";
    currentFishString += "<li>Hotspot Tips: " + knownFishDetails[i].hotspots + "</li>";
    currentFishString += "<li>Season: " + knownFishDetails[i].season + "</li>";
    currentFishString += "<li>Best Time of Day: " + knownFishDetails[i].time_of_day + "</li>";
    currentFishString += "<li>Lifespan: " + knownFishDetails[i].lifespan + "</li>";
    currentFishString += "</ul>";
    currentFishString += "</div>";
    currentFishString += "</div>";

    // Grab html element and insert string into it
    let fishListBody = document.querySelector("#fish-list-body");
    fishListBody.innerHTML += currentFishString;
  }
}

// Create array to hold status variables for each separate image using the index
let imageStatusVar = [];
for(let i = 0; i < 12; i++){
  // Set all variables to 1 because when the page loads all images are set to first image (unclicked)
  imageStatusVar[i] = 1;
}


// Function to switch image
function fadeImage(index, knownFishIndex){
  
  // Check status of image variable
  if(imageStatusVar[knownFishIndex] === 1){
    
    // Fade original image out then perform image switch and fade back in
    $("#f" + knownFishIndex).fadeOut("fast", function(){
      // Checks if a real image is present and if not will set to default "no image found" image
      $("#f" + knownFishIndex).html((fish[index].real_image !== "") ? "<img src='images/" + fish[index].real_image + "' class='fish-search-photo' alt='Photo of the fish'>" : "<img src='images/no_photo.png' class='fish-search-photo' alt='Photo of the fish'>");
      $("#f" + knownFishIndex).fadeIn("fast");
    });
    
    // Grab particular images status variable in array and update to 2 (clicked). Returning is not required.
    imageStatusVar[knownFishIndex] = 2;
    
    //return imageStatusVar;

    } else {
    // Switch back to original image when clicked again.
    $("#f" + knownFishIndex).fadeOut("fast", function(){
      $("#f" + knownFishIndex).html((fish[index].image !== "") ? "<img src='images/" + fish[index].image + "' class='fish-search-photo' alt='Photo of the fish''>" : "<img src='images/no_photo.png' class='fish-search-photo' alt='Photo of the fish'>");
      $("#f" + knownFishIndex).fadeIn("fast");
    });
    
    // Update status variable to 1 (clicked).
    imageStatusVar[knownFishIndex] = 1;
    //return imageStatusVar;
  }

  if(knownFishIndex === 999999) {
    if (searchRealImageShown === true) {
      // This else if statement is to swap images for the search results fish image.
      $("#f" + knownFishIndex).fadeOut("fast", function(){
        $("#f" + knownFishIndex).html((fish[index].image !== "") ? "<img src='images/" + fish[index].image + "' class='fish-search-photo' alt='Photo of the fish'>" : "<img src='images/no_photo.png' class='fish-search-photo' alt='Photo of the fish'>");
        $("#f" + knownFishIndex).fadeIn("fast");
      });

      searchRealImageShown = false;
    } else {
      // Get the alternate image depending on which one is shown.
      $("#f" + knownFishIndex).fadeOut("fast", function(){
        $("#f" + knownFishIndex).html((fish[index].real_image !== "") ? "<img src='images/" + fish[index].real_image + "' class='fish-search-photo' alt='Photo of the fish'>" : "<img src='images/no_photo.png' class='fish-search-photo' alt='Photo of the fish'>");
        $("#f" + knownFishIndex).fadeIn("fast");
      });

      searchRealImageShown = true;
    }
  }
}

// Display Geographical Maps
$('.lake-river-list img').click(function() {

  // Sets the width
  let imageWidth = this.width;

  if (this.src.indexOf("map") !== -1) {
    //removes the _map.jpg from the image to set up new image
    $(this).stop().fadeOut('fast', function(){
      $(this).attr('src', $(this).attr('src').replace('_map.jpg', '.jpg')).stop().fadeIn('fast');
    });

  } else {
    //removes the .jpg from the image to set up new image
    $(this).stop().fadeOut('fast', function() {
        $(this).attr('src', $(this).attr('src').replace('.jpg', '_map.jpg')).width(imageWidth).stop().fadeIn('fast');
    });
    
  }
});

// Hide the lakes and rivers when loaded
$(function() {
  $('.lake-river-list').hide();
});

// Display lakes and rivers based on input selection
$('#quadrant-form').submit(function(event) {
  event.preventDefault();

  //Make sure all quadrants are hidden upon selection
  quadrantHide();

  let quadrantSelection = $('#quadrant-selection option:selected').val();
  quadrantDisplay(quadrantSelection);
});

function resetWeather() {
  $('#weather').html('').hide();
  $("#input-zip").show();  
  $("#btn-refresh").hide(); 
}

function goToWeather(zip, lake) {
  resetWeather();
  $('#zip').val(zip);
  $('#btn-submit').trigger("click");
  $('#return-to-lake').html("<a href='#" + lake + "-offset-link'>Return to the lake at zip: " + zip + ".</a>");
}

// Reset and hide the weather field
$('#return-to-lake').click(function(event) {
  resetWeather();
  $('#return-to-lake').html('');
});