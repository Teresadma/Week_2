"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Points = void 0;
var Points = /** @class */ (function () {
    //CONSTRUCTOR
    function Points(x, y) {
        this.x = x;
        this.y = y;
    }
    //MÉTODOS
    Points.prototype.getX = function () {
        return this.x;
    };
    Points.prototype.setX = function (newX) {
        return this.x = newX;
    };
    Points.prototype.getY = function () {
        return this.x;
    };
    Points.prototype.setY = function (newY) {
        return this.y = newY;
    };
    Points.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    return Points;
}());
exports.Points = Points;
var puntos = new Points(23, 45);
console.log(puntos.toString());
