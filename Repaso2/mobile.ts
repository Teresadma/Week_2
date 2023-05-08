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
    public getName(){
        return this.name;
    }
    public setName(newName:string){
        return this.name = newName;
    }
    public getTrademark(){
        return this.trademark;
    }
    public setTrademark(newTrademark:string){
        return this.trademark = newTrademark;
    }
    public getModel(){
        return this.model;
    }
    public setModel(newModel:string){
        return this.model = newModel;
    }
    public getColor(){
        return this.color;
    }
    public setColor(newColor:string){
        return this.color = newColor;
    }
    public getPrice(){
        return this.price;
    }
    public setPrice(newPrice:number){
        return this.price = newPrice;
    }
    public printAll():string{
        return `${"\n"}The characteristics of the mobile are: ${"\n"}- Name: ${this.name} ${"\n"}- Trademark: ${this.trademark}${"\n"}- Model: ${this.model}${"\n"}- Color: ${this.color}${"\n"}- Price: ${this.price}${"\n"}`
    }
}