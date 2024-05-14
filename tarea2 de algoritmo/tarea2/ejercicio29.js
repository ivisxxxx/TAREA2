//29. Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
//del bono de antigüedad del empleado aplicando el 3% del salario por el número de
//años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
//antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad
//entrada:salarioActual=0(leer), añosAntiguedad=0(leer), bonoAntiguedad=0(calculado)
//proceso:
// Verificar si la cantidad de años de antigüedad es mayor a 3
//Si añosAntiguedad > 3 Entonces
// Calcular el bono de antigüedad (3% del salario por cada año de antigüedad)
//bonoAntiguedad <- salarioActual * 0.03 * añosAntiguedad
//Sino
// Si la cantidad de años de antigüedad es 3 o menos, el bono de antigüedad es cero
//bonoAntiguedad <- 0
//FinSi

// Mostrar el salario y el bono de antigüedad
//Escribir("El salario actual es: ", salarioActual)
//Escribir("El bono de antigüedad es: ", bonoAntiguedad)//
//salida:resultado del bono
const read = require('prompt-sync')();

function salarioActual(){
  let años=0, salario=0  
  
   salario = parseFloat(read("Ingrese su salario actual:"));
   años= parseInt(read("Ingrese la cantidad de años de antigüedad:"));
    
    
    if (años > 3) {
      bono = salario * (años * 0.03);
    } else {
      bono = 0;
    }
    
    console.log(`Su salario es: $${salario}`);
    console.log(`Su bono de antigüedad es: $${bono}`);
}
salarioActual()