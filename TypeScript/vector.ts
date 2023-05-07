export class Vector {
    //PARAMETROS
    private elements: number[];
    //CONSTRUCTOR
    constructor (n:number,k:number){        
        this.elements = [];
        for (let i=0; i<n; i++){
            this.elements.push(Math.round(Math.random()*k))
        }
    }
    //METODOS
    public print(){
        return this.elements
    }
    public add (v1:number[]):number[]{
        let suma: number[] = [];
        for (let i = 0; i < this.elements.length; i++){        
            suma.push(this.elements[i]+v1[i])        
        } 
        return suma;
    }
    public subs (v1: number[]): number[]{
        let resta: number[] = [];
        for (let i = 0; i < this.elements.length; i++){        
            resta.push(this.elements[i]-v1[i])        
        } 
        return resta;
    }
    mult(v1:number[]):number[]{
        let multiplicacion:number[] = [];
        for (let i = 0; i < this.elements.length; i++){        
            multiplicacion.push(this.elements[i]*v1[i])        
        }
        return multiplicacion;
    }
    multNumber(n:number):number[]{
        let multNumber: number[] = [];
        for (let i = 0; i < this.elements.length; i++){        
            multNumber.push(n*this.elements[i])        
        } 
        return multNumber;
    }

}
