console.log('Introduce el primer operador: ');
let number1 = new Number(prompt(''));
console.log('Ahora introduce el segundo operador: ');
let number2 = new Number(prompt(''));

//Ahora, preguntamos qué operación desea realizar el usuario

console.log(`Por último, introduce un número del 1 al 4 para...
1. Sumar
2. Restar
3. Multiplicar
4. Dividir`);
let operation = prompt('');

//declaramos las posibles operaciones a realizar

function suma(){
  let result = number1 + number2;
  console.log(result);
};

function resta(){
  let result2 = number1 - number2;
  console.log(result2);
};

function multiplicar(){
  let result3 = number1 * number2;
  console.log(result3);
};

function dividir(){
  let result4 = number1 / number2;
  console.log(result4);
};

//Y ahora, llamamos a cada función dependiendo de la opción escogida por el usuario

  if (operation == 1){
    suma();
  }
  if (operation == 2) {
    resta();
  }
  if (operation == 3){
    multiplicar();
  }
  if (operation == 4) {
    dividir();
  }