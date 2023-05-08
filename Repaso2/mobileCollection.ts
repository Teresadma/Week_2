import {Mobile} from "./mobile";

export class MobileCollection {
    //ATRIBUTOS
    private mobiles: Mobile[];
    private totalPrice: number;
    //CONSTRUCTOR
    constructor (mobiles: Mobile[]){
        this.mobiles = mobiles;
        this.totalPrice;
    }
    //MÉTODOS
    public getMobiles(): Mobile[]{
        return this.mobiles;
    }
    public setMobiles(newMobiles: Mobile[]): void{
        this.mobiles = newMobiles;
    }
    public getTotalPrice():number{
        return this.totalPrice;
    }
    public setTotalPrice(newTotalPrice:number): void{
        this.totalPrice = newTotalPrice;
    }
}