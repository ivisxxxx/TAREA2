//25. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.
//Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre
//el precio de venta. mostrar el precio final incluyendo el 15% del IVA.
//entrada:precio=0(leer), añoFabricacion=0(leer), descuento=0(leer), iva=0(leer), preciofinal=0(calculado)
//proceso:
// Verificar si el año de fabricación está entre el 2020 y 2023
//Si añoFabricacion >= 2020 Y añoFabricacion <= 2023 Entonces
// Calcular el descuento del 5%
//descuento <- precioVenta * 0.05
//Sino
// Si no se aplica descuento, el descuento es 0
//descuento <- 0
//FinSi

// Calcular el monto del IVA del 15%
//montoIVA <- (precioVenta - descuento) * 0.15

// Calcular el precio final incluyendo el descuento y el IVA
//precioFinal <- precioVenta - descuento + montoIVA

// Mostrar el precio final del vehículo
//Escribir("El precio final del vehículo incluyendo el IVA es: ", precioFinal)//
//salida:resultado precioFinal
const read = require('prompt-sync')();

function precioVenta(){
  let precio=0, año=0

precio= parseFloat(read("Ingrese el precio de venta del vehículo:"));


año = parseInt(read("Ingrese el año de fabricación del vehículo:"));

if (año >= 2020 && año <= 2023) {
  precioFinal = precio - (precio* 0.05);
  iva = precioFinal * 0.15;
  console.log(`Precio final con descuento y IVA: $${(precioFinal + iva)}`);
} else {
  iva = price * 0.15;
  console.log(`Precio final sin descuento y con IVA: $${(precio + iva)}`);
}
}
precioVenta()