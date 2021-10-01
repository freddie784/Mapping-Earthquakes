console.log("working");

//Create map object with a center and zoom level
let map = L.map('mapid').setView([40.7,-94.5], 4);


//get data from cities

cityData = cities;


//Loop through cities
cityData.forEach(city => {
    console.log(city)
    L.circleMarker(city.location,{
        radius : city.population/100000,
        color : "orange",
        weight: 4

    })
    .bindPopup("<h2>" + city.city + " , " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});

//add our 'graymap' tile layer
streets.addTo(map);
