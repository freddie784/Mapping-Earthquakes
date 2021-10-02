console.log("working");

//Create map object with a center and zoom level
let map = L.map('mapid').setView([30, 30], 2);

let airportData = "https://raw.githubusercontent.com/freddie784/Mapping_Earthquakes/main/majorAirports.json";



let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});

//add our 'graymap' tile layer
streets.addTo(map);

