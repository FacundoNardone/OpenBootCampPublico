/* Este archivo debe calcular el factorial de 10 utilizando un solo bucle for*/

let varr = 10;
let N = 1;

for (let i = varr; i > 0; i--) {
  N = N * i;
}

console.log("El Factorial de " + varr + " es: " + N);
