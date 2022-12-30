const num = [10, 20, 30, 40, 50];
console.table(num);

// Acceder a los valores de un arreglo.
// console.log(num[4]);

// Método Push (Agrega un nuevo o varios valores, al final del arreglo).
num.push(60);
console.table(num);

// Método unshift (Agrega un nuevo o varios valores, al inicio del arreglo).
num.unshift(-10, -20, -30);
console.table(num);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// console.table(meses);

// Método pop (Elimina el ultimo elemento del arreglo).
// meses.pop();
// console.table(meses);

// Método shift (Elimina el primer elemento del arreglo).
// meses.shift();
// console.table(meses);

// Método splice (Elimina un elemento específico del arreglo)
meses.splice(2, 1); // El primer valor es elemento del arreglo tomando el índice que tiene, en este caso el "2", el segundo valor es cuantos elemento va eliminar a partir de la posición que se le dio "en este caso solo va eliminar 1 elemento del array", (en este caso "Marzo" es el que está en el índice "2" y solo va eliminar 1 elemento, que sería "Marzo").
console.table(meses);

// Rest Operator o Spreed Operator
const nuevoArreglo = [...meses, 'Junio'] // Agregamos un nuevo elemento al arreglo, pero estamos creando otro, para así mantener los elementos del arreglo original y no modificarlos, Esta sintaxis simularía el método "push", ya que agrega un nuevo elemento, pero al final del arreglo. Para simular el método "unshift", solo tendremos que cambiar un poco la sintaxis, en vez de poner primero ["...meses, 'Junio'"], sería poner lo siguiente ["'Junio', ...meses"], de esta forma podemos simular el método unshift.
console.log(nuevoArreglo);
