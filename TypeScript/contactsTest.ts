import {Contacts} from "./contacts";
import {Person} from "./person"
let jose: Person = new Person("Jose",56,"Calle Almortas");
let loli: Person = new Person("Loli",12,"Paseo Mallorca");
let nano:Person = new Person("Nano",43,"Calle Dulcinea");

let agenda = new Contacts();
agenda.people = [jose,loli,nano]
console.log(agenda.people);
