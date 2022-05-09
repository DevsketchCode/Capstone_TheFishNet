randomFishSelector();

function randomFishSelector() {
  // Finds and sets the current day
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const d = new Date();
  let day = weekday[d.getDay()];
  
  console.log("This is the current day: " + day);
  
  let randomNumber1 = Math.floor(Math.random()*3);
  let randomNumber2 = Math.floor(Math.random()*4);
  
  // Selects a Changing fish depending on the day and when you visit the site
  switch (day) {
    case "Sunday":
      let currentFishSunday = ["Largemouth Black Bass", "Rock Bass", "Smallmouth Bass"];
      
      document.getElementById("presentFish").innerHTML = "The Fishing Challenge Is " + currentFishSunday[randomNumber1] + "!";
      break;
      
    case "Monday":
      let currentFishMonday = ["White Bass", "Bluegill", "Black Bullhead"];
      
      document.getElementById("presentFish").innerHTML = "The Fishing Challenge Is " + currentFishMonday[randomNumber1] + "!";
      break;
      
    case "Tuesday":
      let currentFishTuesday = ["Yellow Bullhead", "Brown Bullhead", "Channel Catfish"];
      
      document.getElementById("presentFish").innerHTML = "The Fishing Challenge Is " + currentFishTuesday[randomNumber1] + "!";
      break;
      
    case "Wednesday":
      let currentFishWednesday = ["Flathead Catfish", "Black Crappie", "Muskellunge"];
      document.getElementById("presentFish").innerHTML = "The Fishing Challenge Is " + currentFishWednesday[randomNumber1] + "!";
      break;
      
    case "Thursday":
      let currentFishThursday = ["American Yellow Perch", "Northern Pike", "Pumpkinseed"];
      
      document.getElementById("presentFish").innerHTML = "The Fishing Challenge Is " + currentFishThursday[randomNumber1] + "!";
      break;
      
    case "Friday":
      let currentFishFriday = ["Chinook Salmon", "Coho Salmon", "Lake Sturgeon", "Brook Trout"];
      
      document.getElementById("presentFish").innerHTML = "The Fishing Challenge Is " + currentFishFriday[randomNumber2] + "!";
      break;
      
    case "Saturday":
      let currentFishSaturday = ["Lake Trout", "Brown Trout", "Walleye", "Rainbow Trout"];
      
      document.getElementById("presentFish").innerHTML = "The Fishing Challenge Is " + currentFishSaturday[randomNumber2] + "!";
      break;
      
    default:
      alert("No Fish Today");
  } // End of Switch
} // End of randomFishSelector function