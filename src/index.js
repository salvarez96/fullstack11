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
var persona1 = new Persona('Juan', 25);
persona1.saludar();
