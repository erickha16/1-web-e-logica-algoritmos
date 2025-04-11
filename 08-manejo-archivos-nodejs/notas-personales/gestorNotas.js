/* 
Problema: Gestor de Notas Personales
Hoy en día, muchas personas necesitan guardar notas rápidas o recordatorios. 
Crear una aplicación para gestionar estas notas en archivos puede ser una solución útil para practicar manejo de archivos y entender cómo interactuar con el sistema de archivos en Node.js. 
La aplicación debe permitir al usuario:

 - Crear una nueva nota y guardarla en un archivo.
 - Leer todas las notas existentes.
 - Eliminar una nota específica según su título.


Instrucciones para resolver el problema:
 - Crea un archivo `gestorNotas.js`.
 - Usa el módulo `fs` para realizar las operaciones de manejo de archivos.
 - Las notas deben almacenarse en un archivo JSON llamado `notas.json`. Usa el formato JSON para guardar la información en el archivo.
 - Implementa la Funcionalidad del Programa descrita anteriormente:
 - Crear una nota: Agrega una nueva nota con un título y contenido.
 - Listar notas: Lee el archivo `notas.json` y muestra todas las notas en la consola.
 - Eliminar una nota: Borra una nota específica según su título.

*/
//Importar el file system
const fs = require("fs");
const filePath = "./notas.json";

const crearNota = (titulo, contenido) => {
  let notas = [];

  if (fs.existsSync(filePath)) {
    const contenidoArchivo = fs.readFileSync(filePath, "utf-8");
    notas = JSON.parse(contenidoArchivo);
  } else {
    console.log("No existe el archivo.");
    return;
  }

  //Comprobar que la nota no  exista previamente dentro del arreglo de notas
  const notaExiste = notas.filter((nota) => nota.titulo === titulo);
  if (notaExiste.length > 0) {
    console.log("La nota ya existe. Por favor, elige otro título.");
    return;
  }
  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);
  fs.writeFileSync(filePath, JSON.stringify(notas));

  console.log("La nota ha sido creada correctamente.");
};

const listarNotas = () => {
  //Comprobar si el archivo existe
  if (fs.existsSync(filePath)) {
    const contenidoArchivo = fs.readFileSync(filePath, "utf-8");
    notas = JSON.parse(contenidoArchivo);
  } else {
    console.log("No existe el archivo.");
    return;
  }

  //Leer el archivo notas.json
  fs.readFile(filePath, "utf-8", (err, contenido) => {
    if (err) {
      console.log("Error al leer el archivo", err);
    } else {
      const notas = JSON.parse(contenido);
      console.log("Notas existentes:", notas);
    }
  });
};

const eliminarNota = (titulo) => {
  let notas = []; ///Creamos el arreglo dónde se guardaran las notas

  //Comprobar si el archivo existe
  if (fs.existsSync(filePath)) {
    const contenidoArchivo = fs.readFileSync(filePath, "utf-8");
    notas = JSON.parse(contenidoArchivo);
  } else {
    console.log("No existe el archivo.");
    return;
  }

  //Comprobar si el archvio a eliminar existe
  //Comprobar que la nota no  exista previamente dentro del arreglo de notas
  const notaExiste = notas.filter((nota) => nota.titulo === titulo);
  if (notaExiste.length > 0) {
    //Eliminar la nota del arreglo de notas
    const nuevasNotas = notas.filter((nota) => nota.titulo !== titulo);
    //Sobreescribir el archivo con las nuevas notas
    fs.writeFileSync(filePath, JSON.stringify(nuevasNotas));
    console.log(`La nota con el título ${titulo} ha sido eliminada.`);
    return;
  } else {
    console.log(
      `La nota con el título ${titulo}, no existe. Por favor, elige otro título.`
    );
    return;
  }
};

/* crearNota(
  "Aprender a programar",
  "Programar every day, no hay tiempo para descansar"
); */

listarNotas();

eliminarNota("PLAY FORNITEEE");
