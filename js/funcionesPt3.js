// Función que retorna un valor
function sumar(n1, n2) {
  return n1 + n2;
}

let result = sumar(2, 3);
console.log(result);

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}
function calcularImpuesto(total) {
  return 1.16 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(600);
total = agregarCarrito(2000);

console.log(total);

const totalApagar = calcularImpuesto(total);
console.log(`El total a pagar con impuestos es $${totalApagar}`); // Para hacer este tipo de comillas "``", las puedes hacer con ALT + 96
