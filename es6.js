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

inicio();

