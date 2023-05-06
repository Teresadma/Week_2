import {Vector} from "./vector";

let vectorsito:Vector = new Vector(5,10);
let v1 = [1,2,3,4,5]
console.log(vectorsito.print())
console.log(vectorsito.add(v1));
console.log(vectorsito.subs(v1))
console.log(vectorsito.mult(v1))
console.log(vectorsito.multNumber(4))
