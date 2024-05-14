//21. Solicitar al usuario un número y mostrar si es un número de un solo dígito. 
//entrada:numero=(leer)
//proceso:
//Si Abs(numero) < 10 Entonces
       // Escribir("El número ingresado es de un solo dígito.")
  //  Sino
       // Escribir("El número ingresado no es de un solo dígito.")
   // FinSi
//salida:resultado si es un digito
const read = require('prompt-sync')();

function digito(){
    let num=0
    num = parseInt(read("Ingrese un número:"));

    if (num >= 0 && num <= 9) {
      console.log("El número es de un solo dígito.");
    } else {
      console.log("El número no es de un solo dígito.");
    }
}
digito()