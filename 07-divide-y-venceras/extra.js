/*  ----------------------- Baías de Camiones -----------------------\\
Implementar un algortimmo que de solución al siguiente problema:

Dado un arreglo de números (truckCargoSize) de longitud n, dónde cada elemento del array representa un camión y la cantidad de tiempo en minutos 
que tarda en descargar su cargamento en un muelle de descarga; y un segundo entero (maxTurnaroundTime) que representa el tiempo máximo que puede tardar en descargar
su cargamento todos los camiones. 

Encuentra la menor cantidad de muelles necesarios para que los camiones descarguen su cargamento en el tiempo máximo permitido.

Notas:
 - Tan pronto un muelle se vuelva disponibledespués de que un camión haya descargado su cargamento, se puede usar inmediatamente para descargar el siguiente camión. 
 - Esta garantizado que descargar todos los camiones es posible con un numero especificado de muelles.
 - Sólo los tiempos de inicio de descarga necesitan ser considerados en orden, no los tiempos finales.


 Ejemplo:

n = 5 // Número de camiones
truckCargoSize = [3, 4, 3, 2, 3] // Tiempo que tarda cada camión en descargar su cargamento
maxTurnaroundTime = 8 // Tiempo máximo permitido para descargar todos los camiones

Intentando con 2 muelles:
TIEMPO(MIN) |              ACCIÓN
0           | Los primero 2 camiones en los muelles 1 y 2
3           | El camión 1 termina de descargar su cargamento y  el tercero comienza a descargar en el muelle 1
4           | El camión 2 termina de descargar su cargamento y el cuarto comienza a descargar en el muelle 2
6           | Ambos muelles terminan de descargar y en el muelle 1 comienza a descargar el camión 5
9           | El camión 5 termina de descargar su cargamento

Como se puede observar anteriormente, con 2 muelles, todos los camiones descargaron en 9 minutos, lo cual excede al tiempo máximo permitido de 8 minutos.
Por lo tanto, no es posible descargar todos los camiones en 8 minutos con 2 muelles.


Intentando con 3 muelles:
TIEMPO(MIN) |              ACCIÓN
0           | Los primeros 3 camiones en los muelles 1, 2 y 3
3           | Los muelles 1 y 3 terminan de descagar el cargamento de los camiones 1 y 3, por lo que los camiones 4 y 5 comienzan a descargar en los muelles 1 y 3 respectivamente
4           | El muelle 2 termina de descargar el camión 2 y queda libre elcmuelle 2 ya que no hay más camiones esperando para descargar su cargamento
5           | El muelle 1 termina de descargar el camión 4
6           | El muelle 3 termina de descargar el camión 5 

Con 3 muelles, todos los camiones descargaron en 6 minutos, lo cual es menor al tiempo máximo permitido de 8 minutos. 
Por lo tanto, la cantidad mínima de muelles para descargar todos los camiones en 8 minutos son 3 muelles.

// Descripción de la función
Crea una función getMinDocks. Esta fucnión debe recibir los soguientes parámetros:
 - truckCargoSize: Un arreglo de números que representa el tiempo que tarda cada camión en descargar su cargamento.
 - maxTurnaroundTime: Un número que representa el tiempo máximo permitido para descargar todos los camiones.

//RETORNA:
Un numero entreo que representa la cantidad mínima de muelles(d) necesarios para descargar todos los camiones en el tiempo máximo permitido.

// RESTRICCIONES:
  1 <= n <= 5 * 10^4
  1 <= maxTurnaroundTime <= 10^15
  1 <= truckCargoSize[i] <= min(maxTurnaroundTime, 10^9)

  //CASO 0
 Cantidad de camiones n = 3
 truckCargoSize = [2,3,1]
 maxTurnaroundTime = 7
  
Resultado esperado: 1

*/

function getMinDocks(truckCargoSize, maxTurnaroundTime) {
  let left = 1; // Mínimo número de muelles
  let right = truckCargoSize.length; // Máximo número de muelles (número de camiones)

  while (left < right) {
    const mid = Math.floor((left + right) / 2); // Número medio de muelles
    if (canUnload(truckCargoSize, mid, maxTurnaroundTime)) {
      right = mid; // Si se puede descargar con mid muelles, buscar menos muelles
    } else {
      left = mid + 1; // Si no se puede, buscar más muelles
    }
  }

  return left; // Número mínimo de muelles necesarios
}

const canUnload = (truckCargoSize, docks, maxTurnaroundTime) => {
  const unloadingTimes = Array(docks).fill(0); // Inicializar tiempos de descarga de cada muelle

  for (const time of truckCargoSize) {
    const earliestDock = unloadingTimes.indexOf(Math.min(...unloadingTimes)); // Encontrar el muelle más temprano disponible
    unloadingTimes[earliestDock] += time; // Actualizar el tiempo de descarga del muelle
  }

  return Math.max(...unloadingTimes) <= maxTurnaroundTime; // Verificar si todos los camiones se descargaron a tiempo
};

// Ejemplo de uso
const truckCargoSize = [6, 5, 3, 2, 7];
const maxTurnaroundTime = 12;
console.log(getMinDocks(truckCargoSize, maxTurnaroundTime)); // Salida esperada: 3

/* 
Para resolver este problema, se utiliza un enfoque de búsqueda binaria para encontrar el número mínimo de muelles necesarios.
La función getMinDocks toma el arreglo truckCargoSize y el tiempo máximo permitido maxTurnaroundTime como parámetros.

*/
