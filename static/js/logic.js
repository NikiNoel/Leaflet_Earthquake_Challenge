// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


// Alternative code to create map
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//    center: [
//      40.7, -94.5
//    ],
//    zoom: 4
//  });

// We create the tile layer that will be the background of our map.
// use tile layer site: https://docs.mapbox.com/api/maps/styles/ to change tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
// circleMarker from https://leafletjs.com/reference-1.6.0.html#circlemarker
let marker = L.circleMarker([34.0522, -118.2437]).addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// L.geoJson(data, {
//    pointToLayer: function(feature, latlng) {
//      return L.marker(latlng);
//     }
// });

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//    pointToLayer: function(feature,latlng){
//        return L.circleMarker(latlng)
//        .bindPopup("<h2>" + feature.properties.city + "</h2>");   
//    }
// }).addTo(map);

L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h2>" + feature.properties.city + "</h2>");
     }
}).addTo(map);

