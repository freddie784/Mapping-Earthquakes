console.log("working");

//Create map object with a center and zoom level
let map = L.map('mapid').setView([40.7,-94.5], 5);


//get data from cities
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [36.0726, -79.7920],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

L.polyline(line, {
    color : "blue",
    dashArray : 10,
    weight : 4,
    opacity : .5
}).addTo(map);


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});

//add our 'graymap' tile layer
streets.addTo(map);
