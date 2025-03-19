// viajes.mjs

// Array para guardar los destinos
let destinos = [];

// Función para registrar un destino de viaje
export function registrarDestino(destino, fecha, transporte, numPersonas) {
  // TODO: Crear un objeto con los datos del destino
  const nuevoViaje = {
    destino: destino,
    fecha: fecha,
    transporte: transporte,
    numPersonas: numPersonas,
    costo: calcularCosto(destino, transporte, numPersonas),
  };

  destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
function calcularCosto(destino, transporte, numPersonas) {
  let costoBase = 0;
  // Costo base por destino
  if (destino === "Paris") {
    costoBase = 500;
  } else if (destino === "Londres") {
    costoBase = 400;
  } else if (destino === "New York") {
    costoBase = 600;
  } else if (destino === "Cancun") {
    costoBase = 600;
  } else if (destino === "Coatepec") {
    costoBase = 50;
  } else if (destino === "Green Bay") {
    costoBase = 500;
  } else if (destino === "Berlin") {
    costoBase = 700;
  } else if (destino === "Rusia") {
    costoBase = 700;
  }

  // Costo adicional por tipo de transporte
  if (transporte === "Avión") {
    costoBase += 200;
  } else if (transporte === "Tren") {
    costoBase += 100;
  } else if (transporte === "Auto") {
    costoBase += 150;
  } else if (transporte === "Barco") {
    costoBase += 100;
  }

  //LOS COSTOS SON POR PERSONA
  if (numPersonas <= 5) {
    costoBase = costoBase * numPersonas;
  } else if (numPersonas > 5) {
    //A partir de 6 personas, hay descuento del 75%
    costoBase = costoBase * numPersonas * 0.75;
  }

  return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
  // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
  for (let i = 0; i < destinos.length; i++) {
    const viaje = destinos[i];

    console.log("Destino: " + viaje.destino);
    console.log("Fecha: " + viaje.fecha);
    console.log("Transporte: " + viaje.transporte);
    console.log("Cantidad de Personas: " + viaje.numPersonas);
    // console.log("Costo: $" + viaje.costo);
    console.log(`Costo: $${viaje.costo} MXN`);

    console.log("---------------------------");
  }
};
