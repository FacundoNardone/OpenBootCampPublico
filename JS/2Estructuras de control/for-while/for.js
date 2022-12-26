console.log(
  "Estructuras de Control - FOR: - Declaro Array - FOR Comun - Recorre arreglo segun valor de I"
);

arregloFrutas = [
  [1, "Banana", "Manzana", "Pera"],
  [2, "Sandia", "Coco", "Naranja"],
  [3, "Mandarina", "Frutilla", "Mango"],
];
for (let i = 0; i < arregloFrutas.length; i++) {
  const element = arregloFrutas[i];
  console.log(arregloFrutas[i]);
}

console.log(
  "Estructuras de Control - FOREACH: Se llama desde el Array a la funcion FOREACH"
);

let arregloRegalos = [
  [1, "Perfume"],
  [2, "Medias"],
  [3, "Remera"],
];

/* Hace lo mismo que la de abajo, asigna una funcion a una variable*/
const listarRegalo = (regalo) => {
  console.log(regalo);
};

/* Hace lo mismo que la de arriba, funcion comun*/
function mostrarRegalo(regalo) {
  console.log(regalo);
}
arregloRegalos.forEach(mostrarRegalo);

/* FOREACH con Funcion Anonima (Sin Nombre), muere con el forEach porque no se llama desde otro lado EJ: ()=>{} */

console.log(
  "Estructuras de Control - FOREACH Func Anonima: Se le pasa una funcion anonima como parametro"
);
let arregloTareas = [
  [1, "Limpiar"],
  [2, "Cocinar"],
  [3, "Lavar"],
  [4, "Comprar"],
  [5, "Estudiar"],
];
arregloTareas.forEach((tarea) => {
  console.log(tarea);
});

console.log(mostrarRegalo("Medias"));

console.log("Sin parentesis:");
console.log(mostrarRegalo);

console.log(
    "Estructuras de Control - WHILE: - Se repite hasta que se cumpla la condición de un case"
  );

