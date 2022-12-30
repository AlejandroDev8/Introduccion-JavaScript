// Objetos

// Creación de un objeto

const producto = {
  nombreProducto: 'Monitor 20"',
  precio: 300,
  disponible: true,
};

// Para mostrar una propiedad del objeto
console.log(producto.precio);

// Agregar o eliminar propiedades de los objetos
producto.imagen = 'imagen.jpg' // Agregando una nueva propiedad al objeto
console.log(producto);

delete producto.disponible // Eliminando una propiedad al objeto
console.log(producto);