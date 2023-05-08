import {Vector} from "./vector";

let vectorsito:Vector = new Vector(5,10);
let v1: Vector = new Vector(5,10)
console.log(vectorsito)
console.log(v1)
vectorsito.print()
console.log(vectorsito.add(v1));
console.log(vectorsito.subs(v1))
console.log(vectorsito.mult(v1))
console.log(vectorsito.multNumber(4))
