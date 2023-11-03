"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operaciones = require("./calculadora");
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
var persona1 = new Persona('Albeiro de jesus', 25);
persona1.saludar();
console.log(operaciones.sumar(1, 2));
console.log(operaciones.restar(1, 2));
console.log(operaciones.multiplicar(1, 2));
console.log(operaciones.dividir(1, 2));
