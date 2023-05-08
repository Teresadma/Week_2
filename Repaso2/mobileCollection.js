"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    //CONSTRUCTOR
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice;
    }
    //MÉTODOS
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (newMobiles) {
        return this.mobiles = newMobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (newTotalPrice) {
        return this.totalPrice = newTotalPrice;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
