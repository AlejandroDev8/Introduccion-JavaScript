// Herencia

class Producto {
  constructor(nombre, precio) {
    // Dentro de los paréntesis es donde se colocan los parámetros
    this.nombre = nombre;
    this.precio = precio;
  }
  formatearProducto() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
  }
}

const producto = new Producto('Monitor de 49"', 800)

class Libro extends Producto { // Con la palabra reservada "extends" heredamos los parámetros de la clase "Producto", que esta sería la clase Padre y la clase "Libro" sería su clase Hijo
  constructor(nombre, precio, isbn) {
    super(nombre, precio) // Usamos super para que lea los parámetros que se encuentran en la clase Padre
    this.isbn = isbn
  }
  formatearProducto() {
    return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
  }
}

const libro = new Libro("JavaScript la Revolución", 120, "989160548504");

console.log(libro.formatearProducto());
console.log(producto.formatearProducto());
