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
    //SI PONGO TIPO NUMBER ME DA ERROR PORQUE LOS RETURN ESTÁN DENTRO DEL IF
    public calculateQuadrant(){
        if (this.x == 0 || this.y == 0){
            return 0;
        }else if (this.x >= 0 && this.y >= 0){
            return 1;
        }else if (this.x <= 0 && this.y >= 0){
            return 2;
        }else if (this.x <= 0 && this.y <= 0){
            return 3;
        }else if (this.x >= 0 && this.y <= 0){
            return 4;
        }
    }
    // public calculateNearest(points: Points[]): Points{
    //     let minDistance:number = 0;
    //     let nearestPoint: Points;
    //     if (points.length > 0){
    //         minDistance = this.calculateDistance(points[0]);
    //         nearestPoint = points[0];
    //     }
    //     let distance:number = 0;
    //     for (let i=0; i < points.length; i++){
    //         distance = this.calculateDistance(points[i]);
    //         if (distance < minDistance){
    //             minDistance = distance;
    //             nearestPoint = points[i]
    //         }
    //     }
    //     return nearestPoint;
    }


