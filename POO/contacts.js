let myPerson = require ("./person");
class Contacts {
    constructor (){
        this.arrayPersonas = [];
    }
    //METODOS
    printPersons (){
        return this.arrayPersonas
    }
}
module.exports = {Contacts}
