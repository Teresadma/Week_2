import {Points} from "./points";

export class Triangle{
    //ATRIBUTOS
    private vertex1: Points;
    private vertex2: Points;
    private vertex3: Points;
    //CONSTRUCTOR
    constructor (vertex1:Points, vertex2: Points, vertex3: Points){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    //MÉTODOS
    public calculateLengthSide():number[]{
        let distance12: number = this.vertex1.calculateDistance(this.vertex2)
        let distance23: number = this.vertex2.calculateDistance(this.vertex3)
        let distance31: number = this.vertex3.calculateDistance(this.vertex1)
        let distanceVertex:number[]=[distance12,distance23,distance31]
        return distanceVertex
    }
}