// Creating map options
var DEBUG = false;
var mapOptions = {
center: [17.385044, 78.486671],
zoom: 10
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

function resizeWindow(){
if ( DEBUG == true)
alert("Body loaded");

var w = window.innerWidth;
var h = window.innerHeight;

if (DEBUG == true){
alert("height " + h+"px");
alert("widht " + w+"px");
}

document.getElementById("map").style.height = h+"px";
document.getElementById("map").style.width = w+"px";

}

