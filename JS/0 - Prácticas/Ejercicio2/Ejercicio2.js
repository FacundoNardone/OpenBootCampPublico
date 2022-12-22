/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

let listaPersonal = [
    "Facundo Nardone",
    25,
    true,
    new Date (1997,04,01),
    [
        titulo = "The Hobbit",
        autor = "J. R. R. Tolkien",
        fecha = new Date (1937,01,01),
        url = "https://es.wikipedia.org/wiki/El_hobbit"
    ] 
]

console.log(listaPersonal);




