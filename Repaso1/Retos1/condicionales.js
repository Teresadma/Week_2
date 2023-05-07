//HOROSCOPO
let zodiac ="HOROSCOPO"
console.log(zodiac)
function horoscopo(dia,mes){
    if ((dia >= 21 && mes == 3)||(dia <= 19 && mes == 4)){
        return "Tu signo zoodiacal es Aries";
    } else if ((dia >= 20 && mes == 4)||(dia <= 20 && mes == 5)){
        return "Tu signo zoodiacal es Tauro";
    } else if ((dia >= 21 && mes == 5)||(dia <= 20 && mes == 6)){
        return "Tu signo zoodiacal es Géminis";
    } else if ((dia >= 21 && mes == 6)||(dia <= 22 && mes == 7)){
        return "Tu signo zoodiacal es Cáncer";
    } else if ((dia >= 23 && mes == 7)||(dia <= 22 && mes == 8)){
        return "Tu signo zoodiacal es Leo";
    } else if ((dia >= 23 && mes == 8)||(dia <= 22 && mes == 9)){
        return "Tu signo zoodiacal es Virgo";
    } else if ((dia >= 23 && mes == 9)||(dia <= 22 && mes == 10)){
        return "Tu signo zoodiacal es Libra";
     }else if ((dia >= 23 && mes == 11)||(dia <= 21 && mes == 12)){
        return "Tu signo zoodiacal es Escorpio";
    } else if ((dia >= 22 && mes == 12)||(dia <= 21 && mes == 1)){
        return "Tu signo zoodiacal es Sagitario";
    } else if ((dia >= 22 && mes == 1)||(dia <= 19 && mes == 2)){
        return "Tu signo zoodiacal es Capricornio";
    } else if ((dia >= 20 && mes == 2)||(dia <= 18 && mes == 3)){
        return "Tu signo zoodiacal es Acuario";
    } else if ((dia >= 29 && mes == 1)||(dia <= 20 && mes == 2)){
        return "Tu signo zoodiacal es Piscis";
    }
}
console.log(horoscopo(5,5))

let paises = "PROCEDIMIENTO PAÍSES";
console.log(paises);

const continente = (pais) => {
    if (pais == "Francia" || pais == "Italia" || pais == "Suecia" || pais == "Portugal" || pais == "Grecia"){
        console.log("Estás en Europa");
    } else if (pais == "Costa Rica" || pais == "EEUU" || pais == "Colombia" || pais == "Mexico" || pais == "Argentina"){
        console.log("Estás en  América");     
    } else if (pais == "India" || pais == "Japón" || pais == "China" || pais == "Nepal" || pais == "Singapur"){
        console.log("Estás en Asia");
    } else if (pais == "Sudáfrica" || pais == "Marruecos" || pais == "Túnez" || pais == "Senegal" || pais == "Tanzania"){
        console.log("Estás en África");
    } else if (pais == "Australia" || pais == "Nueva Zelanda" || pais == "Papua Nueva Guinea"){
        console.log("Estás en Oceanía");
    }
    console.log(pais)
}
console.log(continente("Italia"));

const isEven = (number) => {
    if (number % 2 == 0){
        return "El número " + number + " es par";
    } else {
        return "El número " + number +  " es impar";
    }
}
console.log(isEven(15))