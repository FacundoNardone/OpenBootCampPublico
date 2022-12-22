/* Este archivo debe calcular el factorial de 10 utilizando un bucle while */

let varr = 10;
let r = 1;
let i = 1;
console.log("El Factorial de " + varr + " es: ");
while (varr != 0) {
  r = r * i;
  i++;
  varr--;
}
console.log(r);
