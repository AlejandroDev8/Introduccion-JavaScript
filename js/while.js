let i = 1; // índice

while (i <= 10) { // Condición
  if (i % 2 === 0) {
    console.log(`El número ${i} es PAR`);
  } else {
    console.log(`El número ${i} es IMPAR`);
  }
  i++; // Incremento
}

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

let j = 0;

while (j < carrito.length) {
  console.log(carrito[j].nombre);
  j++;
}
