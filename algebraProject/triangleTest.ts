import {Points} from "./points";
import {Triangle} from "./triangle";

let vertex1: Points = new Points (45,30)
let vertex2: Points = new Points (20,55)
let vertex3: Points = new Points (75,30)
let equilatero:Triangle = new Triangle(vertex1,vertex2,vertex3)
console.log(equilatero)
console.log(equilatero.calculateLengthSide())