export class Mobile {
    //ATRIBUTOS
    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;
    //CONSTRUCTOR
    constructor (name: string, trademark: string, model: string, color: string, price: number){
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    //MÉTODOS
    public getName(): string{
        return this.name;
    }
    public setName(newName:string):void{
        this.name = newName;
    }
    public getTrademark(): string{
        return this.trademark;
    }
    public setTrademark(newTrademark:string):void{
        this.trademark = newTrademark;
    }
    public getModel():string{
        return this.model;
    }
    public setModel(newModel:string):void{
        this.model = newModel;
    }
    public getColor():string{
        return this.color;
    }
    public setColor(newColor:string):void{
        this.color = newColor;
    }
    public getPrice():number{
        return this.price;
    }
    public setPrice(newPrice:number):void{
        this.price = newPrice;
    }
    public printAll():string{
        return `${"\n"}The characteristics of the mobile are: ${"\n"}- Name: ${this.name} ${"\n"}- Trademark: ${this.trademark}${"\n"}- Model: ${this.model}${"\n"}- Color: ${this.color}${"\n"}- Price: ${this.price}${"\n"}`
    }
}