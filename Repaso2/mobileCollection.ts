import {Mobile} from "./mobile";

export class MobileCollection {
    //ATRIBUTOS
    private mobiles: object[];
    private totalPrice: number;
    //CONSTRUCTOR
    constructor (mobiles: object[]){
        this.mobiles = mobiles;
        this.totalPrice;
    }
    //MÉTODOS
    public getMobiles(){
        return this.mobiles;
    }
    public setMobiles(newMobiles: object[]){
        return this.mobiles = newMobiles;
    }
    public getTotalPrice(){
        return this.totalPrice;
    }
    public setTotalPrice(newTotalPrice:number){
        return this.totalPrice = newTotalPrice;
    }
}