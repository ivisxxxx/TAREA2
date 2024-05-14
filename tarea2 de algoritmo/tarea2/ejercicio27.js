//27. Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
//aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
//aplicado.
//entrada:sueldoActual=0(leer), porcentajeIncremento=0(leer), sueldoEsperado=0(calculado)
//proceso:
//Si sueldoActual < 500 Entonces
// Calcular el sueldo esperado con el incremento del 5%
//sueldoEsperado <- sueldoActual + (sueldoActual * 0.05)
//Sino
// Si el sueldo actual es $500 o más, no se aplica incremento
//sueldoEsperado <- sueldoActual
//FinSi

// Mostrar el sueldo esperado
//Escribir("El sueldo esperado con el incremento es: ", sueldoEsperado)
//salida:resultado del sueldo
const read = require('prompt-sync')();
function suelddoActual(){
    let sueldo=0, increPorcen=0, nueSueldo=0
    sueldo = parseFloat(read("Ingrese su sueldo:"));
    increPorcen = parseFloat(read("Ingrese el porcentaje de incremento:"));
    nueSueldo
    nueSueldo = sueldo + (sueldo * (increPorcen/100));
    if(sueldo < 500){
        console.log(`Su sueldo esperado con el incremento aplicado es: $${nueSueldo.toFixed(2)}`);
    }else{
       console.log(`Su sueldo esperado sin incremento es: $${sueldo.toFixed(2)}`);
    }
}
suelddoActual()