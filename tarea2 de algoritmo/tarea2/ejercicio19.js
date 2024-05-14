//19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar. 
//entrada: numero=0(leer)
//proceso:
//Si numero MOD 2 = 0 Entonces
//Escribir("El número ingresado es divisible por 2.")
//Sino
    //Escribir("El número ingresado es impar.")
//FinSi
//salida:resultado si es divisible o es par
const read = require('prompt-sync')();

function divisible2(){
let num=0
num = parseInt(read("ingrese un número:"));
if(num % 2 == 0){
    console.log("El número es divisible por 2.");
}else {
    console.log("El número es impar.");
  }
}
divisible2()