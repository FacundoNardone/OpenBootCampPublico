let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(
      "Unidades actuales: " + unidades + " | Decenas actuales: " + decenas
    );
    unidades++;
    if (unidades === 10) {
      unidades = 0;
      break bucleUnidades;
    }
  }
  decenas++;
  if (decenas === 2) {
    console.log(
      "Unidades actuales: " + unidades + " | Decenas actuales: " + decenas
    );
    break bucleDecenas;
  }
}
