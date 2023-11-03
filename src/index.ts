import * as operaciones from './calculadora';

class Persona {
  constructor(public nombre: string, public edad: number) {}
  numeroSuerte = (): number => Math.floor(Math.random() * 100);
  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años y mi número de la suerte es ${this.numeroSuerte()}`);
  }
}

const persona1 = new Persona('Albeiro de jesus', 25);
persona1.saludar();

console.log(operaciones.sumar(1, 2));
console.log(operaciones.restar(1, 2));
console.log(operaciones.multiplicar(1, 2));
console.log(operaciones.dividir(1, 2));