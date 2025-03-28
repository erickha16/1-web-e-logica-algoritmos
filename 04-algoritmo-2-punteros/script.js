/* 
Problema: Encuentra los Invitados que Pueden Sentarse Juntos
Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. 
Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. 
Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

Instrucciones para resolver el problema:
 - Usa un puntero al inicio del arreglo y otro al siguiente elemento.
 - Compara las iniciales de los nombres en las posiciones de ambos punteros.
 - Si coinciden, detén la búsqueda y devuelve los nombres.
 - Si no coinciden, avanza ambos punteros y repite.
 - Detén la búsqueda si recorres toda la lista sin encontrar un par.
*/

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
const usuarios = [
  { id: 1, nombre: "Carlos" },
  { id: 2, nombre: "Leslie" },
  { id: 2, nombre: "Susana" },
  { id: 3, nombre: "Fatima" },
  { id: 4, nombre: "Marlon" },
  { id: 4, nombre: "Carmen" },
  { id: 5, nombre: "Jin" },
];

function ecnontrarParejaById(arr) {
  let izq = 0;
  let der = 1;
  const parejas = [];

  while (der < arr.length) {
    // TODO: Compara las iniciales de los nombres en los punteros
    // Si coinciden, devuelve el par
    if (arr[izq].id === arr[der].id) {
      parejas.push(arr[izq].nombre);
      parejas.push(arr[der].nombre);
    }
    // TODO: Avanza los punteros si no coinciden
    izq++;
    der++;
  }
  //Si hay parejas encontradas, devuelve esas parejas, si no se encunetran, retorna un false
  return parejas.length > 0 ? parejas : false;
}

function encontrarPareja(arr) {
  let inicio = 0;
  let siguiente = 1;
  const parejas = [];

  while (siguiente < arr.length) {
    // TODO: Compara las iniciales de los nombres en los punteros
    //obtenemos la iniciales
    const nombre1 = arr[inicio];
    const nombre2 = arr[siguiente];
    //Si coinciden, mete la pareja al array
    if (nombre1[0] === nombre2[0]) {
      parejas.push(arr[inicio]);
      parejas.push(arr[siguiente]);
    }
    //Avanza los punteros si no coinciden
    inicio++;
    siguiente++;
  }

  //Si hay parejas encontradas, devuelve esas parejas, si no se encunetran, retorna un false
  return parejas.length > 0 ? parejas : false;
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia", "Daniel", "Diana"]

// console.log(ecnontrarParejaById(usuarios));
