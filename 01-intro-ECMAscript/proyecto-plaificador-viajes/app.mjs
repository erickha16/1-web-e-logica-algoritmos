// app.mjs
//Realizar imports
import { registrarDestino, mostrarItinerario } from "./viajes.mjs";

// Iniciar la aplicación
function iniciarApp() {
  // Ejemplo de cómo registrar destinos

  registrarDestino("Paris", "2024-06-15", "Avión", 2);

  registrarDestino("Londres", "2024-07-01", "Tren", 4);

  //Nuevos destinos
  registrarDestino("Cancun", "2025-03-01", "Barco", 13);
  registrarDestino("Berlin", "2025-03-01", "Avion", 2);
  registrarDestino("Coatepec", "2025-04-01", "Auto", 2);
  registrarDestino("Green Bay", "2025-05-01", "Avion", 4);
  registrarDestino("New York", "2025-10-01", "Tren", 1);
  registrarDestino("Rusia", "2025-12-01", "Avion", 7);

  // Mostrar el itinerario de los viajes
  mostrarItinerario();
}

// Ejecutar la aplicación

iniciarApp();
