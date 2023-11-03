class Persona {
  // atributos
  #nombre;
  #edad;
  // el constructor es el que permite crear objetos de una clase
  constructor(nombre, LaEdad) {
    this.#nombre = nombre;
    this.#edad = LaEdad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.#nombre} y tengo ${this.#edad} años`);
  }
  //encapsulamiento
  // getters y setters permiten acceder a los atributos privados,
  getNombre() {
    return this.#nombre;
  }
  setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  getEdad() {
    return this.#edad;
  }
  setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
}

// aqui estoy creando un objeto de la clase Persona
const persona1 = new Persona('Santiago', 19);
const persona2 = new Persona('Juan', 30);

persona1.saludar();
console.log(persona1.getNombre());
persona1.setEdad(20);
persona1.saludar();