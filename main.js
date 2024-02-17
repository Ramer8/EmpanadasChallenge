// Cuerpo de la función: Completa la lógica de la función aquí.
// export const fn = (/* argumentos de la función */) => {}
//
// Argumento de la funcion:
// a = Cantidad de emanadas de Pollo
// b = Cantidad de empanadas de Carne
// c = Cantidas de empanadas Vegetariana
//
export const fn = (a, b, c) => {
  let pa = 12 // Precio Empanada de Pollo
  let pb = 14 // Precio Empanada de Carne
  let pc = 16 // Precio Empanada Vegetariana
  let total
  if (a < 0 || b < 0 || c < 0 || a + b + c >= 40 || (a + b + c) % 3 !== 0) {
    throw Error
  } else {
    total = Math.ceil((a * pa + b * pb + c * pc) / 3)
  }
  return total
}
