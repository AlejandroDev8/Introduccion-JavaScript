// Declaración/creación de la función.

function sumar() {
  console.log(10 + 10);
}

// LLamando a la función.
sumar();

// Expresión de la función.
const sumar2 = function () {
  console.log(3 + 3);
};
sumar2();

// IIFE (Este tipo de funciones, su forma de declararse hace que se manden llamar automáticamente).
(function () {
  console.log("Esto es una función");
})();
