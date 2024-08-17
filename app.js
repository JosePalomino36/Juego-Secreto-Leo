let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto; 
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");  
    } else{ 
        // el usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento ("p","El número el Menor")
        } else{
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';  
}

function generarNumerosecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //Si ya sortearon todos los números.
    if(listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está incluido en la lista.
        if(listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumerosecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}   
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del Número Secreto"); 
    asignarTextoElemento("p",`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumerosecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja.
    limpiarCaja()
    // Indicar mensaje de intervalo de números.
    // Generar el número aleatorio.
    // Iniciarlizar el número de intentos.
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego.
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
