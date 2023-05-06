import {Contacts} from "./contacts";
import {Person} from "./person"
let jose = new Person("Jose",56,"Calle Almortas");
let loli = new Person("Loli",12,"Paseo Mallorca");
let nano = new Person("Nano",43,"Calle Dulcinea");
let agenda = new Contacts();

console.log(agenda.people);
