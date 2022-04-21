// Declare global fish variable
let fish = [];

// Create FishDataObject Constructor
// OPTIONAL parameters have defaults set using two pipes: || then the default value
function FishObject(name, scientific_name, alt_name, appearance, average_size, estimated_population, states, popular_lakes, popular_rivers, bait, hotspots, season, time_of_day, lifespan, image) {
  this.name = name;
  this.scientific_name = scientific_name;
  this.alt_name = alt_name || "";
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

function FindFishData(english_fish_name) {
  // instantiate variable
  let index = -1;
  // Check for validation purposes
  if(english_fish_name !== "") {
    // Search through the object array for the specified fish
    // This searches names case insensitive and ignoring spaces
    index = fish.findIndex(i => i.name.toLowerCase().replaceAll(/\s/g,'') === english_fish_name.toLowerCase().replaceAll(/\s/g,''));
    if(index === -1) {
      index = fish.findIndex(i => i.alt_name.toLowerCase().replaceAll(/\s/g,'') === english_fish_name.toLowerCase().replaceAll(/\s/g,''));
    }
  }
  return index;
}

function FillInFishDetails() {
  //TODO: Loop through known fish details and put them into the fishes object if they are not there already
  $.each(knownFishDetails, function(key, value) {
    // Find the knownFish index in the API list and get the index number
    let fishIndex = FindFishData(value.name);
    // Loop through the knownFish, if it is not found in the API data and its scientific name is not empty, add it to the list
    if(fishIndex === -1 && value.scientific_name !== "") {
      // Add the new fish to the fish object array
      fish.push(new FishObject(value.name, value.scientific_name, value.alt_name, value.appearance, value.average_size, value.estimated_population, value.states, value.popular_lakes, value.popular_rivers, value.bait, value.hotspots, value.season, value.time_of_day, value.lifespan, value.image));
      //console.log("Fish Added: " + value.name + ": Scientific: " + value.scientific_name);

    } else {
      // Add the additional details for each of the known fish to the appropriate fish Object
      fish[fishIndex].alt_name = value.alt_name;
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