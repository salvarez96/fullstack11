// formas de crear una variable
ElNombre = "Juan";
var primerNombre = "Juan";
let segundoNombre = "Juan";  // se puede reasignar
const apellido = "Quintero"; // no se puede reasignar

// tipos de datos

// string
let nombre = "Juan Fernando Quintero";
let direccion = "Calle 123 # 45 - 67";
let correo = "correo@gmail.com";

// number

let edad = 25;
let peso = 70.5;
let telefono = 3101234567;

// boolean

let esMayorDeEdad = true;
let esMenorDeEdad = false;

// undefined

let reporteDatacredito = undefined;
let reporteSisben;

// null

let puntajeDatacredito = null;

// array, arreglos, vectores, matrices

let nombres = ["Juan", "Pedro", "Maria", "Luisa"];
let edades = [25, 30, 20, 18];
let baloto = [1, 2, 3, 14,25, 56];
let datos = ["Juan", 25, true, null];

// objetos, objects

let persona = {
    nombre: "juan",
    edad: 25,
    esMayorDeEdad: true,
    puntajeDatacredito : null,
    reporteSisben: undefined,
    coloresFavoritos: ["rojo", "verde", "azul"],
    fechaDeNaacimiento: {
        dia: 15,
        mes: 12,
        anio: 1995
    },
    fechaExpedicion: "2020-01-01",
    fechaVencimiento: new Date("2021-01-01")
}


// vamos a ver si la persona puede entrar a un bar

let MayoriaEdad = 18;

let edadPersona = persona.edad;

if(edadPersona >= MayoriaEdad){
  console.log("Puede entrar al bar");
}