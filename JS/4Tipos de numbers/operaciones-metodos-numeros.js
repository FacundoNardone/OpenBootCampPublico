//PRINCIPALES OPERACIONES ARITMETICAS

let a = 3;
let b = 7;

//Sumas:
console.log(a + b);
//Restas:
console.log(a - b);
//Division:
console.log(a / b);
//Multiplicacion:
console.log(a * b);

//REPRESENTACIÓN DE LOS NUMEROS EN CADENAS DE TEXTO
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

//REDONDEO DE DECIMALES
let c = 3;
let d = 9.4123123;
let e = 21231;
let f = 1234912831923;
console.log(d);

//toFixed(): Muestra la cantidad que le pasemos (X) de decimales
console.log(d.toFixed(3));
console.log(c.toFixed(2));

//toPrecision(): Muestra la cantidad que le pasemos (X) de cifas significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));
