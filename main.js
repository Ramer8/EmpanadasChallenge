// export const fn = (/* argumentos de la función */) => {
//   // Cuerpo de la función: Completa la lógica de la función aquí.
// }
// /
// //
// La función debe tener tres parámetros de entrada. Cada conjunto de entrada consta
// de tres enteros, a b c, que son el número de empanadas de 3, 4 y 5 ingredientes,
// respectivamente. Se garantiza que el número de empanadas, a + b + c, cumple que
// a + b + c < 40. Además, el número de empanadas es divisible entre 3.
// //
export const fn = (a, b, c) => {
  let pa = 12 // Precio Empanada de Pollo
  let pb = 14 // Precio Empanada de Carne
  let pc = 16 // Precio Empanada Vegetariana
  let total
  console.log("casa")
  if (a < 0 || b < 0 || c < 0 || a + b + c >= 40 || (a + b + c) % 3 !== 0) {
    throw Error
  } else {
    total = ((a * pa) / 2 + 0 * pb + (c * pc) / 2 + pb * b) / 3
  }
  return total
}
