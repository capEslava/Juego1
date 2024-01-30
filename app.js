let numeroSecreto = 0;
let intentos = 1
let listaNumerosSorteados = [];
let numeroMaximo = 3
let intentosMaximos = 2
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${intentos==1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p',`El numero secreto es menor a ${numeroDeUsuario} `);
        } else {
            asignarTextoElemento('p',`El numero secreto es mayor a ${numeroDeUsuario}`);
        }
        intentos++;
        limpiarCaja();
        if (intentos>intentosMaximos) {
            asignarTextoElemento('p','¡Perdiste!')
            document.getElementById('reiniciar').removeAttribute('disabled')
        }
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p','Ya no hay numeros posibles')
    } else{
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }}
}
function condicionesIniciales(){
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', 'Indica un numero del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',(true))

}
condicionesIniciales();



