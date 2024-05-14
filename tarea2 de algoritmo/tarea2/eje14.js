//entrada numero 
//proceso si num1 < o > 0  se presenta positivo o negrativo
//salida  se presenta negartivo o positivo 
const read = require('prompt-sync')();

function mii(){
 let num1 =parseFloat(read("ingrese un numero"))

if(num1>0 ){
    console.log(num1,"el numero es positivo" )
}else if(num1<0 ){
        console.log(num1,"el numero es negativo" )
}else{
    console.log(num1,"el numero es cero ")
}
}
mii()