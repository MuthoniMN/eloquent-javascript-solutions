function reverseArray(array) {
    let reversedArray = [] 

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push( array[i]);
    }

    return reversedArray
}
console.log(reverseArray(["Myself", "love", "I"])); 

function reverseArrayInPlace(array) {
    for (let i = array.length - 1; i >= 0; i--) {
       array.push(array[i])
    }
    let leng = (array.length/2) - 1
    for (let index = 0; index <= leng ; index++) {
        array.shift()
    }
    return array
}

console.log(reverseArrayInPlace(["I", "am", "the", "greatest", "alive"])); 
console.log(reverseArrayInPlace(["Myself", "love", "I"])); 

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]