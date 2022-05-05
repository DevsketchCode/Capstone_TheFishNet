// Onload function
$(function() {

  // Get the json data from the api to get the scientific names
  // Anything that needs to load fish data must be coded in JSON function
  $.getJSON('https://www.openfisheries.org/api/landings/species.json', function(data) {
    // Loop through the json array and insert a new fish for each entry with it's english and scientific names
    $.each(data, function(key,value) {
      // This json only has the english_name and the scientific_name columns, the rest of the object will be set to the defaults      
      fish.push(new FishObject(value.english_name, value.scientific_name));
    }); 
    // Populate the rest of the details
    FillInFishDetails();

    // First check to see if the URL includes any parameters for a fish to show
    let url_string = window.location.href;
    let url = new URL(url_string);
    let findFish = url.searchParams.get("findFish");

    if(findFish !== null && findFish!== "") {
      // decode the URL parameter value
      findFish = decodeURIComponent(findFish);

      // Display the fish search results from the URL parameter
      displayFishSearchDetails(decodeURIComponent(findFish));
    }

    displayFish();
  });
});