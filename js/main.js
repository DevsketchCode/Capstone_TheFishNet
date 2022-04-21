// Onload function
$(function() {

  // Get the json data from the api to get the scientific names
  $.getJSON('http://www.openfisheries.org/api/landings/species.json', function(data) {
    // Loop through the json array and insert a new fish for each entry with it's english and scientific names
    $.each(data, function(key,value) {
      // This json only has the name and the scientific name, the rest of the object will be set to the defaults      
      fish.push(new FishObject(value.english_name, value.scientific_name));
    }); 
    // Populate the rest of the details
    FillInFishDetails();
  });
});