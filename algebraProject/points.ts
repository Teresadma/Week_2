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
        this.x = newX;
    }
        public getY(){
        return this.x;
    }
    public setY(newY: number){
        this.y = newY;
    }
    public toString(){
        return `(${this.x}, ${this.y})`
    }
    public distanceToOrigin():number {
        let distancia:number;
        distancia = Math.sqrt((Math.pow(this.x,2)+(Math.pow(this.y,2))))
        return distancia;
    }
    public calculateDistance(anotherPoint:Points):number{
        let distancia:number;
        distancia = Math.sqrt((Math.pow((this.x-anotherPoint.x),2)+(Math.pow((this.y-anotherPoint.y),2))))
        return distancia;
    }

}
