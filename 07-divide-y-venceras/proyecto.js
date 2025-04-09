/* 
Problema: Búsqueda del Máximo en un Arreglo con Divide and Conquer
Dado un arreglo de números, implementa una función que utilice el enfoque Divide and Conquer para encontrar el número máximo.

Instrucciones para resolver el problema:
 - Divide el arreglo en dos mitades.
 - Resuelve el problema recursivamente para encontrar el máximo en cada mitad.
 - Combina las soluciones comparando los máximos de ambas mitades.
 - Devuelve el número máximo encontrado.

*/

function findMax(array) {
  // TODO: Agregar la condición del caso base
  if (array.length <= 1) return array;

  // TODO: Dividir el arreglo en dos mitades
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // TODO: Llamar recursivamente a la función para ambas mitades
  const leftMax = findMax(left);
  const rightMax = findMax(right);

  // TODO: Combinar las soluciones comparando los máximos
  // return /* máximo entre leftMax y rightMax */;
  return Math.max(leftMax, rightMax);
}

// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7, 56, 1, 4, 9];
console.log(findMax(numbers)); // Salida esperada: 10
