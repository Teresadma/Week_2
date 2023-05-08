
function hasEven (myNums: number[]){
    let i = 0;
    while (i < myNums.length && myNums[i] % 2 != 0) {
        i++;
    }   
    let condicion = i < myNums.length;
    return condicion;
}
console.log(hasEven([1,3,5,8]));

function startWithM (myNames: string[]) {
    let i = 0;

    while (i < myNames.length && myNames[i].startsWith("M")){

    while (i < myNames.length){
        if(myNames[i].startsWith("M") == false){
            return false
        }

        i++;
    }
    let condicion2 = true;
    return condicion2;
}

console.log(startWithM(["Lucía","María"]))

console.log(startWithM(["María","María","Lucía"]))


// let palabra: string[] = ["Pepito","Lucia"]
// console.log(palabra[0][0].slice(0));
