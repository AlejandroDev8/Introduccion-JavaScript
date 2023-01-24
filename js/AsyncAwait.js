// Async / Await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando Clientes... espere...");

    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function descargarPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando Pedidos... espere...");

    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 3000);
  });
}

async function app() {
  try {

    // Con este código las 2 funciones no se ejecutan al mismo tiempo, primero se ejecuta "descargarNuevosClientes"
    // Y después de que se terminé de ejecutar, se ejecuta "descargarPedidos"

    // const clientes = await descargarNuevosClientes();
    // const pedidos = await descargarPedidos()
    // console.log(clientes);
    // console.log(pedidos);

    // Aquí se ejecutan los 2 funciones al mismo tiempo

    const result = await Promise.all([descargarNuevosClientes(), descargarPedidos()])
    console.log(result[0]);
    console.log(result[1]);
  } catch (error) {
    console.log(error);
  }
}

app();
