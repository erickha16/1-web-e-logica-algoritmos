//Proyecto de clase V2:
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
      `El producto "${producto.nombre}" ya se encunetra en la lista, no pueden existir repetidos`
    );
  } else {
    listaDeCompras.push(producto);
  }
};

//3.-
const eliminarProducto = (productoAEliminar) => {
  let nuevoArray = listaDeCompras.filter(
    (producto) => producto.nombre !== productoAEliminar
  );
  listaDeCompras = nuevoArray;
};

//4.-
const mostrarLista = () => {
  console.log("------------- Lista de Productos -------------");
  listaDeCompras.forEach((producto) => {
    console.log(` + ${producto.nombre}`);
  });
  console.log("----------------------------------------------");
};

//5.- Función para no reptir elementos
function estaRepetido(elemento) {
  //   console.log(elemento);
  const repetido = listaDeCompras.find(
    (producto) => producto.nombre === elemento.nombre
  );
  if (repetido === undefined) {
    return false;
  } else {
    return true;
  }
}

//Trabajaremos con objetos
agregarProducto({
  nombre: "Manzana",
  precio_mxn: 17,
  categoria: "Alimentos",
  disponible: true,
});

agregarProducto({
  nombre: "Manzana",
  precio_mxn: 50,
  categoria: "Alimentos",
  disponible: true,
});

agregarProducto({
  nombre: "Pera",
  precio_mxn: 15,
  categoria: "Alimentos",
  disponible: true,
});
agregarProducto({
  nombre: "Sandia",
  precio_mxn: 40,
  categoria: "Alimentos",
  disponible: true,
});
agregarProducto({
  nombre: "Sandia",
  precio_mxn: 50,
  categoria: "Alimentos",
  disponible: true,
});

let nuevoProducto = {
  nombre: "ESP32",
  precio_mxn: 120,
  categoria: "Electronica",
  disponible: true,
};

agregarProducto(nuevoProducto);

mostrarLista();
