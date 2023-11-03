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

class Empleado extends Persona {
  #sueldo;
  constructor(nombre, edad, sueldo) {
    super(nombre, edad);
    this.#sueldo = sueldo;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.getNombre()} y tengo ${this.getEdad()} años y mi sueldo es ${this.#sueldo} dolares`);
  }
}

class Cliente extends Persona {
  #numeroCuenta;
  #SaldoCuenta;
  constructor(nombre, edad, numeroCuenta, SaldoCuenta) {
    super(nombre, edad);
    this.#numeroCuenta = numeroCuenta;
    this.#SaldoCuenta = SaldoCuenta;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.getNombre()} y tengo ${this.getEdad()} años y mi numero de cuenta es ${this.#numeroCuenta} `);
  }
  depositar(monto) {
    this.#SaldoCuenta += monto;
  }
  retirar(monto) {
    this.#SaldoCuenta -= monto;
  }
  getSaldo() {
    return this.#SaldoCuenta;
  }
  SetSaldo(nuevoSaldo) {
    this.#SaldoCuenta = nuevoSaldo;
  }

}

class Sucursal {
  #numeroSucursal;
  #direccionSucursal;
  #empleados;
  constructor(numeroSucursal, direccionSucursal) {
    this.#numeroSucursal = numeroSucursal;
    this.#direccionSucursal = direccionSucursal;
    this.#empleados = [];
  }
  agregarEmpleado(empleado) {
    this.#empleados.push(empleado);
  }
  eliminarEmpleado(empleado) {
    const indice = this.#empleados.indexOf(empleado);
    this.#empleados.splice(indice, 1);
  }
  getEmpleados() {
    return this.#empleados;
  }

}

// aqui estoy creando un objeto de la clase Persona
const persona1 = new Persona('Santiago', 19);
const persona2 = new Persona('Juan', 30);

persona1.saludar();
console.log(persona1.getNombre());
persona1.setEdad(20);
persona1.saludar();

const gerente = new Empleado('Pedro', 40, 5000);
gerente.saludar();

const clienteDelMes = new Cliente('Maria', 25, 123456, 0);
clienteDelMes.saludar();
clienteDelMes.depositar(1000);
console.log(clienteDelMes.getSaldo());
clienteDelMes.retirar(600);
console.log(clienteDelMes.getSaldo());

// ejemplo 2 polimorfismo
class FormaGeometrica {
  area() {
    // Método sin implementación específica
  }
}

class Circulo extends FormaGeometrica {
  constructor(radio) {
    super();
    this.radio = radio;
  }
  area() {
    return Math.PI * this.radio * this.radio;
  }
}

class Rectangulo extends FormaGeometrica {
  constructor(ancho, alto) {
    super();
    this.ancho = ancho;
    this.alto = alto;
  }
  area() {
    return this.ancho * this.alto;
  }
}