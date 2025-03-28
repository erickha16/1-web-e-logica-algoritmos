/*                                           Algoritmo de los dos punteros

El algoritmo de los dos punteros es una técnica que utiliza dos variables o "punteros" que recorren un arreglo desde diferentes posiciones 
(por ejemplo, uno desde el inicio y otro desde el final) para analizar datos y encontrar soluciones a ciertos problemas.
Este enfoque es eficiente porque reduce la cantidad de iteraciones necesarias, logrando una complejidad de tiempo de O(n) en muchos casos, 
en lugar de O(n²) que tendrías con bucles anidados.
*/

/*       
// --------------------------- CASOS DE USO COMUNES ---------------------------\\
Búsquedas en Listas Ordenadas:
    - Buscar elementos duplicados en listas de usuarios ordenadas por ID.
    - Verificar si dos listas de productos tienen elementos en común.

Validación de Textos
    - Usar el algoritmo para verificar si un mensaje (cadena) es un palíndromo, útil para validaciones lingüísticas o juegos.

Análisis de Fechas o Tiempos
    - Encontrar intervalos de tiempo superpuestos en dos calendarios.
    - Verificar rangos de disponibilidad en sistemas de reservación.

Gestión de Datos en Aplicaciones
    - Eliminar elementos duplicados al sincronizar datos de una base de datos con una aplicación móvil.
    - Identificar elementos que faltan entre dos listas de inventario.
*/

//EJEMPLOS:
// Supongamos que tenemos un arreglo ordenado y queremos encontrar si dos números suman un valor objetivo:
const numeros = [1, 2, 3, 4, 6];
const objetivo = 6;

function dosPunterosSuma(arr, objetivo) {
  let inicio = 0; // Primer puntero
  let fin = arr.length - 1; // Segundo puntero

  while (inicio < fin) {
    const suma = arr[inicio] + arr[fin];

    if (suma === objetivo) {
      return [arr[inicio], arr[fin]]; // Regresamos los números que cumplen la condición
    }

    if (suma < objetivo) {
      inicio++; // Si la suma es menor, movemos el puntero del inicio a la derecha
    } else {
      fin--; // Si la suma es mayor, movemos el puntero del fin a la izquierda
    }
  }

  return null; // No se encontró ninguna pareja
}

console.log(dosPunterosSuma([1, 2, 3, 4, 6], 6)); // [2, 4]

//  ------------------------------- Encontrar un Palíndromo  ------------------------------- \\
function esPalindromo(palabra) {
  let inicio = 0;
  let fin = palabra.length - 1;

  while (inicio < fin) {
    if (palabra[inicio] !== palabra[fin]) {
      return false; // Si no coinciden, no es un palíndromo
    }
    inicio++;
    fin--;
  }
  return true; // Es un palíndromo
}

console.log(esPalindromo("radar")); // true
console.log(esPalindromo("javascript")); // false

//    -------------------------------Eliminar Duplicados en un Arreglo Ordenado  ------------------------------- \\
function eliminarDuplicados(arr) {
  let puntero = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[puntero]) {
      puntero++;
      arr[puntero] = arr[i];
    }
  }
  return arr.slice(0, puntero + 1);
}

console.log(eliminarDuplicados([1, 1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

//    -------------------------------Comparar dos listas  ------------------------------- \\
function encontrarInterseccion(lista1, lista2) {
  let puntero1 = 0;
  let puntero2 = 0;
  const interseccion = [];

  while (puntero1 < lista1.length && puntero2 < lista2.length) {
    if (lista1[puntero1] === lista2[puntero2]) {
      interseccion.push(lista1[puntero1]);
      puntero1++;
      puntero2++;
    } else if (lista1[puntero1] < lista2[puntero2]) {
      puntero1++;
    } else {
      puntero2++;
    }
  }
  return interseccion;
}

console.log(encontrarInterseccion([1, 2, 4, 5], [2, 3, 4, 6])); // [2, 4]
