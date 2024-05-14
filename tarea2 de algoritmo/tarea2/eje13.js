//entrada se ingresa un valor
//proceso  se divide para2 y si da cociente 0
//salida  se muestra si es par o impar
const read = require('prompt-sync')();

function par (){
 let num1 =parseInt(read("ingrese un numero"))

if(num1 %2 ==0){
    console.log(num1,"el numero es par" )
}else{
    console.log(num1,"el numero es impar ")
}
}
par()