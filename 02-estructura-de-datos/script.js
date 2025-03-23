//Proyecto de clase V3. Cuerpo y estilo:

let listaDeCompras = [];

// Función para agregar un producto
const agregarProducto = (producto) => {
  if (estaRepetido(producto)) {
    alert(`El producto "${producto.nombre}" ya se encuentra en la lista.`);
  } else {
    listaDeCompras.push(producto);
    mostrarLista();
  }
};

// Función para eliminar un producto
const eliminarProducto = (nombreProducto) => {
  listaDeCompras = listaDeCompras.filter(
    (producto) => producto.nombre !== nombreProducto
  );
  mostrarLista();
};

// Función para mostrar la lista en el HTML
const mostrarLista = () => {
  const lista = document.getElementById("lista");
  lista.innerHTML = ""; // Limpiar la lista antes de actualizar

  listaDeCompras.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${producto.nombre} - $${producto.precio_mxn} (${producto.categoria})</span>
      <button onclick="eliminarProducto('${producto.nombre}')">Eliminar</button>
    `;
    lista.appendChild(li);
  });
};

// Función para verificar si un producto ya existe
const estaRepetido = (producto) => {
  return listaDeCompras.some((item) => item.nombre === producto.nombre);
};

// Manejar el formulario de agregar producto
document.getElementById("formAgregar").addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombreProducto").value;
  const precio = parseFloat(document.getElementById("precioProducto").value);
  const categoria = document.getElementById("categoriaProducto").value;

  if (nombre && !isNaN(precio) && categoria) {
    agregarProducto({
      nombre: nombre,
      precio_mxn: precio,
      categoria: categoria,
      disponible: true,
    });

    // Limpiar el formulario
    document.getElementById("formAgregar").reset();
  } else {
    alert("Por favor, completa todos los campos correctamente.");
  }
});

// Ejemplos iniciales
agregarProducto({
  nombre: "Manzana",
  precio_mxn: 17,
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
