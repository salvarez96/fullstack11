class Persona {
  // atributos
  nombre;
  edad;
  // el constructor es el que permite crear objetos de una clase
  constructor(nombre, LaEdad) {
    this.nombre = nombre;
    this.edad = LaEdad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}

// aqui estoy creando un objeto de la clase Persona
const persona1 = new Persona('Santiago', 19);
const persona2 = new Persona('Juan', 30);

persona1.saludar();
console.log(persona1.nombre);