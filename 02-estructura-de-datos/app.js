/*
const numeros = [3, 1, 4, 2];
numeros.sort((a, b) => a - b); //Orden ascendente
console.log(numeros);
*/

//Proyecto de clase:
/*
PROBLEMÁTICA
Imagina que eres parte del equipo encargado de crear una lista de compras utilizando un arreglo. Los usuarios deben poder añadir productos a la lista, eliminar productos y ver la lista completa de compras.

INSTRUCCIONES
1. Crea un arreglo vacío llamado listaDeCompras.
2. Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
3. Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
4. Implementa una función mostrarLista() que imprima todos los productos de la lista.
5. Asegúrate de que no haya productos duplicados en la lista.
6. Puedes usar arrow functions para la funcionalidad solicitada así como otras características del estandar ECMAScript.
*/

//1.-
let listaDeCompras = [];

//2.-
const agregarProducto = (producto) => {
  //5. Asegurarnos de no repetir elementos
  if (estaRepetido(producto)) {
    console.log(
      `El producto "${producto}" ya se encunetra en la lista, no pueden existir repetidos`
    );
  } else {
    listaDeCompras.push(producto);
  }
};

//3.- (Opción de clase)
const eliminarProducto = (productoAEliminar) => {
  let nuevoArray = listaDeCompras.filter(
    (producto) => producto !== productoAEliminar
  );
  listaDeCompras = nuevoArray;
};

//4.-
const mostrarLista = () => {
  listaDeCompras.forEach((producto) => {
    console.log(` + ${producto}`);
  });
};

//5.- Función para no reptir elementos
function estaRepetido(elemento) {
  if (listaDeCompras.find((element) => element == elemento) == undefined) {
    return false;
  } else {
    return true;
  }
}

agregarProducto("manzana");
agregarProducto("pera");
agregarProducto("pera");
agregarProducto("piña");
agregarProducto("fresa");
agregarProducto("naranja");
agregarProducto("naranja");

console.log(listaDeCompras);

eliminarProducto("fresa");
// console.log(listaDeCompras);
mostrarLista();

// console.log(estaRepetido("roro"));
// console.log(listaDeCompras.find((element) => element == "picafresa"));
