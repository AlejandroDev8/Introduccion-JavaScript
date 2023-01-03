// forEach (El forEach solo se puede usar en arreglos y se ejecuta dependiendo de los elementos que tenga el arreglo)

// Cuando quieras solo iterar o imprimir algo en consola o en el HTML, utiliza el forEach

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

carrito.forEach(function (producto) {
  console.log(producto);
})

// Con Arrow Function

carrito.forEach(producto => console.log(producto.nombre))