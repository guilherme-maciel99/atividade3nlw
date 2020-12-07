const map = L.map('mapid').setView([-29.937658,-51.0055926], 15);



 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);



const icon = L.icon({
    iconUrl: "map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    winWidth:240,
    winHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1"class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')


 L
 .marker([-29.937658,-51.0055926], { icon })
 .addTo(map)
 .bindPopup(popup)