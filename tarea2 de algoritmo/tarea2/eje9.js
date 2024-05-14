//Solicitar al usuario que ingrese su salario actual.
//Solicitar al usuario que ingrese el porcentaje de aumento.
//Calcular el nuevo salario después del aumento.
//Mostrar el nuevo salario al usuario
const read = require('prompt-sync')();

function fifa(){
let salarioActual = parseFloat(read("Ingrese su salario actual:"));

let porcentajeAumento = parseFloat(read("Ingrese el porcentaje de aumento (%):"));

let aumento = salarioActual * (porcentajeAumento / 100);
let nuevoSalario = salarioActual + aumento;

console.log("Su nuevo salario después del aumento es: " + nuevoSalario);


}

fifa()