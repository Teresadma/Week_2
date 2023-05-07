export class Person {
    //PARAMETROS
    public name: string;
    public age: number;
    private address: string;

    constructor (name:string,age:number,address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //METODOS
    public printName(): string{
        return this.name;
    }
    public yearOfBirth (currentYear: number) {
        return currentYear - this.age;
    }
    public setAdrress(addressNueva:string){
        return this.address = addressNueva;
    }
    public getAddress():string{
        return this.address
    }
}
