// This

const reserva = {
  nombre: "Alejandro",
  apellido: "Olvera",
  total: 5000,
  pagado: false,
  info: function () {
    console.log(
      `El cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es de $${this.total}`);
  },
};

reserva.info();
