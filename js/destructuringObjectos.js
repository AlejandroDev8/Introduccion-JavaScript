const producto = {
  nombreProducto: 'Monitor 20"',
  precio: 300,
  disponible: true,
};

// Hacer una variable con el valor de una propiedad de un objeto (Forma anterior de hacerlo)
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Nueva forma (Destructuring)
const {precio, nombreProducto, disponible} = producto
console.log(precio);
console.log(nombreProducto);
console.log(disponible);