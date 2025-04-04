let numeroMagico = Math.round(Math.random() * 100);

let intentos = 5;

let btnAdivinar = document.getElementById("btnAdivinar");
let inputNumeroUsuario = document.getElementById("inputNumeroUsuario");

btnAdivinar.addEventListener("click", () => {
  let valorIngresado = parseInt(inputNumeroUsuario.value);

  if (valorIngresado === numeroMagico) {
    reiniciarJuego("Ganaste!", "success");
  } else {
    intentos--;
    if (intentos === 0) {
      reiniciarJuego("Perdiste!", "error");
    } else {
      Swal.fire({
        icon: "warning",
        title: `Fallaste! Te quedan ${intentos} ${
          intentos === 1 ? "intento" : "intentos..."
        }`,
        text: `El número magico es ${
          valorIngresado > numeroMagico ? "menor" : "mayor"
        }`,
      });
    }
  }
});

function reiniciarJuego(titulo, icono) {
  Swal.fire({
    title: titulo,
    text: `El número magico era ${numeroMagico}`,
    icon: icono,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Volver a jugar?",
  }).then((result) => {
    if (result.isConfirmed) {
      location.href = "../index.html";
    }
  });
}
