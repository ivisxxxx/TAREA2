//20. Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100. 
//entrada:numero=0(leer)
//proceso:
//Si numero > 0 Y numero <= 100 Entonces
       // Escribir("El número ingresado está en el rango de 0 a 100.")
   // Sino
       // Escribir("El número ingresado no está en el rango de 0 a 100.")
   // FinSi
//salida:resultado del rango
const read = require('prompt-sync')();

function mayoroMenorIgual(){
    let num=0
    num = parseInt(read("Ingrese un número:"));

    if (num > 0 && num <= 100) {
        console.log("El número es mayor que 0 y menor o igual a 100.");
      } else {
        console.log("El número no cumple con la condición.");
      }
}
mayoroMenorIgual()