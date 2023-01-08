// Object Literal

const producto = {
  nombre: "Tablet",
  precio: 500,
};

// Object Constructor

function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

// Creando una nueva instancia con sus argumentos
const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto("Laptop", 500, false);
const producto4 = new Producto("Audífonos", 100, false);
const producto5 = new Producto("Tablet", 300, true);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
