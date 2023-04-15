

const btnBotonEncriptador = document.querySelector('#encriptar');
const btnBotonDesncriptador = document.querySelector('#desencriptar');
const btnBotonBorrar = document.querySelector('#borrar');
const miTextarea = document.querySelector('#texto-a-escribir');
const miResultado1 = document.querySelector('#resultado1');
const miResultado2 = document.querySelector('#resultado2');
const miBotonCopiar = document.querySelector('#copiar');
const miImagen = document.querySelector('#imagen-resultado');

//acciones realizadas por los botones
btnBotonEncriptador.addEventListener('click', function() {

  const texto = miTextarea.value;

  miResultado1.textContent = encriptador(texto);
  miResultado2.textContent = "";
  miImagen.src = "";
});


btnBotonDesncriptador.addEventListener('click', function() {

  const texto = miTextarea.value;

  miResultado1.textContent = desencriptador(texto);
  miResultado2.textContent = "";
  miImagen.src = "";
});

btnBotonBorrar.addEventListener('click', function() {

  miTextarea.value = "";
  miResultado1.textContent = "Ningun mensaje fue encontrado";
  miResultado2.textContent = "ingrese el texto en el cuadro de la izquierda, luego presione una encriptar o desencriptar";
  miImagen.src = "imagenes/miImagen.png";

});

miBotonCopiar.addEventListener('click', function() {

  const texto = miResultado1.innerText;
  navigator.clipboard.writeText(texto);

});


//Funciones para encriptar y desenmcriptar
function encriptador(palabraInicial) {
    
    
    palabraInicial = palabraInicial.toLowerCase();

    let nuevaPalabra = "";
    
      for (let i = 0; i < palabraInicial.length; i++) {
      let letra = palabraInicial.charAt(i);
    
      if (letra === "a") {
        nuevaPalabra += "ai";
      } else if (letra === "e") {
        nuevaPalabra += "enter";
      } else if (letra === "i") {
        nuevaPalabra += "imes";
      } else if (letra === "o") {
        nuevaPalabra += "ober";
      } else if (letra === "u") {
        nuevaPalabra += "ufat";
      } else {
        nuevaPalabra += letra;
      }

    } 

    return nuevaPalabra;
}


function desencriptador(palabraInicial) {

    let nuevaPalabra = palabraInicial.toLowerCase();

    nuevaPalabra = nuevaPalabra
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    return nuevaPalabra;
}


