// DOM Activity
$("#fishSearch").click(function(){

  // Get a fish name from the input field
  let userData = $("#usersFishName").val();

  if(userData !== "") {
    let index = FindFishData(userData);

    if(index !== -1) { 
      // get the name from the fish object partially populated from the API, with the proper spacing
      let english_name = fish[index].name.replaceAll('=', ' aka: ');
      let alternate_name = fish[index].alt_name;
      let scientific_name = fish[index].scientific_name;
      // Display Fish Data
      $("#fishData").html("<p>" + english_name + ": " + "<br>" + alternate_name + " : " + scientific_name + "</p>" + 
      "<ul>" + 
        "<li>Record #: " + index + "</li>" +
        "<li>Appearance: " + fish[index].appearance + "</li>" + 
        "<li>Average Size: " + fish[index].average_size + "</li>" + 
        "<li>Estimated Population: " + fish[index].estimated_population + "</li>" + 
        "<li>State Located: " + fish[index].states + "</li>" + 
        "<li>Popular Lakes: " + fish[index].popular_lakes + "</li>" + 
        "<li>Popular Rivers: " + fish[index].popular_rivers + "</li>" + 
        "<li>Baits: " + fish[index].bait + "</li>" + 
        "<li>Hotspot Tips: " + fish[index].hotspots + "</li>" + 
        "<li>Season: " + fish[index].season + "</li>" + 
        "<li>Best Time of Day: " + fish[index].time_of_day + "</li>" + 
        "<li>Lifespan: " + fish[index].lifespan + "</li>" + 
        "<li>Image: " + fish[index].image + "</li>" + 
      "</ul>");

      // Append the google link if there was a scientific name found
      $("#fishData").append("<p><a href='http://www.google.com/search?q= +" + encodeURIComponent(scientific_name) + "' target='_blank'>Search Google</a>" + 
      " | <a href='https://www.google.com/search?q=" + encodeURIComponent(scientific_name) + "&hl=en&source=lnms&tbm=isch' target='_blank'>Google Images</a></p>");
    } else {
      $("#fishData").html("<p>There was no fish named \"" + userData + "\" found. </p>" + "<p>You may want to try and be more specific.<br><i>Example: \"rainbow trout\" instead of \"trout\".</i></p>");
    }
  }
});