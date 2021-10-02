console.log("working");

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});

let baseMaps = {
    Street : streets,
    Dark : dark
};
//Create map object with a center and zoom level
let map = L.map('mapid', {
    center : [40.7,-94.5],
    zoom : 4,
    layers : [streets]
});

L.control.layers(baseMaps).addTo(map);


let airportData = "https://raw.githubusercontent.com/freddie784/Mapping-Earthquakes/main/majorAirports.json";

d3.json(airportData).then(data => {
    console.log(data);
    // Creating a GeoJson Layer with data
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2> Airport code: " + feature.properties.faa +  "</h2>" + "<hr></hr>" + "<h4> Airport name: " + feature.properties.name + "</h4>");
        }
    }).addTo(map);

})



