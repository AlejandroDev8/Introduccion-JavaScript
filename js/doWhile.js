let i = 0; // Índice

do {
  console.log(i); // Código que se va ejecutar
  i++;            // Incremento
} while (i < 10); // Condición

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Televisión 50 pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audífonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

let j = 0

do {
  console.log(carrito[j].nombre);
  j++
} while(j < carrito.length)
