"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var points_1 = require("./points");
var puntos = new points_1.Points(-23, 45);
// console.log(puntos.getX())
// console.log(puntos.getY())
// console.log(puntos.toString())
// console.log(puntos.setX(36))
// console.log(puntos.setY(56))
// console.log(puntos.toString())
// console.log(puntos.distanceToOrigin())
var puntos2 = new points_1.Points(1, 1);
var puntosArr = [puntos, puntos2];
// 
console.log(puntos.calculateQuadrant());
console.log(puntos.calculateNearest(puntosArr));
