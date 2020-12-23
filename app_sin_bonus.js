// tu código aquí
let explotado = 0
let globos = document.querySelectorAll('div.balloon')
let totalGlobos = globos.length

globos.forEach((globo) => {
    globo.addEventListener('mouseover', explotarGlobo)
})

function explotarGlobo(event) {
    event.target.style.backgroundColor = "#ededed"
    event.target.textContent = "POP"

    explotado++

    event.target.removeEventListener("mouseover", explotarGlobo)
    revisarJuego()
}

function revisarJuego() {
    if(explotado != totalGlobos){
        return
    }

    let galeria = document.querySelector('#balloon-gallery')
    let mensaje = document.querySelector('#yay-no-balloons')

    galeria.style.display = "none"
    mensaje.style.display = "block"
}