"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var iPhone1 = new mobile_1.Mobile("iPhone de Teresa", "iPhone", "SE", "Negro", 450);
console.log(iPhone1.printAll());
var iPhone2 = new mobile_1.Mobile("iPhone de Roberto", "iPhone", "13", "Negro", 750);
var iPhone3 = new mobile_1.Mobile("iPhone de Leo", "iPhone", "12", "Negro", 650);
var myMobiles = [iPhone1.printAll(), iPhone2.printAll(), iPhone3.printAll()];
console.log(myMobiles);
