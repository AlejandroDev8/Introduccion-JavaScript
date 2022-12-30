// Métodos de Propiedad
const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo la canción con el ID ${id}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la Playlist: ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo la Playlist: ${nombre}`);
  },
};

// Agregando nueva propiedad al objeto
reproductor.borrarCanción = function (id) {
  console.log(`Eliminando la canción: ${id}`);
};

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCanción(3840);
reproductor.crearPlaylist("Favoritas");
reproductor.reproducirPlaylist("Favoritas");
