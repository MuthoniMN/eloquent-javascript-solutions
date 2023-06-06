function countBs(str){
    let countB = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] === "B"){
            countB++
        }
    }

    return countB
}

function countChar(str, char){
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] === char){
            count++
        }
    }
    return count
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4