//24. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
//considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
//40 y menor a 60 se queda para recuperación caso contario pierde la materia.
//entrada:notas=0(leer)
//proceso:
// Verificar si la nota es mayor o igual a 60
//Si notaExamen >= 60 Entonces
//Escribir("¡Felicidades! Ha aprobado el examen.")
// Verificar si la nota está entre 40 y 60
//SinoSi notaExamen >= 40 Entonces
//Escribir("Tiene una nota entre 40 y 59 puntos. Está en recuperación.")
// Si la nota es menor a 40
//Sino
//Escribir("Lo siento, ha reprobado el examen.")
//FinSi
//salida:resultado de las notas
const read = require('prompt-sync')();

function examen(){
let nota=0
nota = parseInt(read("Ingrese su nota en el examen:"));

if (nota >= 60) {
 console.log("Ha aprobado el examen.");
} else if (nota >= 40 && nota < 60) {
  console.log("Ha quedado para recuperación.");
} else {
  console.log("Ha reprobado el examen.");
}
}
examen()