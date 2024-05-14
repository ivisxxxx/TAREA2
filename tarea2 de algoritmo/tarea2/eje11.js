//Pedir al usuario un 
//número y mostrar si es mayor o 
//menor que 10.
const read = require('prompt-sync')();

function mayor(){
 let mi =parseInt(read("ingrese un numero"))

if(mi>10){
    console.log(mi," el numero es mayor que 10" )
}else{
    console.log(mi,"el numero es menor que 10")
}
}
mayor()