import {Mobile} from "./mobile";
import {MobileCollection} from "./mobileCollection";

let iPhone1: Mobile = new Mobile ("iPhone de Teresa", "iPhone", "SE", "Negro", 450)
// console.log(iPhone1.printAll())
let iPhone2: Mobile = new Mobile ("iPhone de Roberto", "iPhone", "13", "Negro", 750)
let iPhone3: Mobile = new Mobile ("iPhone de Leo", "iPhone", "12", "Negro", 650)
let iPhone4: Mobile = new Mobile ("iPhone de Grego", "iPhone", "10", "Negro", 550)

let myMobiles: Mobile[] = [iPhone1,iPhone2,iPhone3,iPhone4];
let collection:MobileCollection = new MobileCollection (myMobiles)
// console.log(collection)
// console.log(collection.totalPriceCalculation())
console.log(collection.printCollection())
