//23. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
//Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
//precio sea mayor $100.
//entrada:precioproducto=0(leer), descuento=0(leer),precio final =0(calculado)
//proceso:
//Si precioProducto > 100 Entonces
// Calcular el descuento
//Descuento <- (precioProducto * porcentajeDescuento) / 100

// Calcular el precio final
//precioFinal <- precioProducto - descuento

// Mostrar el precio final
//Escribir("El precio final después de aplicar el descuento es: ", precioFinal)
//Sino
// Mostrar un mensaje indicando que no se aplica descuento
//Escribir("El precio del producto es menor o igual a $100, por lo tanto no se aplica descuento.")
//FinSi
//salida:resultado de precio final
const read = require('prompt-sync')();

function precioProducto(){
   let precio=0, descuenPorcentaje=0, finalPrecio=0
   precio = parseFloat(read("Ingrese el precio del producto:"));
   descuenPorcentaje=parseFloat(read("Ingrese el porcentaje de descuento:"));
   
    if (precio > 100) {
        finalPrecio = precio - (precio * (descuenPorcentaje / 100));
        console.log(`Precio final del producto: $${finalPrecio}`);
      } else {
        console.log("El precio del producto no es mayor a $100.");
      }
}
precioProducto()