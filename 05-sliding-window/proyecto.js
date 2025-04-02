/* 
Problema: Encontrar la Palabra Más Larga
Estás desarrollando una herramienta para ayudar a escritores a identificar la palabra más larga en un texto. 
El usuario ingresa un párrafo, y tu tarea es encontrar esa palabra utilizando la técnica Sliding Window. 
Este problema simplifica la lógica para que los alumnos practiquen cómo manejar cadenas de texto con ventanas deslizantes.


Instrucciones para resolver el problema:
 - Divide el texto en palabras individuales utilizando el método .split(' ') en la cadena.
 - Desliza una ventana que recorra cada palabra del arreglo y compara su longitud con la palabra más larga encontrada hasta ese momento.
 - Devuelve la palabra más larga al final del proceso.
 

 Pistas:
Usa el método .split(' ') para convertir el texto en un arreglo de palabras separadas por espacios.
Compara las longitudes de las palabras utilizando la propiedad length.
Guarda la palabra más larga encontrada hasta el momento en la variable longestWord.
*/

function findLongestWord(text) {
  // TODO: Dividir el texto en palabras y almacenarlas en una variable
  const palabras = text.split(" ");
  let longestWord = ""; // Inicializar la palabra más larga

  // TODO: Recorrer el arreglo de palabras con un ciclo
  for (let i = 0; i < palabras.length; i++) {
    // TODO: Comparar la longitud de la palabra actual con la más larga
    if (longestWord.length < palabras[i].length) {
      // Actualizar la palabra más larga
      longestWord = palabras[i];
    }
  }

  // console.log(palabras);
  return longestWord;
}

// Ejemplo de uso
const text =
  "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"
