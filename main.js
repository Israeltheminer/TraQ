var map = L.map('map').setView([51.5, -0.09], 16);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=rAHBQ6Xf2SHd3cAfuw7q', {
   maxZoom: 20,
   attribution: '© OpenStreetMap',
   crossOrigin: true,
}).addTo(map);

var markerIcon = L.icon({
   iconUrl: 'images/icon-location.svg',
   iconSize:     [30, 40],
   iconAnchor:   [16, 42],
   popupAnchor:  [-3, -76]
});

L.marker([51.5, -0.09], {icon: markerIcon}).addTo(map);