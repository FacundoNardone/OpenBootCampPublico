//EJERCICIO 5: Numeros en JS

// Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 173;
console.log(alturaCm);

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMt = 1.73;
console.log(alturaMt);

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 68.7;
console.log(pesoKg);

// Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(Math.ceil(alturaMt));

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(Math.floor(alturaMt));

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor = Number.MAX_VALUE;

if (max_valor + 1 == max_valor) {
  console.log("Es el mayor numero obtenible");
}
