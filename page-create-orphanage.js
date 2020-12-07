const map = L.map('mapid').setView([-29.937658,-51.0055926], 15);


 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);



const icon = L.icon({
    iconUrl: "map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)


    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

//add o campo de fotos

function addPhotoField() {
    // pegar container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio, se sim, nao add ao container de  imagens
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return
    }
    //limpar o campo antes de adicionar so container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

//troca do sim e nao
function toggleSelect(event) {

    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    //colocar a class .active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //pegar o botao clicador
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se sim ou nao
    input.value = button.dataset.value

    //atualizar o meu input hidden com o valor selecionado

    
}