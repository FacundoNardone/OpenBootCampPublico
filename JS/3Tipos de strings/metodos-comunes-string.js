//OBTENER LONG DE UN STRING
let pruebaLargo = "Hola Mundo";
console.log(pruebaLargo.length);

//OBTENER PARTES DE CADENAS DE CARACTERES
//Slice()
let pruebaSlice = "123456789";
console.log(pruebaSlice.slice(0, 4));

//SubString()
let prebaSubString = "123456789";
console.log(pruebaSlice.substring(0, 4));

//SubStr()
let pruebaSubStr = "123456789";
console.log(pruebaSlice.substr(4, 5));

//REEMPLAZAR PARTE DE UN STRING POR OTRO
//Solo reemplaza la primera que encuentra del tipo.
let cadena = "Mi nombre es Facundo Nardone";
console.log(cadena.replace("Facundo Nardone", "Tomas Birbe"));

//Remplaza todo que encuentra del tipo.
let cadenaLarga =
  "Mi nombre es Facundo Nardone, pero a veces me dicen que mi nombre no es es Facundo Nardone";
console.log(cadenaLarga.replace(/Facundo Nardone/g, "Tomas Birbe"));

//CONVIERTE EN MAYUSCULA O MINUSCULA
let mayuscula = "mayuscula";
let minuscula = "MINUSCULA";
// toLowerCase (MAYUSCULA)
console.log(mayuscula.toUpperCase());
// toUpperCase (minuscula)
console.log(minuscula.toLocaleLowerCase());

//CONCATENAR CADENAS DE 2 VARIABLES
let primerCadena = "Hola soy la primer cadena";
let segundaCadena = "yo soy la segunda cadena";

console.log(primerCadena.concat(" ", segundaCadena));
console.log(primerCadena + " " + segundaCadena);

//ELIMINAR ESPACIOS EN UN INPUT
let espaciosFinal = "Tengo espacios al final     ";
let espaciosPrincipio = "     Tengo espacios al final";
console.log(espaciosFinal.length);
console.log(espaciosFinal);
console.log(espaciosFinal.trim().length);
console.log(espaciosFinal.trim());
console.log(espaciosPrincipio.trimStart());

//OBTENER EL CARACTER EN X POSICIÓN
let obtenerCaracter = "Posición8";

console.log(obtenerCaracter.charAt(8));
console.log(obtenerCaracter[8]);

//OBTENER POSICIÓN DE UNA CADENA
let obtenerPosicion = "Hola soy Facundo Nardone";

console.log(obtenerPosicion.indexOf("Facundo"));
