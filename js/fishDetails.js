// Array object of all the fish details available
// Scientific_name is not needed, as it is populated automatically for the ones listed here.
// Test using console.log at the bottom, after adding a fish.  If the scientific name isn't found in the online database, then you can add it here instead.
// For reference only, the scientific_names that are populated from the API have the populatedFromAPI placeholder name.
// That field is overwritten by the API.
// The api_id_name must match the actual naming convention in the API that is different in some cases.
const knownFishDetails = [
  {
    "api_id_name": "Largemouth black bass",
    "scientific_name": "populatedFromAPI",
    "common_name": "Largemouth bass", 
    "alt_names": ["Largemouth black bass"],
    "appearance": "Olive-green to greenish gray with the lower jaw extruding further than the upper.",
    "average_size": "18 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Big Saint Germain Lake", "Lake Winnebago", "Lake Eau Claire", "Jute Lake", "Lake Wisconsin", "Callahan Lake", "Lake Pepin", "Lac La Belle", "Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Mississippi River", "Eagle River", "Chippewa River", "Pike River", "Kinnickinnic River"],
    "bait": ["Almost anything from crayfish to large insects"],
    "hotspots": "Shaded areas during the day, deeper water under logs in the evening",
    "season": "Spring and Summer when the weather is warm. Inactive during winter.",
    "time_of_day": "Early morning or evening",
    "lifespan": "16 years",
    "image": "largemouthBass.png",
  },
  {
    "api_id_name": "Rock bass",
    "scientific_name": "populatedFromAPI",
    "common_name": "Rock bass", 
    "alt_names": [""],    
    "appearance": "Red eyes with six spines in the anal fin. Rows of black dots on its sides. A spined dorsal fin united with a soft-rayed one.",
    "average_size": "7 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Lake Superior", "Lake Michigan"],
    "popular_rivers": [""],
    "bait": ["Small fish", "Young rock bass", "Yellow perch", "Minnows", "Crawfish"],
    "hotspots": "Rocky lakes and rivers",
    "season": "Spring",
    "time_of_day": "Early morning or evening",
    "lifespan": "10 years",
    "image": "rockBass.png",
  },
  {
    "api_id_name": "Smallmouth bass",
    "scientific_name": "populatedFromAPI",
    "common_name": "Smallmouth bass", 
    "alt_names": ["smallie"],     
    "appearance": "Connected dorsal fins. Upper jaw bone extends only to about middle of eye. Eyes can be red or orangish.",
    "average_size": "18-20 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Lake Michigan", "Lake Superior", "Big Saint Germain Lake", "Lake Winnebago", "Lake Eau Claire", "Jute Lake", "Lake Wisconsin", "Lake Pepin", "Lac La Belle", "Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Kickapoo River", "Mississippi River", "Eagle River", "Chippewa River", "Flambeau River", "Namekagon River", "Bad River"],
    "bait": ["Basically anything it can get such as snakes or insects."],
    "hotspots": "Usually around cover. Such as trees, vegetation, or roots.",
    "season": "Spring and summer. Inactive in the winter.",
    "time_of_day": "Early morning or evening",
    "lifespan": "6-14 years.",
    "image": "smallmouthBass.png",
  },
  {
    "api_id_name": "White bass",
    "scientific_name": "populatedFromAPI",
    "common_name": "White bass", 
    "alt_names": ["Silver bass"], 
    "appearance": "Silvery-white with five to eight dusky black stripes on the sides.",
    "average_size": "10-12 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Lake Winnebago", "Lake Pepin"],
    "popular_rivers": ["Fox River", "Mississippi River", "Wolf River", "Eagle River"],
    "bait": ["Other organisms such as minnows and small crustaceans."],
    "hotspots": "Near rocks or sunken trees.",
    "season": "March to May",
    "time_of_day": "Prior to sunrise and just after sunset.",
    "lifespan": "8 years",
    "image": "whiteBass.png",
  },
  {
    "api_id_name": "Bluegill",  
    "scientific_name": "populatedFromAPI",
    "common_name": "Bluegill", 
    "alt_names": ["Sunny", "Panfish"],   
    "appearance": "Compressed saucer-shaped body. Blueish-purple tag on cheek. Mostly olive green with orangish underbelly. Colors vary from populations.",
    "average_size": "6-8 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Big Saint Germain Lake", "Lake Winnebago", "Lake Eau Claire", "Jute Lake", "Lake Wisconsin", "Callahan Lake", "Lake Pepin", "Lac La Belle", "Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Mississippi River", "Eagle River", "Chippewa River", "Pike River", "Flambeau River", "Kinnickinnic River", "Namekagon River", "Bad River"],
    "bait": ["Insects or fish eggs"],
    "hotspots": "Mostly shallows with cover.",
    "season": "Anytime of year. Spawn in spring.",
    "time_of_day": "Daytime usually is best",
    "lifespan": "6 years",
    "image": "bluegill.png",
  },
  {
    "api_id_name": "Black bullhead",
    "scientific_name": "populatedFromAPI",
    "common_name": "Black bullhead", 
    "alt_names": ["Mud cat"], 
    "appearance": "Very broad head with whiskers. Dark brown to black with white underbelly.",
    "average_size": "8-14 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": [""],
    "popular_rivers": ["Pike River"],
    "bait": ["About anything that is dead or alive."],
    "hotspots": "Usually near the bottom",
    "season": "April to June",
    "time_of_day": "During day will work but they are more active at night.",
    "lifespan": "5 years",
    "image": "blackBullhead.png",
  },
  {
    "api_id_name": "Yellow bullhead",
    "scientific_name": "populatedFromAPI",
    "common_name": "Yellow bullhead", 
    "alt_names": ["Mudpout"], 
    "appearance": "Dark brown on back and fading into a yellow underbelly. Wide head with whiskers.",
    "average_size": "6-14 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": [""],
    "popular_rivers": ["Pike River"],
    "bait": ["About anything from vegetation and minnows."],
    "hotspots": "Areas with dense vegetation",
    "season": "April to June",
    "time_of_day": "During day will work but better luck at night.",
    "lifespan": "7 years",
    "image": "yellowBullhead.png",
  },
  {
    "api_id_name": "Brown bullhead",
    "scientific_name": "populatedFromAPI",
    "common_name": "Brown bullhead", 
    "alt_names": ["Mud cat"], 
    "appearance": "Olive to yellowish body with brown on the back. Smoothed skin with broad flat head with whiskers.",
    "average_size": "12 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": [""],
    "popular_rivers": ["Pike River"],
    "bait": ["Anything from algae to crayfish"],
    "hotspots": "Deeper waters with rocky and clean bottoms.",
    "season": "April to June",
    "time_of_day": "Anytime, but low light hours being best.",
    "lifespan": "7 years",
    "image": "brownBullhead.png",
  },
  {
    "api_id_name": "Channel catfish",
    "scientific_name": "populatedFromAPI",
    "common_name": "Channel catfish", 
    "alt_names": ["Mud cat"], 
    "appearance": "Gray to olive with a pale underbelly. Eight long whiskers on the broad head.",
    "average_size": "15-24 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Lake Winnebago", "Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Kickapoo River", "Mississippi River", "Eagle River", "Namekagon River"],
    "bait": ["Anythine in their way, from garbage to other fish."],
    "hotspots": "Cloudy water, but can be found anywhere.",
    "season": "Any season but summer is best.",
    "time_of_day": "Low light hours in summer and daytime in winter.",
    "lifespan": "15 years",
    "image": "channelCatfish.png",
  },
  {
    "api_id_name": "Flathead catfish",
    "scientific_name": "populatedFromAPI",
    "common_name": "Flathead catfish", 
    "alt_names": ["Mississippi cat"], 
    "appearance": "Pale yellow to light brown with pale underbelly. Head is broad and very flat with projecting lower jaw.",
    "average_size": "25-46 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Lake Winnebago"],
    "popular_rivers": ["Mississippi River"],
    "bait": ["Other fish and crustations"],
    "hotspots": "Deeper cloudy water with little to no current.",
    "season": "Pre winter or March to May.",
    "time_of_day": "Lower light hours",
    "lifespan": "5-22 years",
    "image": "flatheadCatfish.png",
  },
  {
    "api_id_name": "Black crappie",
    "scientific_name": "populatedFromAPI",
    "common_name": "Black crappie", 
    "alt_names": ["Crappie", "Panfish"], 
    "appearance": "Silver body with black spots covering it. Also having a projecting lower jaw.",
    "average_size": "11 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Lake Michigan", "Lake Superior", "Big Saint Germain Lake", "Lake Winnebago", "Lake Eau Claire", "Jute Lake", "Lake Wisconsin", "Callahan Lake", "Lake Pepin", "Lac La Belle", "Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Mississippi River", "Eagle River", "Chippewa River", "Pike River", "Flambeau River", "Kinnickinnic River", "Namekagon River", "Bad River"],
    "bait": ["Smaller bait fish and crustations."],
    "hotspots": "Around cover in shallow water. Well shaded areas work well.",
    "season": "May and June",
    "time_of_day": "Early morning and evening",
    "lifespan": "15 years",
    "image": "",
  },
  {
    "api_id_name": "Muskellunge",
    "scientific_name": "Esox masquinongy",
    "common_name": "Muskellunge", 
    "alt_names": ["Musky", "Muskie", "Lunge"], 
    "appearance": "Silver body with verticle oblique stripes or blotches. Fins can be green or red-brown. Long head filled with teeth.",
    "average_size": "28-48 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Chippewa Flowage", "Big Saint Germain Lake", "Lake Winnebago", "Lake Eau Claire", "Jute Lake", "Lake Wisconsin", "Callahan Lake", "Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Fox River", "Eagle River", "Chippewa River", "Flambeau River", "Namekagon River", "Bad River"],
    "bait": ["Any smaller fish, insect, and even ducks."],
    "hotspots": "Anywhere with cover such as sunken trees.",
    "season": "Sumemr when water is warm.",
    "time_of_day": "Dawn and dusk",
    "lifespan": "18 years",
    "image": "",
  },
  {
    "api_id_name": "American yellow perch",
    "scientific_name": "populatedFromAPI",
    "common_name": "Yellow perch", 
    "alt_names": ["American yellow perch", "Striped perch", "Panfish"], 
    "appearance": "Yellow oval body with black stripes. It has a dorsal fin that has 12-14 spines and a second fin that has 2-3 spines.",
    "average_size": "4-10 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Big Saint Germain Lake", "Lake Winnebago", "Lake Eau Claire", "Jute Lake", "Lake Wisconsin", "Callahan Lake", "Lake Pepin", "Lac La Belle", "Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Mississippi River", "Eagle River", "Chippewa River", "Pike River", "Flambeau River", "Kinnickinnic River", "Namekagon River", "Bad River"],
    "bait": ["Minnows", "Crayfish", "Mealworms", "Nightcrawlers"],
    "hotspots": "Typically found in highly vegetated shallow waters among reeds and weeds.",
    "season": "Spring",
    "time_of_day": "Daylight hours in the early morning or late evening.",
    "lifespan": "9-10 years",
    "image": "",
  },
  {
    "api_id_name": "Northern pike",
    "scientific_name": "populatedFromAPI",
    "common_name": "Northern pike", 
    "alt_names": ["Pike", "Northern"],
    "appearance": "Olive green body with a yellow to white shaded belly. Light dotted stripes along its dark body.Sharp teeth, so be very careful to avoid the mouth!",
    "average_size": "16-22 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Big Saint Germain Lake", "Lake Winnebago", "Lake Eau Claire", "Lake Wisconsin", "Lake Pepin", "Lac La Belle", "Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Mississippi River", "Eagle River", "Chippewa River", "Flambeau River", "Namekagon River", "Bad River"],
    "bait": ["Minnow", "Crayfish", "Leeches", "Spinnerbaits", "Crankbaits"],
    "hotspots": "Shallow weedy areas around 3-10ft deep, or near downed trees.",
    "season": "May to early June",
    "time_of_day": "Sunrise or Sunset, or during the day in early spring",
    "lifespan": "7-10 years",
    "image": "",
  },
  {
    "api_id_name": "Pumpkinseed",
    "scientific_name": "populatedFromAPI",
    "common_name": "Pumpkinseed", 
    "alt_names": ["Sunfish", "Punkie", "Kivver", "Pond perch"],
    "appearance": "Orange, green, yellow, or blue saucer shaped body with speckes and stripes and a yellow-orange belly.",
    "average_size": "4-6 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": [""],
    "popular_rivers": ["Pike River"],
    "bait": ["Worms"],
    "hotspots": "Shallow waters",
    "season": "Late May to late June",
    "time_of_day": "Best time is early morning or evening but can be caught anytime during the day.",
    "lifespan": "6-8 years",
    "image": "",
  },
  {
    "api_id_name": "Chinook(=Spring=King)salmon",
    "scientific_name": "populatedFromAPI",
    "common_name": "Chinook salmon", 
    "alt_names": ["Spring salmon", "King salmon"],
    "appearance": "Blue-green, red, or purple on its back and top of the head. Has a silver tail with black spots",
    "average_size": "3 feet",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Lake Michigan", "Lake Superior"],
    "popular_rivers": ["Pike River"],
    "bait": [""],
    "hotspots": "Along the shore of large lakes or outside bends of large rivers or streams that connect to the larger lake",
    "season": "July, August, and early September",
    "time_of_day": "early morning just before sunrise or just after sunset, best chance on a stream is 5-15 minutes for the day",
    "lifespan": "4-5 years",
    "image": "",
  },
  {
    "api_id_name": "Coho(=Silver)salmon",
    "scientific_name": "populatedFromAPI",
    "common_name": "Coho salmon", 
    "alt_names": ["Silver salmon"],
    "appearance": "Blue-green head and back with silver or bright-red sides and a light pink belly.",
    "average_size": "24 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Lake Michigan", "Lake Superior"],
    "popular_rivers": ["Pike River"],
    "bait": ["Silver spinners", "Spoons"],
    "hotspots": "Along the shore of large lakes or outside bends of large rivers or streams that connect to the larger lake",
    "season": "Mid-April through June",
    "time_of_day": "early morning or evening",
    "lifespan": "4-5 years",
    "image": "",
  },
  {
    "api_id_name": "Lake sturgeon",
    "scientific_name": "populatedFromAPI",
    "common_name": "Lake sturgeon", 
    "alt_names": ["Rock sturgeon"],
    "appearance": "Body color varies to location and age, but typically slate-gray, olive-brown, or black with a yellow-white belly. It has a torpedo-shaped body that resembles a shark, but with rows of bony plates on its sides. Has a spade shaped snout with whiskers near its mouth. ",
    "average_size": "6.5 feet",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Lake Winnebago","Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Mississippi River", "Namekagon River"],
    "bait": ["Worms", "Leeches"],
    "hotspots": "Shallow fast water, but further inland prefers the deepest mid-river areas",
    "season": "September - Note this is a protected species, catch and release only.",
    "time_of_day": "early morning and evening",
    "lifespan": "55 years for males, 80-150 years for females",
    "image": "",
  },
  {
    "api_id_name": "Brook trout",
    "scientific_name": "populatedFromAPI",
    "common_name": "Brook trout", 
    "alt_names": ["Speckled trout"],
    "appearance": "Yellow spots over an alive-green back, with its lower fins orange or red with a white and black streak on the edge of them.",
    "average_size": "9-10 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": [""],
    "popular_rivers": ["Kickapoo River", "Black Earth Creek", "Pike River", "Kinnickinnic River", "Namekagon River"],
    "bait": ["Earthworms", "Minnows", "Insects", "Leeches"],
    "hotspots": "Spring-fed streams and ponds that have cool clear water and gravel bottoms.",
    "season": "Mid-April to September",
    "time_of_day": "Early morning after dawn or late evening before dusk",
    "lifespan": "2-3 years",
    "image": "",
  },
  {
    "api_id_name": "Lake trout(=Char)", 
    "scientific_name": "populatedFromAPI",
    "common_name": "Lake trout",     
    "alt_names": ["Lake char"],    
    "appearance": "Color varies from light green to dark green, with light polka dot markings on their body with a white or yellowish belly.",
    "average_size": "20 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Big Saint Germain Lake"],
    "popular_rivers": [""],
    "bait": ["Minnows", "Nightcrawlers"],
    "hotspots": "Sunken islands or gravel bars in the lake",
    "season": "Early spring",
    "time_of_day": "Avoid light, so overcats conditions are better. Before 11am in summer. During early spring, the are in more parts of the lake throughout the day. ",
    "lifespan": "25 years",
    "image": "",
  },
  {
    "api_id_name": "Brown trout",
    "scientific_name": "Salmo trutta",
    "common_name": "Brown trout", 
    "alt_names": ["German brown trout", "German trout", "Brownie"],
    "appearance": "Tan to an olive-brown body with a tan and yellow belly. The body has brown, black, and red spots with a white border around them.",
    "average_size": "7-14 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": [""],
    "popular_rivers": ["Kickapoo River", "Black Earth Creek", "Pike River", "Kinnickinnic River", "Namekagon River"],
    "bait": ["Minnows", "Nightcrawlers"],
    "hotspots": "Let the bait float just above the bottom of the lake and let it drift or smoothly real it.",
    "season": "Spring, but are active year round",
    "time_of_day": "early morning after sunrise or late afternoon before sunset.",
    "lifespan": "5 years",
    "image": "",
  },
  {
    "api_id_name": "Walleye",
    "scientific_name": "populatedFromAPI",
    "common_name": "Walleye", 
    "alt_names": ["Yellow pike", "Walleyed pike", "Glasseye", "Perchpike"],
    "appearance": "Body color varies due to its home water. Upper body typically has a metallic bronze shade over an olive yellow color, and black stripes across its back.",
    "average_size": "30 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": ["Big Saint Germain Lake", "Lake Winnebago", "Lake Eau Claire", "Lake Wisconsin", "Callahan Lake","Lac La Belle", "Lake Monona", "Lake Chippewa"],
    "popular_rivers": ["Mississippi River", "Eagle River", "Chippewa River", "Flambeau River", "Namekagon River", "Bad River"],
    "bait": ["Minnows", "Shiners"],
    "hotspots": "Shallow water near shore",
    "season": "June and July",
    "time_of_day": "Early morning or late evening. During midday, they hide in deeper water or in the shade.",
    "lifespan": "7 years",
    "image": "",
  },
  {
    "api_id_name": "Rainbow trout",
    "scientific_name": "populatedFromAPI",
    "common_name": "Rainbow trout", 
    "alt_names": ["Steelhead", "Steelhead trout"],
    "appearance": "Many spots on its blue tinted back, with a pink stripe on its sides.",
    "average_size": "16-30 inches",
    "estimated_population": "",
    "states": ["Wisconsin"],
    "popular_lakes": [""],
    "popular_rivers": ["Kickapoo River", "Black Earth Creek", "Pike River"],
    "bait": ["small fish, insects, crayfish"],
    "hotspots": "Streams with gravel bottoms and locations with natural cover like trees or rocks.",
    "season": "Varies: March-October",
    "time_of_day": "early morning",
    "lifespan": "7 years",
    "image": "rainbow_trout_sm.jpg",
  },
];
// To display the list of these objects in the console for quick verification
// console.log(knownFishDetails);