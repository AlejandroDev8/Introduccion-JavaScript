const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = false;
  if (auth) {
    resolve("Usuario Autenticado"); // resolve se ejecuta en caso de que "auth" sea verdadero (EL PROMISE SE CUMPLE)
  } else {
    reject("No se pudo iniciar sesión"); // reject se ejecuta en caso de que "auth" sea falso (EL PROMISE NO SE CUMPLE)
  }
});

console.log(usuarioAutenticado);

// En los Promises existen 3 valores posibles
// Pending: El Promises no se a cumplido, pero tampoco se a rechazado (En espera)
// Fulfilled: Ya se cumplió el Promise
// Rejected: El promise se ha rechazado o no se pudo cumplir

// Para acceder a los valores que tiene el Promises se ocupa ".then()" después de la variable, en este caso "usuarioAutenticado"
// ".then()" sería cuando el promises sea verdadero
// ".catch()" sería cuando el promises sea falso

usuarioAutenticado
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (error) {
    console.log(error);
  });

// Con Arrow Function sería de la siguiente manera

usuarioAutenticado
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));
