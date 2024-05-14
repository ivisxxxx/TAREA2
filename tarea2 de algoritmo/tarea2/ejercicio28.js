//28. Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
//descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
//aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
//monto final con el descuento con el IVA del 15%.
//entrada:precioCompra=0(leer), cuponDescuento=0(leer), montoFinal=0(calculado)
//proceso:
//Si precioCompra > 10 Entonces
        // Calcular el descuento
        //descuento <- (precioCompra * cuponDescuento) / 100
    //Sino
        // Si el precio total de la compra es $10 o menos, no se aplica descuento
        //descuento <- 0
    //FinSi

    // Calcular el monto final con el descuento y el IVA del 15%
    //montoFinal <- (precioCompra - descuento) * 1.15

    // Mostrar el monto final
   // Escribir("El monto final con el descuento y el IVA es: ", montoFinal)//
//salida:resultado del precio final
const read = require('prompt-sync')();

function precioTotal() {
  let precio=0, descuento=0, iva=0
  precio = parseFloat(read("Ingrese el precio total de la compra:"));
  descuento = parseFloat ( read( "Ingrese el porcentaje de descuento:"));
   
  if (precio > 10){
    total = precio - (precio *(descuento / 100) )
    iva = total * 0.15;
    console.log(`Monto final con descuento y IVA: $${(total + iva)}`);
  }else{
    iva = total * 0.15;
  console.log(`Monto final sin descuento y con IVA: $${(total + iva)}`);
  }
}
precioTotal()