// ----------------------- Ventana Fija ---------------------- \\
/* 
En una ventana fija, el tamaño de la ventana (el subconjunto de datos que estamos analizando) es constante durante toda la ejecución del algoritmo. 
Este tipo de técnica se utiliza cuando el problema requiere analizar un subconjunto de tamaño fijo dentro de una estructura más grande, como un arreglo o una cadena.

¿Cómo funciona?
1. Se inicia calculando el resultado para la primera ventana (por ejemplo, la suma de los primeros k elementos en un arreglo).
2. Luego, en cada paso, se "desliza" la ventana un elemento hacia adelante:
  - Se agrega el nuevo elemento (el que entra en la ventana).
  - Se elimina el elemento que queda fuera (el que sale de la ventana).
3. Esto permite reutilizar los cálculos previos en lugar de recomenzar desde cero, ahorrando tiempo.

Ejemplo: Encuentra la suma máxima de k números consecutivos
Queremos encontrar la suma más alta posible de 3 números consecutivos en un arreglo.
*/

const array = [-4, -1, -3, 0, 5, 12];
const k = 3; //Tamaño de la ventana

function maxSuma(arr, k) {
  //Establecemos los límites de la ventana
  let izq = 0;
  let der = izq + k - 1;

  let sum = 0; //Delcaramos la variable que contendrá la suma
  //Suma máxima
  let maxSum = sum;
  //Recorremos la ventana
  for (let i = 0; i <= der; i++) {
    //Para ahorrarnos esto,podríamos usar el método .slice() de un array para obtener ese grupo de elementos y un .reduce
    sum += arr[i];
  }

  //Recorremos el array ccompleto
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];

    //Método que compara entre dos valores y devuelve el mayor
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

//Utilizando métodos de array
function maxSum(arr, k) {
  //Establecemos la ventana
  let initialWindow = arr.slice(0, k);
  //Delcaramos la variable que contendrá la suma y se obtendrá con un reduce()
  let sum = initialWindow.reduce((acc, val) => acc + val);
  //Suma máxima
  let maxSum = sum;

  //recorremos el array completo
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];

    //Si maxSum es mayor que sum, deja ese valor, pero si suma es mayor, asigna el valor de suma
    maxSum = maxSum > sum ? maxSum : sum;
  }

  return maxSum;
}

console.log(maxSuma(array, k));
console.log(maxSum(array, k));
