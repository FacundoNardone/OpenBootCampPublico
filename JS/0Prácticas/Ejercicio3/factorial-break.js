/* Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break */

let varr = 10;
let r = 1;
let i = 1;

while (varr != 0) {
  r = r * i;
  i++;
  varr--;
  if (i == 10) {
    console.log("El Factorial de 10 es: " + r);
    break;
  }
}
