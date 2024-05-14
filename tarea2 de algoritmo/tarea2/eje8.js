// Escribir un algoritmo 
//que lea un numero
//determine si el numero  es menor -20  y si tambien es positivo es divisor para 7
// salida si es positivo y divisble para 7
const read = require('prompt-sync')();

function fifa(){
  // Solicitar al usuario que ingrese un números
let num1 = parseFloat(read("Ingrese un número:"));

// Comprobar si num1 es < -20
if (num1 <-20 ) {
    console.log("el numero es negativo es menor -20");
} else {
    if(num1>0 ){
        if(num1%2==0){
            console.log("el numero es positivo es par");
        }else{
            console.log("el numero es positivo impar ");
        }

    }else{
        console.log("el numero es cero");
    }

   


if (num1 %7 ==0) {
    console.log("el numero es multiplo de 7");
} else {
    console.log("el numero no es multiplo de 7");
}
}
}



fifa()