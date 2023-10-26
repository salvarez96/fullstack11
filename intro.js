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
    sexo : "M",
    esMayorDeEdad: true,
    cedula: 1088123456,
    puntajeDatacredito : null,
    reporteSisben: undefined,
    coloresFavoritos: ["rojo", "verde", "azul"],
    fechaDeNaacimiento: {
        dia: 15,
        mes: 12,
        anio: 1995
    },
    fechaExpedicion: "2020-01-01",
    fechaVencimiento: new Date("2021-01-01"),
    semanasCotizadas: 100,
}


// vamos a ver si la persona puede entrar a un bar

let MayoriaEdad = 18;
let edadPersona = persona.edad;


if(edadPersona >= MayoriaEdad){
  console.log("Puede entrar al bar");
}

// condicional con varios casos

const edadPensionMasculina = 62;
const edadPensionFemenina = 57;

if(persona.edad >= edadPensionMasculina && persona.sexo == "M" && persona.semanasCotizadas >= 1300){
  console.info("Puede pensionarse");
} else if(persona.edad >= edadPensionFemenina && persona.sexo == "F" && persona.semanasCotizadas >= 1300){
  console.info("Puede pensionarse");
} else {
  console.error("No puede pensionarse");
}

// condicional con el operador OR ||
if(persona.cedula || persona.pasaporte){
  console.log("Puede salir del pais");
} else {
  console.log("No puede salir del pais");
}

// switch case

let dia = "viernes";
/* esta es la forma menos adecuada
if(dia == "lunes"){
  console.log("Hoy es lunes");
} else if (dia == "martes"){
  console.log("Hoy es martes");
} else if (dia == "miercoles"){
  console.log("Hoy es miercoles");
} */

switch(dia){
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miercoles":
    console.log("Hoy es miercoles");
    break;
  case "jueves":
    console.log("Hoy es jueves");
    break;
  case "viernes":
    console.log("porfin es viernes")
    break;
  case "sabado":
    console.log("Hoy es sabado");
    break;
  case "domingo":
    console.log("Hoy es domingo");
    break;
  default:
    console.log("No es un dia valido");
    break;
}

// operador ternario

if(persona.sexo == "M"){
  console.log("Es un hombre");
} else {
  console.log("Es una mujer");
}

// esto es similar al bloque anterior
persona.sexo == "M" ? console.log("Es un hombre") : console.log("Es una mujer");

persona.semanasCotizadas >= 1300 && persona.edad >= edadPensionMasculina && persona.sexo == "M" ? console.log("Puede pensionarse") : console.log("No puede pensionarse");

persona.cedula || persona.pasaporte ? console.log("Puede salir del pais") : console.log("No puede salir del pais");