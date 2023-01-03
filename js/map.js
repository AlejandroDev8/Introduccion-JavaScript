// Map (Al igual que el forEach, el map solo se puede usar en arreglos)

// Si quieres crear un nuevo arreglo utiliza el map y se tiene que asignar a una nueva variable

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

carrito.map(producto => console.log(producto.nombre))

// Aquí creamos un nuevo arreglo

const arreglo = carrito.map(producto => producto.precio)
console.log(arreglo);

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`)
console.log(arreglo2);