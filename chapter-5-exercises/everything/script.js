function every(arr, test) {
    let valArray = []
    let original = []

    // USING FOR LOOP

    // for (let i = 0; i < arr.length; i++) {
    //     if(test(arr[i])){
    //         valArray.push(true)
    //     }
    // }

    // USING SOME()
    while (arr.length != 0) {
        arr.some(val => test(val) ? valArray.push(true) : 0)
        original.push(arr.shift())
    }


    return valArray.length === original.length
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true