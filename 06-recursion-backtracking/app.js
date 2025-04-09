//------------------------------------ Recursión ------------------------------------ \\

//Cuenta regresiva
function countdown(num) {
  //Caso base
  //Si el número es menor o igual a 0, se imprime "¡BOOM!" y se termina la función
  if (num <= 0) {
    console.log("¡BOOM!");
    return;
  } else {
    //Llamad recursiva
    //Se imprime el número actual y se llama a la función con el número decrementado en 1
    console.log(num);
    countdown(num - 1);
  }
}

countdown(5);
//Salida:   //5
//          //4
//          //3
//          //2
//          //1
//          //¡BOOM!

//Factorial

/* function factorial (x) {
    
    //caso base
    if(x === 0){
        return 1
    }

    //llamada recursiva
    return x * factorial (x-1)
}
console.log( factorial(5) ) //120 */

//Encontrar numero par
// num % 2 == 0
//6-2-2-2 = 0
//7-2-2-2 = 1

/* function encontrarPar(num){

    //Caso base
    if(num === 0){
        return "par"
    }else if(num === 1){
        return "impar"
    }else if (num < 0) {
        return console.log('error')
    }else{
        //Llamada recursiva
        return encontrarPar(num-2)
    }

}

console.log( encontrarPar(17.6) ) */

//-------------------------------------------- Backtracking ----------------------------------------- \\

//Función que encuentre todas las combinaciones de un array
// [1 , 2 , 3] -> length:3

//[]
//[1]
//[1,2]
//[1,2,3]
//[1,3]

function generarCombinaciones(arr, index = 0, nuevaCadena = []) {
  console.log(nuevaCadena);

  for (let i = index; i < arr.length; i++) {
    //2
    nuevaCadena.push(arr[i]); //1. Agregar elemento a nuevaCadena
    generarCombinaciones(arr, i + 1, nuevaCadena); //2. Llamada recursiva
    nuevaCadena.pop(); //3. Backtracking eliminando el último elemento de nuevaCadena
  }
}
generarCombinaciones([1, 2, 3]);
