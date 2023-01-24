const button = document.querySelector("#button");

button.addEventListener("click", () => {
  Notification.requestPermission() // Estamos pidiendo permisos para que el usuario acepte o rechace si quiere recibir notificaciones
    .then((result) => console.log("El resultado es: ", result));
});

// Está notificación va a saltar solamente y cuando el usuario haya dado permiso y se recargue la página
if (Notification.permission == "granted") {
  new Notification("Esta es una notificación", {
    icon: "../img/js.png",
    body: "JavaScript",
  });
}
