//Modulo fs (file system) para manejar archivos
/* 
 - Leer archivos
 - Escribir archivos
 - Modificar archivos
 - Copiar archivos
 - Renombrar archivos
 - Eliminar archivos
*/

//Ej. fs.rename() -> fs.renameSync()
//Importando el módulo fs
const fs = require("fs");

//Parámetros para leer un archivo:
// 1. Ruta del archivo a leer
// 2. set de caracteres (utf-8, ascii, etc.)
// Función que se ejecuta después de resolver el llamado
/* fs.readFile("index.html", "utf-8", (err, contenido) => {
  if (err) {
    console.log("Error al leer el archivo", err);
  } else {
    console.log("Contenido del archivo:", contenido);
  }
}); */

//Para renombrar un archivo
/* fs.rename("example.txt", "index2.html", (err) => {
  if (err) {
    console.log("Error al renombrar el archivo", err);
  } else {
    console.log("Archivo renombrado correctamente");
  }
}); */

//Agregar información al final de un archivo
//1. Ubicación
//2. Contenido a añadir
//3. Funcion que captura el error
/* fs.appendFile("index2.html", "<h1>Contenido añadido sisisisisi</h1>", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Contenido añadido correctamente");
  }
}); */

//Reemplazar todo el contenido de un archivo
/* fs.writeFile("index2.html", "<h1>Contenido reemplazado</h1>", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Contenido reemplazado correctamente");
  }
});
 */

//Eliminar un archivo
/* fs.unlink("index2.html", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Archivo eliminado correctamente");
  }
});
 */

//Métodos de manera asíncrona
//Leer un archivo de manera asíncrona
const archivo = fs.readFileSync("index2.html", "utf-8");
console.log(archivo);

//renombrar un archivo de manera asíncrona
fs.renameSync("index2.html", "index.html");

//Agregar información al final de un archivo de manera asíncrona
fs.appendFileSync("vista.html", "<h1>NODEJS</h1>");

// Reemplazar todo el contenido del archivo
fs.writeFileSync("vista.html", "El velóz murciélago hindú");

//Eliminar un archivo
fs.unlinkSync("vista.html");
