console.log("working");

let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});

let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});

let baseMaps = {
    Day : day,
    Night : night
};
//Create map object with a center and zoom level
let map = L.map('mapid', {
    center : [44.0,-80.0],
    zoom : 2,
    layers : [day]
});

L.control.layers(baseMaps).addTo(map);

let torontoData = "https://raw.githubusercontent.com/freddie784/Mapping-Earthquakes/main/torontoRoutes.json";

let myStyle = {
    color : "lightYellow",
    weight : 2
}

d3.json(torontoData).then(data => {
    console.log(data);
    // Creating a GeoJson Layer with data
    L.geoJson(data, {
        style : myStyle,
        onEachFeature: function(feature, layer) {
          layer.bindPopup("<h2> Airline: " + feature.properties.airline + "<hr></hr>" + "<h4> Destination: " + feature.properties.dst + "</h4>");  
        }
    }).addTo(map);

});



