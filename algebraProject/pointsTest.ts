import {Points} from "./points";

let puntos: Points = new Points (23,45)
// console.log(puntos.getX())
// console.log(puntos.getY())
// console.log(puntos.toString())
// console.log(puntos.setX(36))
// console.log(puntos.setY(56))
// console.log(puntos.toString())
// console.log(puntos.distanceToOrigin())
let puntos2: Points = new Points (47,64)
console.log(puntos.calculateDistance(puntos2))