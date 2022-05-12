// Declare global fish variable
let fish = [];
let multipleFishFoundIndices = [];

// Create FishDataObject Constructor
// OPTIONAL parameters have defaults set using two pipes: || then the default value
function fishObject(api_id_name, scientific_name, common_name, alt_names, appearance, average_size, estimated_population, states, popular_lakes, popular_rivers, bait, hotspots, season, time_of_day, lifespan, image, real_image) {
  this.api_id_name = api_id_name;
  this.scientific_name = scientific_name;
  this.common_name = common_name || "";
  this.alt_names = alt_names || [];
  this.appearance = appearance || "";
  this.average_size = average_size || "";
  this.estimated_population = estimated_population || "";
  // This item would want an array of states they could be found in
  this.states = states || [];
  // This item would want an array of lakes
  this.popular_lakes = popular_lakes || [];
  // This item would want an array of rivers
  this.popular_rivers = popular_rivers || [];
  // This item would want an array of baits
  this.bait = bait || [];
  this.hotspots = hotspots || "";
  this.season = season || "";
  this.time_of_day = time_of_day || "";
  this.lifespan = lifespan || "";
  this.image = image || "";
  this.real_image = real_image || "";
}

// NOTE: This function MUST be called from the main.js file, the last file loaded or to a file after main.js
function findFishData(fishName) {

  // instantiate variable
  let index = -1;
  // Check for validation purposes
  if(fishName !== "") {
    // Search through the object array for the specified fish
    // This searches the common_name, case insensitive and ignoring spaces
    index = fish.findIndex(i => i.common_name.toLowerCase() === fishName.toLowerCase());
    // Check API id name
    if(index === -1) {
      index = fish.findIndex(i => i.api_id_name.toLowerCase() === fishName.toLowerCase());
    }    
    //Check alternate names, loop through the knownFishDetails alternate name array
    if(index === -1) {
      // Loop through each common Wisconsin known Fish
      $.each(knownFishDetails, function(value) {
        let fishFound = false;
        let fishIdName = "";
        // Loop through each alternate name of the known fish
        $.each(knownFishDetails[value].alt_names, function(value2) {
          // Check to see if the alternate name matches the fishName passed in findFishData (also the fish search field)
          if(fishName.toLowerCase() === knownFishDetails[value].alt_names[value2].toLowerCase()) {
            // Mark that the fish was found
            fishFound = true;

            // Store the fish API name
            fishIdName = knownFishDetails[value].api_id_name;
          }
        });

        // If the fish was found and an API name populated (fishIDName)
        if(fishFound && fishIdName !== ""){
          // Get the index of the found fishName from the main fish object array
          index = fish.findIndex(i => (i.api_id_name.toLowerCase() === fishIdName.toLowerCase()));
        }
      });
    }

    // Exact match wasn't found, search for partials using the api_id_name
    // Store the multiple results in an array of index numbers to access the fish details
    if(index === -1) {
      // reset array
      multipleFishFoundIndices = [];
      // Fina and store the index of each fish that matches the user input
      multipleFishFoundIndices = fish.reduce(function(array, element, index) {
        if (element.api_id_name.toLowerCase().includes(fishName.toLowerCase())) {
          array.push(index);
        }
        return multipleFishFoundIndices;
    }, []);
    }
  }
  return index;
}


function fillInFishDetails() {
  // Merge API fish results with custom fish details
  $.each(knownFishDetails, function(key, value) {
    // Find the knownFish index in the API list and get the index number
    let fishIndex = findFishData(value.api_id_name);
    // Loop through the knownFish, if it is not found in the API data and its scientific name is not empty, add the full knownFish entry to the list
    if(fishIndex === -1 && value.scientific_name !== "") {
      // Add the new fish to the fish object array
      fish.push(new fishObject(value.api_id_name, value.scientific_name, value.common_name, value.alt_names, value.appearance, value.average_size, value.estimated_population, value.states, value.popular_lakes, value.popular_rivers, value.bait, value.hotspots, value.season, value.time_of_day, value.lifespan, value.image, value.real_image));
    } else {
      // Add the additional details for each of the known fish to the appropriate fish Object
      fish[fishIndex].common_name = value.common_name;
      fish[fishIndex].alt_names = value.alt_names;
      fish[fishIndex].appearance = value.appearance;
      fish[fishIndex].average_size = value.average_size;
      fish[fishIndex].estimated_population = value.estimated_population;
      fish[fishIndex].states = value.states;
      fish[fishIndex].popular_lakes = value.popular_lakes;
      fish[fishIndex].popular_rivers = value.popular_rivers;
      fish[fishIndex].bait = value.bait;
      fish[fishIndex].hotspots = value.hotspots;
      fish[fishIndex].season = value.season;
      fish[fishIndex].time_of_day = value.time_of_day;
      fish[fishIndex].lifespan = value.lifespan;
      fish[fishIndex].image = value.image;
      fish[fishIndex].real_image = value.real_image;
    }
  });

  
  // Sort all the fish alphabetically
  fish.sort((a, b) => a.api_id_name.localeCompare(b.api_id_name));

  // Sort fish array, but this time, putting the known WI fish at the top (ones that have common_names) and alphabetized
  fish.sort((a, b) => {
    if(a.common_name === '') {
      return 1;
    }
    if(b.common_name === '') {
      return -1;
    }
    //a.common_name.localeCompare(b.common_name)
    if(a.common_name === b.common_name) {
      return 0;
    }
    return (a.common_name < b.common_name) ? -1 : 1;
  });
}