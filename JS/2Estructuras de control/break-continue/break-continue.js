let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 0; i <= lista.length; i++) {
  if (i === 3) {
    break;
  }
  console.log("El valor es:" + i);
}

console.log("Fin BREAK, valor final I =" + i);
let u = "VACIO";

for (i = 0; i <= lista.length; i++) {
  if (i === 3) {
    u = i;
    continue;
  }
  console.log("El valor de I es: " + i + " se salteo: " + u);
}
console.log("Fin CONTINUE");
