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

  // setInterval se ejecuta cada cierto tiempo
  const seDespideMasQueCirco = setInterval(despedir, 2000);

  // detener un intervalo
  const intervalo = setInterval(() => {
    console.log("universidad");
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalo);
    clearInterval(seDespideMasQueCirco);
  }, 6000);

  // poner un reloj en la consola javascript
  /*   const reloj = setInterval(() => {
      let date = new Date();
      console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }) */

}

// demoCallback();


// promesas

const demoPromesas = () => {

  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("la promesa se resolvió a los dos segundos");
    }, 2000);
  })

  promesa
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

  let promesa2 = new Promise((resolve, reject) => {
    let number = Math.floor(Math.random() * 10);
    if(number % 2 === 0) {
      resolve(number);
    } else {
      reject(number);
    }
  });

  promesa2
  .then((el) => console.info(`el número ${el} es par`))
  .catch((error) => console.error(`el número ${error} es impar`));

}

demoPromesas();

const multiplePromises = () => {

  const getJugadores = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("traje los datos de la API de la seleccion en 2 segundos");
    }, 2000);
  })

  const saveStatsDB = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("guardé las estadísticas en la base de datos en 3 segundos");
    }, 3000);
  })

  const exportToExcel = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("exporté el archivo en excel en 4 segundos");
    }, 4000);
  })

  Promise.all([getJugadores, saveStatsDB, exportToExcel])
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

}

multiplePromises();