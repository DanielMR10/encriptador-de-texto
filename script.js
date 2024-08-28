const textEntrada = document.querySelector(".text-entrada");
const textSalida = document.querySelector(".text-salida");
const notita1 = document.querySelector(".note-msj");
const notita2 = document.querySelector(".note-in");
const copInfo = document.querySelector(".cop-info");
const LimpiaBox = document.querySelector(".btn-limpiar");
const copiarTexto = document.querySelector(".btn-copiar");
const copAviso = document.getElementById("textoCopiado");
const mensajeError = document.getElementById("mensaje-error");

function ocultar(){
    textEntrada.value = "";
    notita1.style.display = "none";
    notita2.style.display = "none";
}

function mostrar(){
    textSalida.style.background = "";
    notita1.style.display = "";
    notita2.style.display = "";
}

function validarTexto(input) {
    const regex = /^[a-zñ0-9\s]+$/i;
    if (!regex.test(input.value)) {
        mensajeError.style.display = 'block';
        mensajeError.querySelector(".msnAtencion").textContent = "Atención al texto permitido";
        setTimeout(() => {
            mensajeError.style.display = 'none';
        }, 3500);
        input.value = input.value.replace(/[^\w\s]/gi, '').toLowerCase();
    }
}

textEntrada.addEventListener('input', () => {
    validarTexto(textEntrada);
  });



function btnEncriptar(){
    const textoEncriptado = encriptar(textEntrada.value)
    textSalida.value = textoEncriptado
    textSalida.style.backgroundImage= "none";
    textSalida.style.background= "white";

    ocultar()
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textEntrada.value)
    textSalida.value = textoEncriptado
    textSalida.style.backgroundImage= "none";
    textSalida.style.background= "white";
    textEntrada.value = "";

    ocultar()
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

LimpiaBox.addEventListener("click", () => {
    textSalida.value = "";
});

copiarTexto.addEventListener("click", () => {
    if (textSalida.value.trim() === "") {
        mostrar()
    } else {
        textSalida.select();
        document.execCommand("copy");
        copAviso.style.display = "block";
        setTimeout(() => {
            copAviso.style.display = "none";
        }, 2000);
    }
});

