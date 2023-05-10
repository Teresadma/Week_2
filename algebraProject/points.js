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
        this.x = newX;
    };
    Points.prototype.getY = function () {
        return this.x;
    };
    Points.prototype.setY = function (newY) {
        this.y = newY;
    };
    Points.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Points.prototype.distanceToOrigin = function () {
        var distancia;
        distancia = Math.sqrt((Math.pow(this.x, 2) + (Math.pow(this.y, 2))));
        return distancia;
    };
    Points.prototype.calculateDistance = function (anotherPoint) {
        var distancia;
        distancia = Math.sqrt((Math.pow((this.x - anotherPoint.x), 2) + (Math.pow((this.y - anotherPoint.y), 2))));
        return distancia;
    };
    Points.prototype.calculateQuadrant = function () {
        var respuesta = 0;
        if (this.x == 0 || this.y == 0) {
            respuesta = 0;
        }
        else if (this.x >= 0 && this.y >= 0) {
            respuesta = 1;
        }
        else if (this.x <= 0 && this.y >= 0) {
            respuesta = 2;
        }
        else if (this.x <= 0 && this.y <= 0) {
            respuesta = 3;
        }
        else if (this.x >= 0 && this.y <= 0) {
            respuesta = 4;
        }
        return respuesta;
    };
    Points.prototype.calculateNearest = function (points) {
        var minDistance = 0;
        var nearestPoint = new Points(0, 0);
        if (points != null && points.length > 0) {
            minDistance = this.calculateDistance(points[0]);
            nearestPoint = points[0];
        }
        var distance = 0;
        for (var i = 0; i < points.length; i++) {
            distance = this.calculateDistance(points[i]);
            if (distance < minDistance) {
                minDistance = distance;
                nearestPoint = points[i];
            }
        }
        return nearestPoint;
    };
    return Points;
}());
exports.Points = Points;
