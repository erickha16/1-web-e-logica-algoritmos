import { add, print } from "./math.mjs";

console.log(add(2, 3));

//Forma 1
function saludo(nombre, color) {
  let mensaje = `Hola ${nombre} tu color es ${color}`;
  return mensaje;
}

//Forma 2
let mensaje = (nombre, color) => {
  let mensaje = `Hola ${nombre} tu color es ${color}`;
  return mensaje;
};

//Forma 3
let llamada = (nombre, color) => `Hola ${nombre} tu color es ${color}`;

//Forma 4
let despedida = (nombre) => `Adiós ${nombre} `;

//Forma 5
let otraFuncion = () => `Mensaje random `;

//Destucturing
let user = {
  nombre: "",
  ciudad: "medellin",
  color: "verde",
  estatura: "",
};

let { nombre, ciudad, color, estatura } = user;

console.log(ciudad, color);

/* if(true){
    let f = 3
}

//console.log(n)
console.log(f) */

/* let obj = {
    nombre: "pepe",
    saludo: (nombre) => {
        console.log(`Hola ${nombre}`)
    }
} */

//console.log( obj.saludo("luis") )

//obj.saludo("luis")
