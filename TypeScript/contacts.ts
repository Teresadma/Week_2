import {Person} from "./person";
export class Contacts {
    //PARAMETROS
    public people: Person[];

    //CONSTRUCTOR
    constructor (){
        this.people =[]
    }
    //METODOS
    printCalendar(){
        console.log(this.people)
    }
}