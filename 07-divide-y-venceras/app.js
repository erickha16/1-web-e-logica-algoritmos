//------------------------ Algoritmo DIVIDE Y VENCERAS ------------------------

//Suma de numeros en un array

/* function sumaDyV(array) {
  //Caso base
  if (array.length === 1) {
    return array[0];
  }

  //Dividir el array en dos partes
  const mitad = Math.floor(array.length / 2);
  const izq = array.slice(0, mitad);
  const der = array.slice(mitad);

  //Conquistar
  const sumaIzq = sumaDyV(izq);
  const sumaDer = sumaDyV(der);

  //Combinar
  return sumaIzq + sumaDer;
}

console.log(sumaDyV([1, 4, 6, 9, 3])); //Salida: 23
 */

/* //--------------------------------- Busqueda binaria ---------------------------------\\
//Manera de encontrar un número dentro de un array
//Funciona sólo en arreglos ordenados

//Obtiene el indice del número indicado
function busquedaBinaria(array, target, inicio = 0, fin = array.length - 1) {
  //Caso base
  if (inicio > fin) {
    //No encontró el número
    return -1;
  }

  //Calcular el índice medio
  const medio = Math.floor((inicio + fin) / 2);

  //Si el elemento del medio es el que buscamos, entonces lo devolvemos
  if (array[medio] === target) return medio;

  //Si el elemento del medio es mayor al targer, buscamos en la mitad izquierda
  if (array[medio] > target) {
    return busquedaBinaria(array, target, inicio, medio - 1);
  } else {
    //Si el elemento del medio es mayor al targer, buscamos en la mitad derecha
    return busquedaBinaria(array, target, medio + 1, fin);
  }
}
array = [1, 3, 5, 7, 9];

console.log(busquedaBinaria(array, 7)); //Regresa el 3 */

//--------------------------------- Merge Sort --------------------------------\\
//Ordena una lista, lo divide por partes pequeñas y luego combina

function mergeSort(array) {
  //Caso base
  if (array.length <= 1) return array;

  //Divide el arreglo en 2 mitades
  const mitad = Math.floor(array.length / 2);
  //Pasamos la mitad de la izquierda
  const izq = mergeSort(array.slice(0, mitad));
  //Pasamos la mitad de la derecha
  const der = mergeSort(array.slice(mitad));

  //Conquista: Unir ambas mitades ordenadas:
  return merge(izq, der);
}

function merge(izq, der) {
  const resultado = [];
  let i = 0;
  let j = 0;

  while (i < izq.length && j < der.length) {
    if (izq[i] < der[j]) {
      resultado.push(izq[i]);
      i++;
    } else {
      resultado.push(der[j]);
      j++;
    }
  }

  return resultado.concat(izq.slice(i)).concat(der.slice(j));
}

const array = [4, 2, 1, 3, 9, 5];

console.log(mergeSort(array));
