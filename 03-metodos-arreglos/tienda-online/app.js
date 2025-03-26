/* 
Problema: Filtro y Orden de Productos de una Tienda Online
Eres el encargado de gestionar los datos de una tienda online. Tienes un listado de productos con información como nombre, precio y categoría. 
Tu tarea será filtrar los productos por precio, ordenarlos alfabéticamente y generar una lista con los nombres.

Instrucciones para resolver el problema:
 - Crea un arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría. Puedes ver el código de ejemplo para este paso en el siguiente enlace: 
- https://gist.github.com/heladio-devf-mx/a2127c7992384fd0fd66893db47ea506
- Usa filter() para obtener los productos que cuesten menos de $100.
- Usa sort() para ordenar esos productos alfabéticamente por su nombre.
- Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
- Muestra los resultados de la aplicación de cada métiodo en consola.
- (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.
 */

//1- arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
const productos = [
  { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
  { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
  { nombre: "Libro", precio: 12, categoria: "Educación" },
  { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
  { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//2- Usa filter() para obtener los productos que cuesten menos de $100.
let productosMenoresA100 = productos.filter(
  (producto) => producto.precio < 100
);

//3- Usa sort() para ordenar esos productos alfabéticamente por su nombre.
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

//4- Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombreProductos = productos.map((productos) => productos.nombre);

//5- Muestra los resultados de la aplicación de cada métiodo en consola.
for (let i = 0; i < productosMenoresA100.length; i++) {
  console.log(
    `${i + 1}.- Producto: ${productosMenoresA100[i].nombre} | Precio: ${
      productosMenoresA100[i].precio
    } | Categoría: ${productosMenoresA100[i].categoria}`
  );
}

console.log(nombreProductos);

//6- (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.
//Si llego a vender una unidad de cada producto, cuanto dinero tendría?
const precioProductos = productos.map((productos) => productos.precio);
const total = precioProductos.reduce((acum, num) => acum + num, 0);

console.log("Si vendo una unidad de cada producto, dentría: $" + total);
//Hay productos de electrónica?
console.log(
  "Necesito una computadora o un nuevo celular, hay algún prodcuto de este tipo? R=" +
    productos.some((producto) => producto.categoria == "Electrónica")
);

//Todos los productos cuestan más de $100?
console.log(
  "¿Todos los productos cuestan más de $100? R=" +
    productos.every((producto) => producto.precio > 100)
);

//Venderán Zapatos?
console.log(
  "¿Venden zapatos en su tienda? R=" + nombreProductos.includes("Zapatos")
);
