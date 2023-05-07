function evenNumbers (n: number){
    let vector: number [] = [];
    for (let i = 0; i < n; i++){
        if (i % 2 == 0){
            vector.push(i);
        }
    }
    return vector
}
// console.log(evenNumbers(10))

function myRevert (myArr: number[]){
    let myArrRevertido: number [] = [];
    for (let i = 0; i <= myArr.length; i++) {
        myArrRevertido[i] = myArr[myArr.length - i];
    }
    return myArrRevertido;
}
// console.log(myRevert([1,2,3,4,5]))

function isRainbow (colors: string[]) {
    let colores: string[] = [];
    for (let i = 0; i < colors.length; i++){
        if (colors[i] == "rojo" || colors[i] == "amarillo" || colors[i] == "naranja" || colors[i] == "verde" || colors[i] == "añil" || colors[i] == "azul" || colors[i] == "violeta"){
            colores.push(colors[i] + ": Forma parte de los colores del arcoíris");
        } else {
            colores.push(colors[i] + ": No forma parte de los colores del arcoíris");
        }
    }
    return colores;
}
// console.log(isRainbow(["azul","verde","rosa"]))


export function add (myWords: string[]) {
    let suma:number = 0;
    for (let i = 0; i < myWords.length; i++){
        suma += myWords[i].length;
    }
    return suma
}

// console.log(add(["hola","feo","caca"]))




