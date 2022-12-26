//METODOS DE CADENAS DE TEXTO

//CUANTAS VECES APARECE UN STRING
let textoLargo =
  "Esto es un texto largo que es de lo mejor que es para encontras es una cadena es esperado";

console.log(textoLargo.match("es"));
console.log(textoLargo.match(/es/g));
console.log(textoLargo.includes("terremoto"));

//SI EL TETO ARRANCA CON UN STRING ESPECIFICO
console.log(textoLargo.startsWith("Esto"));
console.log(textoLargo.startsWith("Curso"));

//SI EL TETO TERMINA CON UN STRING ESPECIFICO
console.log(textoLargo.endsWith("esperado"));
console.log(textoLargo.endsWith("Curso"));
