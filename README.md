# [The Fish Net](https://devsketchcode.github.io/Capstone_TheFishNet/)
Created By: 
Bruce Brown,
Dave Oberlander,
Mason Johnson,
Timothy Harper

## About

This is the repository for [The Fish Net](https://devsketchcode.github.io/Capstone_TheFishNet/). It is a website to help new and experienced fishers with fishing information, data, and facts.  This will give the user more information about locations and the fish within them.  The Fish Net will also give information about the weather in the fishing area.  This website will also have fun facts about fish and fishing stories for the users entertainment.

## Installation

This website requires users to have an internet connection and a JavaScript-enabled browser. There are no other dependencies at this time.

## Reponsive Design
This site has a responsive design. You will be able to enjoy the helpful information on your desktop, tablet, or mobile phone.

## OpenWeatherMap APIs
The information for this API can be found on the API's [website](https://openweathermap.org/). There are multiple API's available through OpenWeatherMap depending on what is needed for the website, but The Fish Net currently only uses the Current Weather Data and One Call APIs. To use these OpenWeatherMap's APIs you will need to create an account, verify the email used for the account, subscribe to any of the APIs you need, and input the API key(s) in the url(s) that fetch data from the API(s). There currently is a valid API key in the code to use on both APIs for the Weather Search container on the LakesRivers.html page. 

## Fish API and Data
Scientific names for the fish search engine are found from the OpenFisheries API at [www.openfisheries.org](http://www.openfisheries.org/).  There is no login or key required to access this API's data. The rest of the local fish details are provided from research that has been entered into an internal custom list.  This information is currently available on the Fish.html page.

## Fish Search Engine
This search engine on the Fish page searches through over 11,500 fish species that are gathered from the Fish API. The API primarily provides the scientific names for all of these fish. For fish local to Wisconsin, there is additional information merged into the API's data that will be shown in the search results. The additional information includes the fishes appearance, bait, lifespan, alternate names, images, and more.
