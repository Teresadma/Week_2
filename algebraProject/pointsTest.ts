import {Points} from "./points";

let punto: Points = new Points (2,2)
// console.log(puntos.getX())
// console.log(puntos.getY())
// console.log(puntos.toString())
// console.log(puntos.setX(36))
// console.log(puntos.setY(56))
// console.log(puntos.toString())
// console.log(puntos.distanceToOrigin())
let punto2: Points = new Points (3,12)
let punto1: Points = new Points (4,22)
let puntosArr: Points[] = [punto1,punto2]
// 
console.log(punto.calculateQuadrant())

console.log(punto.calculateNearest(puntosArr))