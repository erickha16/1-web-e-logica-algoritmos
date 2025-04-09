/*   Proyecto del Recursion y backtracking

Problema: Buscar un objeto en una lista de regalos
Es Navidad y estás buscando un regalo específico en una lista de regalos que te dio tu familia. 
La lista puede ser bastante larga, y para encontrar el regalo que buscas, necesitas usar recursión. 
Este proyecto se enfoca únicamente en usar recursión para buscar un elemento en un arreglo simple.

Instrucciones para resolver el problema:
 - Escribe una función recursiva que busque un regalo específico en un arreglo.
 - Si el regalo se encuentra, devuelve un mensaje indicando su posición.
 - Si no se encuentra, devuelve un mensaje diciendo que no está en la lista.
*/

/* function findGift(gifts, target, index = 0) {
  console.log(index);
  //Caso base
  if (gifts.length === index)
    return "El regalo que buscas no se encunetra en la lista";

  if (gifts[index] === target) {
    return "Regalo encontrado!";
  }

  findGift(gifts, target, index + 1);
}
 */

function findGift(gifts, target, index = 0) {
  //Caso base
  if (gifts.length === index)
    return "El regalo que buscas no se encunetra en la lista";

  if (gifts[index] === target) {
    return `Regalo encontrado en la posición ${index}`;
  }

  return findGift(gifts, target, index + 1);
}

const gifts = [
  "car",
  "xbox",
  "nintendo",
  "socks",
  "jacket",
  "mk11",
  "laptop",
  "3d printer",
  "starwars toy",
  "lego",
];

let target = "mk11";
console.log(findGift(gifts, target));

target = "playstation";
console.log(findGift(gifts, target));
