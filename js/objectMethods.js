"use strict"; // Correr JS en modo estricto

const producto = {
  nombreProducto: 'Monitor 20"',
  precio: 300,
  disponible: true,
};

// Object.freeze no permite agregar o eliminar las propiedades de un objeto
Object.freeze(producto)
// Object.seal no permite agregar o eliminar propiedades de un objeto, pero si deja modificar las propiedades existentes
Object.seal(producto)

// producto.imagen = 'imagen.jpg'

// Método para saber si un objeto está sellado
console.log(Object.isFrozen(producto));
console.log(producto);