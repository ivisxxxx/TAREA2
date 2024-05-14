//entrada dos numeros enteros
//proceso si num1 == que  num2
// salida resultado de la comparacion
const read = require('prompt-sync')();

function mii(){
 let num1 =parseFloat(read("ingrese un numero"))
 let num2 =parseFloat(read("ingrese un numero"))

if(num1==num2 ){
    console.log(num1, "y" ,num2,"son iguales" )
}
else{
    console.log(num1,"y",num2 ,"son diferente ")
}
}
mii()