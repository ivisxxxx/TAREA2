//Definir una clase TarjetaCredito que tenga dos propiedades: tipo y limite.
//Crear un método calcularAumento dentro de la clase TarjetaCredito que calcule el aumento basado en el tipo de tarjeta.
//Calcular el nuevo límite de crédito sumando el aumento al límite actual y luego agregando un 10% adicional.
//Mostrar el nuevo límite de crédito.
const read = require('prompt-sync')();
function incre(){

let tipoTarjeta = parseInt(read("Ingrese el tipo de tarjeta (1, 2, 3, u otro número):"));
let limiteActual = parseFloat(read("Ingrese el límite de crédito actual:"));


let aumento;

if (tipoTarjeta === 1) {
    aumento = 100;
} else if (tipoTarjeta === 2) {
    aumento = 200;
} else if (tipoTarjeta === 3) {
    aumento = 300;
} else {
    aumento = 500;
}

let nuevoLimite = limiteActual + aumento;
let aumentoAdicional = nuevoLimite * 0.1; // Calcular el 10% adicional
nuevoLimite += aumentoAdicional;

console.log("El nuevo límite de crédito es: $" + nuevoLimite.toFixed(2));
}
incre()