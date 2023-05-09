"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    //CONSTRUCTOR
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    //MÉTODOS
    Triangle.prototype.calculateLengthSide = function () {
        var distance12 = this.vertex1.calculateDistance(this.vertex2);
        var distance23 = this.vertex2.calculateDistance(this.vertex3);
        var distance31 = this.vertex3.calculateDistance(this.vertex1);
        var distanceVertex = [distance12, distance23, distance31];
        return distanceVertex;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
