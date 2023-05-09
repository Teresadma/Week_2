"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    //CONSTRUCTOR
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    //MÉTODOS
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (newName) {
        return this.name = newName;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        return this.trademark = newTrademark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (newModel) {
        return this.model = newModel;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (newColor) {
        return this.color = newColor;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        return this.price = newPrice;
    };
    Mobile.prototype.printAll = function () {
        return "".concat("\n", "The characteristics of the mobile are: ").concat("\n", "- Name: ").concat(this.name, " ").concat("\n", "- Trademark: ").concat(this.trademark).concat("\n", "- Model: ").concat(this.model).concat("\n", "- Color: ").concat(this.color).concat("\n", "- Price: ").concat(this.price).concat("\n");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
