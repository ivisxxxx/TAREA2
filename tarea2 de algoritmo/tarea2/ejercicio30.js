//30. Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
//que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
//descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
//muestra el monto final con el descuento aplicado más el IVA del 15%.
//entrada:totalCuenta, descuentoClienteFrecuente=0(leer), montoFinal=0(calculado)
//proceso:
// Verificar si el total de la cuenta supera los $70
//Si totalCuenta > 70 Entonces
// Calcular el descuento por fidelidad
//descuento <- (totalCuenta * descuentoClienteFrecuente) / 100
//Sino
// Si el total de la cuenta es $70 o menos, no se aplica descuento
//descuento <- 0
//FinSi

// Calcular el monto final con el descuento y el IVA del 15%
//montoFinal <- (totalCuenta - descuento) * 1.15

// Mostrar el monto final
//Escribir("El monto final con el descuento aplicado más el IVA es: ", montoFinal)//
//salida:resultado montofinal
const read = require('prompt-sync')();

function totalCuenta(){
let porcedescuento,iva,total

total = parseFloat(read("Ingrese el total de su cuenta:"));

porcedescuento = parseFloat(read("Ingrese el porcentaje de descuento por fidelidad:"));

 descueTotal = total - (total * (porcedescuento / 100));
 iva =  descueTotal * 0.15;
 iva = total * 0.15;
if (total > 70) {
  console.log(`Monto final con descuento y IVA: $${( descueTotal+ iva).toFixed(2)}`);
} else {
 console.log(`Monto final sin descuento y con IVA: $${(total + iva).toFixed(2)}`);
}
}
totalCuenta()