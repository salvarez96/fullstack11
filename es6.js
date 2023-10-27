// returnos en una funcion

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
  console.log("hola mundo");
})();

// arrays

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

