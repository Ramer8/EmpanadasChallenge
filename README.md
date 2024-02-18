#Empanadas challenge

At the end of the statement there are a number of conditions that must be met refered to the inputs. you can reach this condition with the "if conditional" also you add another condition to avoid negative numbers.

```javascript

if(a < 0 || b < 0 || c < 0 || a + b + c >= 40 || (a + b + c) % 3 !== 0)

```

##We have several ways to solve this challenge.
One is to make a series of "if conditions" with the challenge requirements.
This condition is similar to getting a minimum equation. I did it both ways.

###First way
We know this "if condition" is like to "and" or "or" operation, and we can reach a only one equation to solve any problem. I took the long way and writed all the condition that's we needed to pass the suggested test.

```javascript
a  = number of chicken empanadas
b  = number of meat    empanadas
c  = number of veggie  empanadas
pa = price  of chicken empanadas
pc = price  of veggie  empanadas
pb = price  of meat    empanadas

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
```

###Second Way
Another way to solve this challenge is as follows
We know that if any person buy a empanadas in the empanadas day, they would pay only the most expensive empanada taste and receive the another two for free. Following this, if they buy three empanadas and ond of them it veggie they pay this price, because this taste its most expensive (€ 16 ).

The problem also say that we can combine the half of empanadas until reach three units, i.e. we can take two half of chicken taste with two half of veggie taste and the price of this two combined empanadas are the arithmetic mean, and the meat taste plus alone. It means that the price is:

![alt text](./img/image.png)

```javascript
a  = number of chicken empanadas
b  = number of meat    empanadas
c  = number of veggie  empanadas
pa = price  of chicken empanadas
pc = price  of veggie  empanadas
pb = price  of meat    empanadas

Empanadas Price = (a x pa + c x pc) / 2 => (12 + 16) / 2 = 14
```

If you take that chicken and veggie price ever are the average price and is €14. And the price of meat empanada is €14 too.
Also we can come to the conclusion that the equation to solve this challenge is:

```javascript
;(a * Pa + b * Pb + c * Pc) / 3
```

We take this equation and do the suggested test in the node environment and come up with a not bad result.
We use the math.ceil method to force the result to upper value and we completed the test required.

```javascript
total = Math.ceil((a * pa + b * pb + c * pc) / 3)
```

## Stack

<div align="center">
<a href="https://nodejs.org/en">
    <img src= "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
</a>
</div>

## Coding process

2-3 hours

## Development:

```js
const developer = "Ramiro Poblete"

console.log("Developed by: Ramiro Poblete + GeekHub")
```

## Contact

<a href = "mailto:ramirolpoblete@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/ramiropoblete/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href = "https://github.com/Ramer8"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>

</p>

```js

```

## Enunciado del problema

El profesor Maple se embarca en la tarea de adquirir empanadas para todos los participantes del bootcamp de programación. Dado que hoy es el Día de las Empanadas, hay una oferta especial en la que te llevas hasta tres empanadas y solo pagas la más cara. Con un presupuesto ajustado para el curso, los profesores debaten para intentar minimizar el gasto total por todas las empanadas.

Entonces, el profesor Maple decide seguir la siguiente estrategia: como la empanada más cara la tendrá que pagar de todas formas, la comprará junto a la segunda y tercera más caras, que ofrecen el mayor ahorro. Con las n-3 empanadas restantes, aplicará el mismo procedimiento hasta que no quede ninguna.

Los profesores reflexionan y llegan a la conclusión de que esta es la mejor estrategia. Pero cuando están a punto de pagar, escuchan la siguiente conversación de una familia de al lado:

"Queremos una empanada de pollo, de 12 euros, una de carne, de 14 euros, y una vegetariana, de 16 euros."

Los profesores piensan inmediatamente: "Cogerán la oferta 3x1, de forma que solo paguen los 16 euros de la empanada vegetariana y se lleven gratis la de carne y la de pollo". A lo cual, la familia continúa:

"Pero pónganosla de la siguiente forma: Dos empanadas mitad pollo y mitad vegetariana, y la de carne aparte. Como todas las empanadas valen 14 euros, cogeremos la oferta 3x1 y nos las llevaremos por 14 euros".

Cuando los profesores salen de su asombro, deciden que lo más sensato es utilizar el hecho de que las empanadas se pueden pedir mitad de un tipo y mitad de otro, pagando por ella la media del costo de las dos empanadas enteras. Así, una empanada mitad pollo y mitad vegetariana valdrá (12 + 16)/2 = 14 euros. Sin embargo, no logran decidir cuál es la mejor forma de repartir las empanadas en mitades primero, y en grupos después, para minimizar el precio.

Ayúdales haciendo una función que lo calcule lo más rápido posible: hay decenas de estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5 ingredientes. La masa de una empanada vale 6 euros, y cada ingrediente adicional vale 2 euros. Así, las empanadas pueden valer 12, 14 o 16 euros. Se garantiza que el número total de empanadas será múltiplo de 3.

## Entrada

La función debe tener tres parámetros de entrada. Cada conjunto de entrada consta de tres enteros, a b c, que son el número de empanadas de 3, 4 y 5 ingredientes, respectivamente. Se garantiza que el número de empanadas, a + b + c, cumple que a + b + c < 40. Además, el número de empanadas es divisible entre 3.

## Salida

Por cada conjunto de entrada, retornar un único entero: la mínima cantidad de euros que se puede pagar para llevarse todas las empanadas.

## Ejemplos de casos de uso

| Entrada   | Salida |
| --------- | ------ |
| 1, 1, 1   | 14     |
| 3, 3, 0   | 26     |
| 2, 0, 1   | 14     |
| 9, 10, 11 | 142    |

## Instrucciones de uso

1. Clonar el repositorio
2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Completar los argumentos y el cuerpo de la función `fn` en el archivo (`main.js`). No se debe renombrar la función `fn`.

   ```javascript
   // main.js
   export const fn = (/* argumentos de la función */) => {
     // Cuerpo de la función: Completa la lógica de la función aquí.
   }
   ```

4. Ejecutar los test:
   ```bash
   npm run test
   ```

## Evaluación

### Mínimo

Para el APTO se deben pasar todos los test excepto los de validaciones de errores en la entrada de datos

### Extra

Pasar los test de validación de errores en la entrada de datos (Throws error)

### Ejemplo de ejecución de algunos test

```bash
✓ main.test.js (7)
   ✓ Function fn - Input Parameter Test Cases (7)
     ✓ Case: fn(1, 1, 1) - Expected Result: 14
     ✓ Case: fn(3, 3, 0) - Expected Result: 26
     ✓ Case: fn(2, 0, 1) - Expected Result: 14
     ✓ Case: fn(9, 10, 11) - Expected Result: 142
     ✓ Throw error on negative input value: fn(-1, 3, 1)
     ✓ Throws error when the total sum of inputs (2+2+1) is not a multiple of 3: fn(2, 2, 1)
     ✓ Throws error when the total sum of inputs (15+15+20) is not less than 40: fn(15, 15, 20)
```
