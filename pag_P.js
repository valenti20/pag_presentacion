const cuadro = document.querySelector(".cuadro");
const boton = document.querySelector("#botonCuadro");

boton.addEventListener("click", function() {

    cuadro.classList.toggle("cerrado");
})