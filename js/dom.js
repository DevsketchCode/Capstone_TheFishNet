// DOM Activity
$("#users-fish-name").keypress(function(e) {
  // If enter is pressed on the search field, display the fish data
  if (e.which === 13) {
    $('#fish-search').click();
  }
});

// Display fish data
$("#fish-search").click(function(){
  // Get a fish name from the input field
  let userData = $("#users-fish-name").val();

  if(userData !== "") {
    let index = FindFishData(userData);

    if(index !== -1) { 
      // Set initial html string with the english name and scientific name
      let fishDataHtmlString = "";
      // Only display fields if it has data
      fishDataHtmlString = (fish[index].image !== "") ? "<img src='images/" + fish[index].image + "' class='fish-search-photo' alt='Photo of the fish'>" : "<img src='images/no_photo.png' class='fish-search-photo' alt='Photo of the fish'>";
      fishDataHtmlString += "<div class='fish-search-inner-details'>";      
      fishDataHtmlString += (fish[index].common_name !== "") ? "<h3>" + fish[index].common_name + "</h3>" : "";
      fishDataHtmlString += "<ul>";
      fishDataHtmlString += (fish[index].alt_names.length > 0) ? "<li>Alternate Names: " + fish[index].alt_names + "</li>" : "";
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

      console.log(fish[index].popular_lakes.length);
      // Add the google link if there was a scientific name found
      if(fish[index].scientific_name !== "") {
        fishDataHtmlString += "<p><a href='http://www.google.com/search?q=" + encodeURIComponent(fish[index].scientific_name) + "' target='_blank'>Search Google</a>" + 
        " | <a href='https://www.google.com/search?q=" + encodeURIComponent(fish[index].scientific_name) + "&hl=en&source=lnms&tbm=isch' target='_blank'>Google Images</a></p>";
      }
      fishDataHtmlString += "</ul>";
      fishDataHtmlString += "</div>";

      // Display Fish Data
      $("#fish-data").html(fishDataHtmlString);
    } else {
      $("#fish-data").html("<div><p>There was no fish named \"" + userData + "\" found. </p>" + "<p>You may want to try and be more specific.<br><i>Example: \"rainbow trout\" instead of \"trout\".</i></p></div>");
    }
  }

  // Display the fish search results
  $("#fish-search-details").show();
});

// Function displays 10 fish on fish page
// Function cannot be called on page load due to API needed to be loaded
// Function call comes on main.js
function displayFish(){
  for(let i = 0; i < 10; i++){
    // Create index for fish API
    let index = FindFishData(knownFishDetails[i].common_name);
    
    // Create string to insert into html
    let currentFishString = "";
    currentFishString += "<div class='fish-list-title'>" + knownFishDetails[i].common_name + "</div>";
    currentFishString += "<div class='fish-list-wrapper'>";
    currentFishString += "<div>";
    currentFishString += (fish[index].image !== "") ? "<img src='images/" + fish[index].image + "' class='fish-search-photo' alt='Photo of the fish'>" : "<img src='images/no_photo.png' class='fish-search-photo' alt='Photo of the fish'>";
    currentFishString += "</div>";
    currentFishString += "<div>";
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
