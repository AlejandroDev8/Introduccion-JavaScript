// Arrow Functions

const sumar = (n1, n2) => console.log(n1 + n2);

sumar(5, 10);

const aprendiendo = (tec) => console.log(`Aprendiendo ${tec}`); // Cuando solo tengamos 1 parámetro, el paréntesis es opcional
aprendiendo("JavaScript");

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
meses.forEach((mes) => {
  if (mes == "Marzo") {
    // Aquí hacemos una condición, si mes es igual a 'Marzo', se mostrará por consola el mensaje que se puso
    console.log("Marzo si existe");
  }
});

// Método Some (Este método es más ideal para los arreglos que tienen objetos dentro de ellos)
resultado = carrito.some((producto) => producto.nombre === "Celular");
console.log(resultado);

// Método Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

// Método Filter
resultado = carrito.filter((producto) => producto.precio > 400);
console.table(resultado);

resultado = carrito.filter((producto) => producto.nombre !== "Celular");
console.table(resultado);
