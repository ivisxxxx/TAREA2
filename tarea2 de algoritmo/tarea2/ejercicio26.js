//26. Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
//en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
//de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
//aplicar el impuesto.
//entrada:precio=0(leer), impuestoPorcentaje=(leer), finalPrecio=0(calculada)
//proceso:
//Si precioArticulo > 200 Entonces
        // Calcular el impuesto de ventas
        //impuesto <- (precioArticulo * porcentajeImpuesto) / 100
    //Sino
        // Si el precio no supera los $200, no se aplica impuesto
        //impuesto <- 0
    //FinSi

    // Calcular el precio final incluyendo el impuesto
   // precioFinal <- precioArticulo + impuesto

    // Mostrar el precio final del artículo
   // Escribir("El precio final del artículo después de aplicar el impuesto es: ", precioFinal)//
//salida:resultado del precio final
const read = require('prompt-sync')();

function precioArticulo(){
    
   precio = parseFloat(read("Ingrese el precio del artículo:"));
    
  imPorcentaje = parseFloat(read("Ingrese el porcentaje de impuesto de ventas:"));
    
    if (precio > 200) {
      finalPrecio = precio+ (precio * (imPorcentaje / 100));
      console.log(`Precio final con impuesto: $${finalPrecio}`);
    } else {
      console.log(`Precio final sin impuesto: $${precio}`);
    }
}
precioArticulo()