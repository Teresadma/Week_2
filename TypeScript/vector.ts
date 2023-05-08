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
        console.log(this.elements)
    }
    public add (v1:Vector):Vector{
        let suma: Vector = new Vector(this.elements.length,0);
        for (let i = 0; i < this.elements.length; i++){        
            suma.elements[i] = this.elements[i]+v1.elements[i];      
        } 
        return suma
    }
    public subs (v1: Vector): Vector{
        let resta: Vector = new Vector (this.elements.length,0) ;
        for (let i = 0; i < this.elements.length; i++){        
            resta.elements[i] = this.elements[i]-v1.elements[i];        
        } 
        return resta;
    }
    mult(v1:Vector):Vector{
        let multiplicacion: Vector = new Vector (this.elements.length,0);
        for (let i = 0; i < this.elements.length; i++){        
            multiplicacion.elements[i] = this.elements[i]*v1.elements[i]        
        }
        return multiplicacion;
    }
    multNumber(n: number):Vector{
        let multNumber: Vector = new Vector (this.elements.length,0);
        for (let i = 0; i < this.elements.length; i++){        
            multNumber.elements[i] = n*this.elements[i];      
        } 
        return multNumber;
    }
}
