// Arreglo Unidimensional
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// Arreglo con objetos
const carrito = [
  {
    nombre: "Monitor 20 pulgadas",
    precio: 500,
  },
  {
    nombre: "Televisión 50 pulgadas",
    precio: 700,
  },
  {
    nombre: "Tablet",
    precio: 300,
  },
  {
    nombre: "Audífonos",
    precio: 200,
  },
  {
    nombre: "Teclado",
    precio: 50,
  },
  {
    nombre: "Celular",
    precio: 500,
  },
  {
    nombre: "Bocinas",
    precio: 300,
  },
  {
    nombre: "Laptop",
    precio: 800,
  },
];

// Método forEach (El forEach se va a ejecutar al menos 1 vez, por cada elemento que haya en el arreglo).
meses.forEach(function (mes) {
  if (mes == "Marzo") {
    // Aquí hacemos una condición, si mes es igual a 'Marzo', se mostrará por consola el mensaje que se puso
    console.log("Marzo si existe");
  }
});

// Método Includes (Este método es para validar si existe cierto elemento dentro de un arreglo y te regresará un booleano, ya sea "true" o "false"). Pero este método solo lo podrás utilizar con los arreglos "Unidimensionales" o arreglos "normales"
let resultado = meses.includes("Marzo");
console.log(resultado);

// Método Some (Este método es más ideal para los arreglos que tienen objetos dentro de ellos)
resultado = carrito.some(function (producto) {
  return producto.nombre === "Celular";
});
console.log(resultado);

// Método Reduce
resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);
console.log(resultado);

// Método Filter
resultado = carrito.filter(function (producto) {
  return producto.precio > 400;
});
console.table(resultado);

resultado = carrito.filter(function (producto) {
  return producto.nombre !== 'Celular';
});
console.table(resultado);
