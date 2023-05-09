import {Mobile} from "./mobile";

export class MobileCollection {
    //ATRIBUTOS
    private mobiles: Mobile[];
    private totalPrice: number;
    //CONSTRUCTOR
    constructor (mobiles: Mobile[]){
        this.mobiles = mobiles;
        this.totalPrice =  this.totalPriceCalculation();
       ;
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
    private totalPriceCalculation():number{
        let suma:number = 0;
        for (let i=0; i<this.mobiles.length;i++){
            suma = suma + this.mobiles[i].getPrice();
        }
        return suma;
    }
    public printCollection(){
        let cabecera: string = "This is all my mobiles: ";
        let moviles:string ="";
        for (let i=0; i<this.mobiles.length;i++){
            moviles += this.mobiles[i].printAll();
        }
        return cabecera + moviles + "Price overall: " + this.totalPriceCalculation();
    }
}
