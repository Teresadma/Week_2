//HOROSCOPO
// let zodiac:string ="HOROSCOPO"
// console.log(zodiac)
function horoscopo (dia:number,mes:number) {
    if ((21 <= dia && dia <= 31 && mes == 3)||(1 <= dia && dia <= 19 && mes == 4)){
        return "Tu signo zoodiacal es Aries";
    } else if ((20 <= dia && dia <= 30 && mes == 4)||(1 <= dia && dia <= 20 && mes == 5)){
        return "Tu signo zoodiacal es Tauro";
    } else if ((21 <= dia && dia <= 31 && mes == 5)||(1<= dia && dia <= 20 && mes == 6)){
        return "Tu signo zoodiacal es Géminis";
    } else if ((21 <= dia && dia <= 30 && mes == 6)||(1 <= dia && dia <= 22 && mes == 7)){
        return "Tu signo zoodiacal es Cáncer";
    } else if ((23 <= dia && dia <= 31 && mes == 7)||(1 <= dia && dia <= 22 && mes == 8)){
        return "Tu signo zoodiacal es Leo";
    } else if ((21 <= dia && dia <= 30 && mes == 8)||(1 <= dia && dia <= 22 && mes == 9)){
        return "Tu signo zoodiacal es Virgo";
    } else if ((23 <= dia && dia <= 31 && mes == 9)||(1 <= dia && dia <= 22 && mes == 10)){
        return "Tu signo zoodiacal es Libra";
     }else if ((23 <= dia && dia <= 30 && mes == 11)||(1 <= dia && dia <= 21 && mes == 12)){
        return "Tu signo zoodiacal es Escorpio";
    } else if ((22 <= dia && dia <= 31 && mes == 12)||(1 <= dia && dia <= 21 && mes == 1)){
        return "Tu signo zoodiacal es Sagitario";
    } else if ((22 <= dia && dia <= 31 && mes == 1)||(1 <= dia && dia <= 19 && mes == 2)){
        return "Tu signo zoodiacal es Capricornio";
    } else if ((22 <= dia && dia <= 28 && mes == 2)||(1 <= dia && dia <= 18 && mes == 3)){
        return "Tu signo zoodiacal es Acuario";
    } else if ((19 <= dia && dia <= 31 && mes == 1)||(1 <= dia && dia <= 20 && mes == 2)){
        return "Tu signo zoodiacal es Piscis";
    }
}
// console.log(horoscopo(5,5))

// let paises: string = "PROCEDIMIENTO PAÍSES";
// console.log(paises);

const continente = (pais:string) => {
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
// console.log(continente("Italia"));

// let pares:string ="PARES E IMPARES";
// console.log(pares)

export const isEven = (number: number) => {
    if (number % 2 == 0){
        return "El número " + number + " es par";
    } else {
        return "El número " + number +  " es impar";
    }
}
// console.log(isEven(15))