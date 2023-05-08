let myPerson = require ("./person");
let myContacts = require("./contacts");

let clubDelLibro = new myContacts.Contacts();
let jose = new myPerson.Persona("Jose","Jimenez","Clar",75,180)
// console.log(jose)
let pepe = new myPerson.Persona("Pepe","de Miguel","Alberti",75,180)
let paco = new myPerson.Persona("Paco","Lopez","Rodriguez",75,180)

clubDelLibro.arrayPersonas =[[jose,pepe,paco]]
console.log(clubDelLibro.arrayPersonas)