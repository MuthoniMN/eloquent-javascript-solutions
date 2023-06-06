function range(start, end, step) {
    let numberArray = []
    if (end > start) {
        let num = start
        while (num <= end) {
            numberArray.push(num)
            
            if (step === undefined) {
                num += 1
            }else{
            num += step 
            }
        }
    } else {
        let num = start
        while (num >= end) {
            numberArray.push(num)
            
            if (step === undefined) {
                num -= 1
            }else{
            num += step 
            }
        }
    }

    return numberArray
}

range(4, 12)
console.log(range(4, 12,2));

function sum(array) {
    let totalSum = 0
    for (const num of array) {
        totalSum += num
    }
    return totalSum
}

console.log(sum([5, 7, 4, 6]));

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
//→ 55