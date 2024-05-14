//18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par.
//entrada: numero=0(leer)
//proceso:
//Si numero % 3 = 0 y numero % 2 = 0 Entonces
        //Escribir "El número ingresado es múltiplo de 3 y par."
   // Sino
       // Escribir "El número ingresado no es múltiplo de 3 y par."
   // FinSi
//salida:resultado es multiplo de 3 o no
const read = require('prompt-sync')();

function multiplo3(){
    let num=0
    num = parseInt(read("Ingrese un número:"));
    
    if (num % 3 === 0 && num % 2 === 0) {
     console.log("El número es múltiplo de 3 y par.");
    } else {
     console.log("El número no es múltiplo de 3 y par.");
    }
}
multiplo3()