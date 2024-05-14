//22. Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular
//y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor
//al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%
//entrada:montoTotal=0(leer),añoCompra=0(leer)
//proceso:
//Si añoCompra < 2024 Entonces
       // montoIVA <- montoTotal * 0.12 // IVA del 12%
   // Sino
       // montoIVA <- montoTotal * 0.15 // IVA del 15%
   // FinSi

    // Calcular el monto total a pagar incluyendo el IVA
    //montoTotalConIVA <- montoTotal + montoIVA

    // Mostrar el monto total a pagar incluyendo el IVA
    //Escribir("El monto total a pagar incluyendo el IVA es: ", montoTotalConIVA)
//salida:resultado de pago
const read = require('prompt-sync')();

function totalPago(){
let total=0, año=0; iva=0
total= parseFloat(read("Ingrese el monto total de la factura:"));
año = parseFloat(read("Ingrese el año de la compra:"));
iva
if (año < 2024) {
    iva = total * 0.12;
  } else {
    iva = total * 0.15;
  }
  
  console.log(`Monto total a pagar incluyendo el IVA: $${(total + iva)}`);
}
totalPago()