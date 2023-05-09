"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var mobileCollection_1 = require("./mobileCollection");
var iPhone1 = new mobile_1.Mobile("iPhone de Teresa", "iPhone", "SE", "Negro", 450);
// console.log(iPhone1.printAll())
var iPhone2 = new mobile_1.Mobile("iPhone de Roberto", "iPhone", "13", "Negro", 750);
var iPhone3 = new mobile_1.Mobile("iPhone de Leo", "iPhone", "12", "Negro", 650);
var iPhone4 = new mobile_1.Mobile("iPhone de Grego", "iPhone", "10", "Negro", 550);
var iPhone5 = new mobile_1.Mobile("iPhone de Lucía", "iPhone", "8", "Negro", 350);
var myMobiles = [iPhone1, iPhone2, iPhone3, iPhone4];
var myMobiles2 = [iPhone2, iPhone5];
var collection = new mobileCollection_1.MobileCollection(myMobiles);
console.log(collection.getMobiles());
console.log(collection.setMobiles(myMobiles2));
// console.log(collection)
