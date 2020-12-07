const options = {
    dragging: false,
    touchZoom: false,
    doubleclickzoom: false,
    scrollwheelZoom: false,
    zoomcontrol: false,
}



const map = L.map('mapid', options).setView([-29.937658,-51.0055926], 15);



 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);



const icon = L.icon({
    iconUrl: "map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})


 L
 .marker([-29.937658,-51.0055926], { icon })
 .addTo(map)


 function selectImage(event) {
     const button = event.currentTarget

     console.log(button.children)

     //remover todas as classes .active
     const buttons = document.querySelectorAll(".images button")
     buttons.forEach(removeActiveClass)

     function removeActiveClass(button) {
         button.classList.remove('active')
     }

     //selecionar a imagem clicada
     const image = button.children[0]
     const imageContainer = document.querySelector(".orphanage-details > img")


     //atualizar o container de imagem

     imageContainer.src = image.src

     //adicionar a classe .active para este botao

     button.classList.add('active')
 }