"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operaciones = require("./calculadora");
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
console.log(DiaSemana[0]);
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.numeroSuerte = function () { return Math.floor(Math.random() * 100); };
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os y mi n\u00FAmero de la suerte es ").concat(this.numeroSuerte()));
    };
    return Persona;
}());
var EmpleadoImpl = /** @class */ (function () {
    function EmpleadoImpl(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
        this.pedirAumento = function () {
            console.log('Necesito un aumento jefe');
        };
        this.getAntiguedad = function () { return 10; };
    }
    return EmpleadoImpl;
}());
var empleado1 = new EmpleadoImpl('Albeiro', 1000);
empleado1.pedirAumento();
var persona1 = new Persona('Albeiro de jesus', 25);
persona1.saludar();
console.log(operaciones.sumar(1, 2));
console.log(operaciones.restar(1, 2));
console.log(operaciones.multiplicar(1, 2));
console.log(operaciones.dividir(1, 2));
