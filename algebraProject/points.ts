export class Points {
    //ATRIBUTOS
    private x: number;
    private y:number;
    //CONSTRUCTOR
    constructor (x:number,y:number){
        this.x = x;
        this.y = y;
    }
    //MÉTODOS
    public getX(){
        return this.x;
    }
    public setX(newX: number){
        return this.x = newX;
    }
        public getY(){
        return this.x;
    }
    public setY(newY: number){
        return this.y = newY;
    }
    public toString(){
        return `(${this.x}, ${this.y})`
    }
}
let puntos: Points = new Points (23,45)
console.log(puntos.toString())