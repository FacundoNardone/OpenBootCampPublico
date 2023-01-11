//LISTAS (ARRAY, ARREGLOS, ETC)
//DECLARACIÓN
let arregloUno = Array(1, 2, 3, 4);
console.log(arregloUno);
let arregloDos = [1, 2, 3, 4];
console.log(arregloDos);

//ADMISIONES
let ocupacion = {
  trabaja: true,
  puesto: "Analista",
  horasDiarias: 9,
};
arregloUno = ["Facundo", "Nardone", 25, ocupacion];

//MOSTRAR EN PANTALLA
//Todo el Array
console.log(arregloUno);
//Slot del Array
console.log(arregloUno[3]);

//INTRODUCIR NUEVOS VALORES
//.push() y .unshift() => Mutan el valor del Array
//.push(): Agrega valores al final del arreglo.
arregloUno.push(3, new Date("1997-04-01"), "Push FIN");
console.log(arregloUno);
//.unshift(): Agrega valores al principio del arreglo.
arregloUno.unshift(3, new Date("1997-04-01"), "Push FIN");
console.log(arregloUno);

//ELIMINAR VALORES EXISTENTES
//.pop() y .shift() => Mutan el valor del Array
//.pop(): Quita valores al final
console.log(arregloDos);
arregloDos.pop();
console.log(arregloDos);
//.pop(): Quita valores al principio
console.log(arregloDos);
arregloDos.shift();
console.log(arregloDos);

//.SPLICE = Metodo para eliminar, modificar, añadir
//Eliminar valores
let arraySplice = [1, 2, 3, 4, 5, 6];
arraySplice.splice(0, 2); //Elimino los numeros 1 y 2
console.log(arraySplice);
arraySplice.splice(2, 2); //Elimino los numeros 5 y 6
console.log(arraySplice);

//Agregar valores
arraySplice.splice(0, 0, "Numeros", 1, 2); //Agrego frase y numeros faltantes
console.log(arraySplice);

//Modificar valores
arraySplice.splice(0, 1, "Cambio"); //Agrego frase y numeros faltantes
console.log(arraySplice);
