//16.-Solicitar al usuario un carácter y mostrar si es una vocal o consonante. 
//entrada:vocal =0 (calculado)
//proceso:
//Si caracter = "a" o caracter = "e" o caracter = "i" o caracter = "o" o caracter = "u" Entonces
//Escribir "El carácter ingresado es una vocal."
//Sino
//Escribir "El carácter ingresado es una consonante."
//FinSi
//salida:sies vocal o consonante
const read = require('prompt-sync')();

function vocalAscii(){
    let vocal=""
    vocal = read("ingrese vocal: ")
    if (vocal == "a"){
      console.log("97")
    }else if (vocal == "A"){
      console.log("65")
    } else if (vocal == "e") {
      console.log("101")
    } else if (vocal == "E") {
      console.log("69")
    } else if (vocal == "i") {
      console.log("105")
    } else if (vocal == "I") {
      console.log("73")
    } else if (vocal == "o") {
      console.log("101")
    } else if (vocal == "O") {
      console.log("79")
    } else if (vocal == "u") {
      console.log("117")
    } else if (vocal == "U") {
      console.log("85")
    }else{
      console.log("caracter no es una vocal")
    }
  }
  vocalAscii()
  