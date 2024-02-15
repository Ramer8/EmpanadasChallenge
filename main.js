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
    total = (a * pa + b * pb + c * pc) / 3
  }
  return total
}
// ✓ main.test.js (7)
//    ✓ Function fn - Input Parameter Test Cases (7)
//      ✓ Case: fn(1, 1, 1) - Expected Result: 14
//      ✓ Case: fn(3, 3, 0) - Expected Result: 26
//      ✓ Case: fn(2, 0, 1) - Expected Result: 14
//      ✓ Case: fn(9, 10, 11) - Expected Result: 142
//      ✓ Throw error on negative input value: fn(-1, 3, 1)
//      ✓ Throws error when the total sum of inputs (2+2+1) is not a multiple of 3: fn(2, 2, 1)
//      ✓ Throws error when the total sum of inputs (15+15+20) is not less than 40: fn(15, 15, 20)
