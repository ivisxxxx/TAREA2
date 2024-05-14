//17. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el
//segundo o menor que el segundo
//entrada:nombre1=0(leer), numero2=0(leer)
//proceso:
//Si nombre1 = nombre2 Entonces
        //Escribir "Los nombres son iguales."
    //SinoSi nombre1 > nombre2 Entonces
        //Escribir "El primer nombre es mayor que el segundo."
    //Sino
        //Escribir "El primer nombre es menor que el segundo."
    //FinSi
//salida:resultado 
const read = require('prompt-sync')();

function mayoroMenor(){
let nombre1=0, nombre2=0
nombre1 = read("Ingrese el primer nombre:");

nombre2 = read("Ingrese el segundo nombre:");

if (nombre1 === nombre2) {
  console.log("Los nombres son iguales.");
} else if (nombre1 > nombre2) {
  console.log("El primer nombre es mayor que el segundo.");
} else {
  console.log("El primer nombre es menor que el segundo.");
}
}
mayoroMenor()