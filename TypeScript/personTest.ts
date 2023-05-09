import {Person} from "./person";
let pepe:Person = new Person("Pepe",26,"Calle Hostalets");
console.log(pepe)
console.log(pepe.yearOfBirth(2023));
console.log(pepe.printName())
console.log(pepe.getAddress())
pepe.setAdrress("Bravo Murillo");
