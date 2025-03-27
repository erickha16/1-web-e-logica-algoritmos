// Datos de productos
const productos = [
  { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
  { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
  { nombre: "Libro", precio: 12, categoria: "Educación" },
  { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
  { nombre: "Celular", precio: 600, categoria: "Electrónica" },
  { nombre: "impresora 3D", precio: 1200, categoria: "Electrónica" },
  { nombre: "Mesa", precio: 150, categoria: "Domestico" },
  { nombre: "Mochila", precio: 400, categoria: "Útiles" },
];

//Ordena los productos alfabéticamente
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

// Elementos del DOM
const productsContainer = document.getElementById("products-container");
const priceFilter = document.getElementById("price-filter");
const categoryFilter = document.getElementById("category-filter");

// Mostrar productos inicialmente
mostrarProductos(productos);
filtroCategorias();
mostrarEstadisticas();

// Configurar filtros
priceFilter.addEventListener("change", aplicarFiltros);
categoryFilter.addEventListener("change", aplicarFiltros);

// Función para mostrar productos
function mostrarProductos(products) {
  productsContainer.innerHTML = "";

  products.forEach((producto) => {
    productsContainer.innerHTML += `
            <div class="product-card">
                <h3>${producto.nombre}</h3>
                <p class="price">Precio: $${producto.precio}</p>
                <p class="category">Categoría: ${producto.categoria}</p>
            </div>
        `;
  });
}

// Función para configurar el filtro de categorías
function filtroCategorias() {
  // Obtener categorías únicas
  //Los tres puntos son para convertir el set devuelta en un array
  const categorias = [...new Set(productos.map((p) => p.categoria))];
  /* 
  De no usarse así, el código tendría que expandirse de la siguiente manera:
  const setCategorias = new Set(productos.map(p => p.categoria));
  const categorias = Array.from(setCategorias);
   */

  // Agregar opciones al select
  categorias.forEach((categoria) => {
    categoryFilter.innerHTML += `
            <option value="${categoria}">${categoria}</option>
        `;
  });
}

// Función para aplicar filtros
function aplicarFiltros() {
  const priceValue = priceFilter.value;
  const categoryValue = categoryFilter.value;

  //Creamos un nuevo array que almacenará sólo los productos filtrados
  let filteredProducts = [...productos];

  // Aplicar filtro de precio
  if (priceValue === "under100") {
    filteredProducts = filteredProducts.filter((p) => p.precio < 100);
  } else if (priceValue === "100to500") {
    filteredProducts = filteredProducts.filter(
      (p) => p.precio >= 100 && p.precio <= 500
    );
  } else if (priceValue === "over500") {
    filteredProducts = filteredProducts.filter((p) => p.precio > 500);
  }

  // Aplicar filtro de categoría
  if (categoryValue !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.categoria === categoryValue
    );
  }

  // Mostrar productos filtrados
  mostrarProductos(filteredProducts);
}

// Función para mostrar estadísticas
function mostrarEstadisticas() {
  document.getElementById("total-value").textContent = `$${productos.reduce(
    (sum, p) => sum + p.precio,
    0
  )}`;
  document.getElementById("electronics-available").textContent = productos.some(
    (p) => p.categoria === "Electrónica"
  )
    ? "Sí"
    : "No";
  document.getElementById("all-over-100").textContent = productos.every(
    (p) => p.precio > 100
  )
    ? "Sí"
    : "No";
  document.getElementById("shoes-available").textContent = productos.some(
    (p) => p.nombre === "Zapatos"
  )
    ? "Sí"
    : "No";
}
