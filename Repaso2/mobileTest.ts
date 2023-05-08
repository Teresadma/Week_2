import {Mobile} from "./mobile";

let iPhone1: Mobile = new Mobile ("iPhone de Teresa", "iPhone", "SE", "Negro", 450)
console.log(iPhone1.printAll())
let iPhone2: Mobile = new Mobile ("iPhone de Roberto", "iPhone", "13", "Negro", 750)
let iPhone3: Mobile = new Mobile ("iPhone de Leo", "iPhone", "12", "Negro", 650)
let myMobiles: string[] = [iPhone1.printAll(),iPhone2.printAll(),iPhone3.printAll()];
console.log(myMobiles)
