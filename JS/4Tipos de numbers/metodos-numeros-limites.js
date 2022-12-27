//METODOS NUMBER y LIMITES
let a = 5;
let b = new Number(10);

//OPERADOR VALUEOF() - OBTENER VALORES NUMERICOS A PARTIR DE LITERALES
//El valueOf muestra el valor real convertido al tipo declarado en la variable:
console.log(b);
console.log(b + a);
console.log(typeof b);
console.log(b.valueOf());

//Ejemplo con un string
let cadena = new String("Hola mundo");
console.log(cadena);
console.log(cadena.valueOf());

//NAN (NOT A NUMBER) - INFINITY
let n = Number("Adios");
console.log(n);
//Muestra NaN porque "Adios" no es del tipo declarado en la variable.
console.log(isNaN(n)); //Valido si es NaN
//Infinity: Se muestra cuando el valor de la variable es demaciado grande.
let inf = 19;
let divisor = 0;
console.log(inf / divisor); //Infinity

//CONVERTIR STRING A NUMERO - PARSEINT / NUMBER / PARSEFLOAT
let numeroS = "5.89";
let numeroE = 99;
console.log(typeof numeroS);
console.log(numeroS + numeroE); //Error de concepto: se muestra la concatenacion de un string con number
console.log(Number(numeroS) + numeroE);
//parseInt
console.log(typeof parseInt(numeroS));
console.log(parseInt(numeroS));
//parseFloat
console.log(typeof parseFloat(numeroS));
console.log(parseFloat(numeroS));

//NUMEROS HEXADECIMALES
let hexa = "7b";
console.log(parseFloat(hexa));
console.log(parseInt(hexa));

//OBTENER VALORES MAX Y MIN EN X CANTIDAD DE BITS

let min_precision = Number.EPSILON;
console.log(min_precision);

let min_valor = Number.MIN_VALUE;
console.log(min_valor);

let max_valor = Number.MAX_VALUE;
console.log(max_valor);
