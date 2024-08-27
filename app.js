let numerosecreto = 0;
let intentos = 0;
let listadenumerossorteados = [];
let numeromaximo = 10;

function asignarTextoelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento() {
   let numerodeusuario = parseInt(document.getElementById('valorusuario').value);
  
   if (numerodeusuario === numerosecreto) {
    asignarTextoelemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    if (numerodeusuario > numerosecreto ) {
        asignarTextoelemento('p','el numero secreto es menor');
    } else {
        asignarTextoelemento('p','el numero secreto es mayor');
    }
    intentos++;
limpiarcaja();
   }
   return;
} 

function limpiarcaja() {
    document.querySelector('#valorusuario').value = '';
   
}
function generarnumerosecreto() {
    let numerogenerado =  Math.floor(Math.random()*numeromaximo)+1;
    //si el numero generado esta incluido en la lista
    if (listadenumerossorteados.length == numeromaximo){
        asignarTextoelemento('p', 'ya se sortearon todos los numeros posibles');
    } else{

    if (listadenumerossorteados.includes(numerogenerado)){
        return generarnumerosecreto();
    }else{
        listadenumerossorteados.push(numerogenerado);
        return numerogenerado;
    }
  } 
}
 function condicionesiniciales() {
    asignarTextoelemento('h1', 'juego del numero secreto super wow');
    asignarTextoelemento('p', `indica un numero del 1 al ${numeromaximo}`);
    numerosecreto = generarnumerosecreto();
    intentos = 1;
 }   

function reiniciarjuego() {
    console.log("Botón de reiniciar presionado");
    //limpiar la caja
    limpiarcaja(); 
    //indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio 
    //inicializar el numero de intentos
    condicionesiniciales();
    //deshabilitar wl boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesiniciales();
