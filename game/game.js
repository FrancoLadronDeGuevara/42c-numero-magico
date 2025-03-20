let numeroMagico = Math.round(Math.random()*100)

let intentos = 5

let btnAdivinar = document.getElementById("btnAdivinar")

btnAdivinar.addEventListener("click", mostrarAlerta)

function mostrarAlerta () {
    Swal.fire("PRESIONASTE EL BOTON")
}