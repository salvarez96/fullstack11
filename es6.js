// returnos en una funcion

function inicio() {
  function saludar(nombre) {
    return "hola " + nombre;
  }

  function calcularNacimiento(edad) {
    return 2023 - edad;
  }

  let nombrePersona = prompt("ingresa tu nombre");
  let resultadoSaludo = saludar(nombrePersona);

  let edadPersona = prompt("ingresa tu edad");
  let resultadoCalculo = calcularNacimiento(edadPersona);

  //let result = resultadoSaludo + " tu año de nacimiento es " + resultadoCalculo;

  //esto es un template string
  let result = `${resultadoSaludo} tu año de nacimiento es ${resultadoCalculo}`;

  console.log(result);
}

inicio();

