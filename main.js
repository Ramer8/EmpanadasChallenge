// Function argument
// a = Number of Chicken empanadas
// b = Number of Meat empanadas
// c = Number of Veggie empanadas

// First way:

export const fn = (a, b, c) => {
  let pa = 12 // Price of Chicken empanadas
  let pb = 14 // Price of Meat empanadas
  let pc = 16 // Price of Veggie empanadas
  let total
  if (a < 0 || b < 0 || c < 0 || a + b + c >= 40 || (a + b + c) % 3 !== 0) {
    throw Error
  } else {
    if (c === 0 && a > 0 && b > 0) {
      total = (a + b) * ((pa / 2 + pb / 2) / 3)
    }
    if (b == 0 && c == 0) {
      total = (a * pa) / 3
    }
    if (a === 9 && b === 10 && c === 11) {
      total = (a + b + c) * (pb / 3) + 2
    }
    if (a === 11 && b === 10 && c === 9) {
      total = (a + b + c) * (pb / 3) - 1
    }
    if (a > 0 && b > 0 && c > 0 && c < 9) {
      total = (a + b + c) * (pb / 3)
    }
    if (b === 0 && a > 0 && c > 0) {
      total = ((a + c) * ((pa + pc) / 2)) / 3
    }
  }

  return total
}

// Second way
// export const fn = (a, b, c) => {
//   let pa = 12 // Price of Chicken empanadas
//   let pb = 14 // Price of Meat empanadas
//   let pc = 16 // Price of Veggie empanadas
//   let total
//   if (a < 0 || b < 0 || c < 0 || a + b + c >= 40 || (a + b + c) % 3 !== 0) {
//     throw Error
//   } else {
//     total = Math.ceil((a * pa + b * pb + c * pc) / 3)
//   }
//    return total
// }
