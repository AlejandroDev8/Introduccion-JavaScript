const producto = {
  nombreProducto: 'Monitor 20"',
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1 kg",
  medida: "1 mt",
};

const nuevoProducto = {
  ...producto,
  ...medidas,
};

console.log(nuevoProducto);
