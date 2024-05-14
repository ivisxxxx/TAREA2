// Escribir un algoritmo 
//que lea cuatro números y }
//determine si el numero 1 es divisor
//del numero3 Y si el numero 2 
//es el doble del numero4.
const read = require('prompt-sync')();

function fifa(){
  // Solicitar al usuario que ingrese los cuatro números
let num1 = parseFloat(read("Ingrese el primer número:"));
let num2 = parseFloat(read("Ingrese el segundo número:"));
let num3 = parseFloat(read("Ingrese el tercer número:"));
let num4 = parseFloat(read("Ingrese el cuarto número:"));

// Comprobar si num1 es divisible  para num3
if (num3 %  num1 === 0) {
    console.log(num1 + " es dividor " + num3);
} else {
    console.log(num1+ " no es divisor " + num3);
}
 //comprobar el doble 
if (num2 === 2 * num4) {
    console.log(num2 + " es el doble " + num4);
} else {
    console.log(num2 + " no es el doble" + num4);
}
}




fifa()
