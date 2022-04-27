// Declare global fish variable
let fish = [];

// Create FishDataObject Constructor
// OPTIONAL parameters have defaults set using two pipes: || then the default value
function FishObject(api_id_name, scientific_name, common_name, alt_names, appearance, average_size, estimated_population, states, popular_lakes, popular_rivers, bait, hotspots, season, time_of_day, lifespan, image) {
  this.api_id_name = api_id_name;
  this.scientific_name = scientific_name;
  this.common_name = common_name || "";
  this.alt_names = alt_names || [""];
  this.appearance = appearance || "";
  this.average_size = average_size || "";
  this.estimated_population = estimated_population || "";
  // This item would want an array of states they could be found in
  this.states = states || [""];
  // This item would want an array of lakes
  this.popular_lakes = popular_lakes || [""];
  // This item would want an array of rivers
  this.popular_rivers = popular_rivers || [""];
  // This item would want an array of baits
  this.bait = bait || [""];
  this.hotspots = hotspots || "";
  this.season = season || "";
  this.time_of_day = time_of_day || "";
  this.lifespan = lifespan || "";
  this.image = image || "";
}

function FindFishData(fishName) {
  // instantiate variable
  let index = -1;
  // Check for validation purposes
  if(fishName !== "") {
    // Search through the object array for the specified fish
    // This searches the common_name, case insensitive and ignoring spaces
    index = fish.findIndex(i => i.common_name.toLowerCase().replaceAll(/\s/g,'') === fishName.toLowerCase().replaceAll(/\s/g,''));
    // Check API id name
    if(index === -1) {
      index = fish.findIndex(i => i.api_id_name.toLowerCase().replaceAll(/\s/g,'') === fishName.toLowerCase().replaceAll(/\s/g,''));
    }    
    //Check alternate names, loop through the knownFishDetails alternate name array
    if(index === -1) {
      // Loop through each knownFish
      $.each(knownFishDetails, function(value) {
        let fishFound = false;
        let fishIdName = "";
        // Loop through each alternate name of the known fish
        $.each(knownFishDetails[value].alt_names, function(value2) {
          // Check to see if the alternate name matches the fishName passed in FindFishData (also the fish search field)
          if(fishName.toLowerCase().replaceAll(/\s/g,'') === knownFishDetails[value].alt_names[value2].toLowerCase().replaceAll(/\s/g,'')) {
            // Mark that the fish was found
            fishFound = true;

            // Store the fish API name
            fishIdName = knownFishDetails[value].api_id_name;
          }
        });

        // If the fish was found and an API name populated (fishIDName)
        if(fishFound && fishIdName !== ""){
          // Get the index of the found fishName from the main fish object array
          index = fish.findIndex(i => (i.api_id_name.toLowerCase().replaceAll(/\s/g,'') === fishIdName.toLowerCase().replaceAll(/\s/g,'')));
        }
      });
    }
  }
  return index;
}

function FillInFishDetails() {
  //TODO: Loop through known fish details and put them into the fishes object if they are not there already
  $.each(knownFishDetails, function(key, value) {
    // Find the knownFish index in the API list and get the index number
    let fishIndex = FindFishData(value.api_id_name);
    // Loop through the knownFish, if it is not found in the API data and its scientific name is not empty, add the full knownFish entry to the list
    if(fishIndex === -1 && value.scientific_name !== "") {
      // Add the new fish to the fish object array
      fish.push(new FishObject(value.api_id_name, value.scientific_name, value.common_name, value.alt_names, value.appearance, value.average_size, value.estimated_population, value.states, value.popular_lakes, value.popular_rivers, value.bait, value.hotspots, value.season, value.time_of_day, value.lifespan, value.image));
      //console.log("Fish Added: " + value.name + ": Scientific: " + value.scientific_name);

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
    }

  });
}