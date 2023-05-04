class Persona {
    constructor(name, surname1, surname2, peso, altura){
        this.nombre = name
        this.apellido1 = surname1
        this.apellido2 = surname2
        this.anyoNacimiento
        this.peso = peso
        this.estatura = altura
        this.hobbies
    }
    //MÉTODOS
    calIMC(){
        return (this.peso/ (this.estatura * this.estatura)) *10000;
    }
    calEdad(currentYear){
        return currentYear - this.anyoNacimiento;
    }
    printAll(){
        return `Nombre - ${this.nombre},${"\n"}Primer apellido - ${this.apellido1},${"\n"}Segundo apellido - ${this.apellido2},${"\n"}Altura - ${this.estatura},${"\n"}Peso - ${this.peso},${"\n"}Año de nacimiento - ${this.anyoNacimiento}`

    }
    printHoobies(){
        return `Sus hoobies son ${this.hobbies}`

    }
}


let teresa = new Persona("Teresa","de Miguel","Alberti",54,167);
teresa.anyoNacimiento = 1997
//console.log(teresa);
console.log(teresa.calIMC());
console.log(teresa.printAll());

teresa.hobbies = ["leer","hacer ejercicio","pasear perritos"];
console.log(teresa.printHoobies())
module.exports = {Persona}


