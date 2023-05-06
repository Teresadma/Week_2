import {Book} from "./book";
import {Library} from "./library";

let libro1:Book = new Book("Introduccion a JavaScript", 233, "23444333-BC23333", "Joseph Smith", "Now Editions");
let libro2:Book = new Book("Introduccion a TypeScript", 345, "23456dgf64", "Clara", "MallorCamp");
let libro3:Book = new Book("Introduccion a maquetación", 124, "23444kfo3849", "Clara", "UPM");

let biblioteca:Library = new Library([libro1,libro2,libro3],"Calle Bravo Murillo","Leonardo")
// console.log(biblioteca.getNumberOfBooks())
// console.log(biblioteca.findByAuthor("Clara"))

console.log(biblioteca.toString())