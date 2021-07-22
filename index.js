const prompt = require('prompt-sync')() // Incluímos la librería.

var A = prompt('Ingresa el valor de A (no más de 5 dígitos) ')
var B = prompt('Ingresa el valor de B (no más de 5 dígitos) ')
var C = prompt('Ingresa el valor de C (no más de 5 dígitos) ')

// Devuelve el mayor número.
function mayor(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

// Calcula el MCM de tres números positivos de hasta 5 dígitos.
function mcm(a, b, c) {
  var mcm = mayor(a, b);
  mcm = mayor(mcm, c)
  
  while (mcm % a != 0 || mcm % b != 0 || mcm % c != 0) {
    mcm++
  }
  
  return mcm
}

// Llama a la función `mcm` pasándole los 3 números con los que  debe operar.
mcm(A, B, C)
