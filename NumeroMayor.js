//    El algoritmos/ diagrama de flujo es el siguiente:

//    Recibe un array de números (de cualquier cantidad).
//    Crea una variable “máxima” que inicie en 0.
//    Recorre el array valor por valor.
//    Pregunta si el valor de la variable máxima es mayor que el valor del número en la posición actual del array.
//    Si la condición anterior es verdadera, asigna el valor de la posición actual del array a la variable máxima.
//    Imprime el número más grande del array.

// Le pedimos al usuario que nos proporcione 6 numeros cuales quiera
console.log('Introduzca 6 numeros y le devolveremos el mas grande: ');
let number1 = new Number(prompt(''));
let number2 = new Number(prompt(''));
let number3 = new Number(prompt(''));
let number4 = new Number(prompt(''));
let number5 = new Number(prompt(''));
let number6 = new Number(prompt(''));

//declaramos el array con los numeros que nos propociono el usuario
let array = [number1,number2,number3,number4,number5,number6];

//decimos que el maximo sera 0
let max = 0;

//creamos el ciclo donde validaremos cual es el numero mas grande a traves de la validacion del array
for (let i = 0; i < array.length; i++) 
{
  if(array[i] > max) {
    max = array[i];
  }
}

console.log(`El numero mas grande es ${max}`);