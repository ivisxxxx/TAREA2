// entrada se ingresa una edad 
// proceso
// la edad >= 18
// salida  eres mayor o menor 

const read = require('prompt-sync')();

function mayor(){
 let edad =parseInt(read("ingrese un numero"))

if(edad>=18){
    console.log(edad,"ya eres mayor de edad" )
}else{
    console.log(edad,"eres menor de edad ")
}
}
mayor()