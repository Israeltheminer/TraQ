const $ = require("jquery")

const ip_lat = $("#ip_lat").val()
const ip_lng = $("#ip_lng").val()

const coordinates = [ip_lat, ip_lng]

var map = L.map('map').setView(coordinates, 16);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=rAHBQ6Xf2SHd3cAfuw7q', {
   maxZoom: 20,
   attribution: '© OpenStreetMap',
   crossOrigin: true,
}).addTo(map);

var markerIcon = L.icon({
   iconUrl: 'dist/assets/images/icon-location.svg',
   iconSize:     [40, 50],
   iconAnchor:   [20, 53],
   popupAnchor:  [-3, -76]
});

L.marker(coordinates, {icon: markerIcon}).addTo(map);