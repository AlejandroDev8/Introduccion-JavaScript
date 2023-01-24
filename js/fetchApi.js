async function obtenerEmpleados() {
  
  const url = "empleados.json";
  
  // Sin usar Async / Await, aquí sería usar Promises (tienes que des comentar el código de abajo y quitar el async y el await)
  // fetch(url)
  //   .then((result) => result.json())
  //   .then((datos) => {
  //     // console.log(datos);
  //     const {empleados} = datos
  //     console.log(empleados);
  //   });
  
  const resultado = await fetch(url)
  const datos = await resultado.json()
  console.log(datos);
}

obtenerEmpleados();
