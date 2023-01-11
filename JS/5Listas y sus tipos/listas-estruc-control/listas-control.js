arrayFrutas = 
[
    {nombre:"Naranja", cantidad:"12", precioKg: 12.5 },
    {nombre:"Manzana", cantidad:"3", precioKg: 21.0 },
    {nombre:"Pera", cantidad:"5", precioKg: 32.0 },
    {nombre:"Mandarina", cantidad:"21", precioKg: 14.5 },
    {nombre:"Sandia", cantidad:"6", precioKg: 9.5 },
    {nombre:"Durazno", cantidad:"5", precioKg: 4.0 },
    {nombre:"Banana", cantidad:"31", precioKg: 17.5 }
]


//ForEach
arrayFrutas.forEach( i => {
if (i.nombre === "Manzana") {
    console.log ("El precio del total es: " + i.cantidad * i.precioKg + "$")
}
})

//Acortado con variable arreglo con FIND
const arreglo = arrayFrutas.find (o => o.nombre === "Manzana")
console.log ("El precio del total es: " + arreglo.cantidad * arreglo.precioKg + "$")

//Acortado con variable atributo del arreglo FIND

const {cantidad} = arrayFrutas.find(n => n.nombre === "Manzana")
console.log(cantidad)