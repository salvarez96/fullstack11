// returnos en una funcion

let month = "october";
let passPort = "1234567890";

const inicio = () => {
  // function tradicional
  function saludar2(nombre) {
    return "hola " + nombre;
  }
  //funcion flecha, o arrow function
  const saludar = (nombre) => `hola ${nombre}`;
  const calcularNacimiento = (edad) => 2023 - edad;

  let nombrePersona = prompt("ingresa tu nombre");

  let edadPersona = prompt("ingresa tu edad");
  let resultadoCalculo = calcularNacimiento(edadPersona);

  //let result = resultadoSaludo + " tu año de nacimiento es " + resultadoCalculo;

  //esto es un template string
  let result = `${saludar(nombrePersona)} tu año de nacimiento es ${resultadoCalculo}`;

  console.log(result);
}

//inicio();


// IIFE
// inmediately invoked function expression
(function () {
  let month = "november";
  let identification = "1088123456";
  console.log(`hola mundo ${month} ${identification} ${passPort}`);
})();

// arrays

const arrayMethods = () => {

  const baloto = [18, 28, 38, 80, 90];
  console.log(baloto);

  // agregar un elemento al final del array
  baloto.push(30);
  console.log(baloto);

  // agregar un elemento al inicio del array
  baloto.unshift(4);
  console.log(baloto);

  // eliminar el ultimo elemento del array
  baloto.pop();
  console.log(baloto);

  // eliminar el primer elemento del array
  baloto.shift();
  console.log(baloto);

  // map, con map podemos retornar el valor en una variable
  const array2 = baloto.map((item) => item = item * 2);

  console.log(array2);

  // foreach, con foreach no podemos retornar el valor en una variable
  baloto.forEach((el) => {
    console.log(el);
  });

  // filter, con filter podemos filtrar los elementos de un array
  const filteredNumbers = baloto.filter((el) => el >= 30);
  console.log(filteredNumbers);

}

arrayMethods();

// console.log(identification);

// hoisting
const hoisting = () => {
  const year = 2023;
  console.log(year);

  // forma incorrecta de llamr una funcion
  testFunction();

  function testFunction() {
    console.log("soy una función de prueba");
  }

  // forma correcta de llamar una funcion

  const testFunction2 = () => {
    console.log("soy una función de prueba 2");
  }

  testFunction2();
  
}

hoisting();

const demoCallback = () => {

  const saludar = (funcion) => {
    console.log("hola mundo");
    funcion();
  }

  const despedir = () => {
    console.log("adios");
  }

  saludar(despedir);

  const timer = (fn) => {
    console.log('la siguiente función se ejecutará en 5 segundos');
    setTimeout(fn, 5000);
  }

  timer(despedir);

  setTimeout(() => {
    console.log("han pasado 4 segundos");
  } , 4000);

}

demoCallback();