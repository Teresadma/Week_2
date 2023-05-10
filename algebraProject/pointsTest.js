"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var points_1 = require("./points");
var punto = new points_1.Points(2, 2);
// console.log(puntos.getX())
// console.log(puntos.getY())
// console.log(puntos.toString())
// console.log(puntos.setX(36))
// console.log(puntos.setY(56))
// console.log(puntos.toString())
// console.log(puntos.distanceToOrigin())
var punto2 = new points_1.Points(3, 12);
var punto1 = new points_1.Points(4, 22);
var puntosArr = [punto1, punto2];
// 
console.log(punto.calculateQuadrant());
console.log(punto.calculateNearest(puntosArr));
