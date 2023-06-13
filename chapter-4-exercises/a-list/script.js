// array to list
function arrayToList(array) {
    let list = null

    for (let i = array.length - 1; i >= 0;  i--) {
        const element = array[i];

        list = {
            value: element,
            rest: list
        }
    }

    return list
}

console.log(arrayToList([1, 2, 3]));

//list to array
function listToArray(list) {

    let listArray = []
    let current = list

    while (current !== null) {
        // add the values
        listArray.push(current.value)
        // access the nested lists
        current = current.rest
    }

    return listArray
}

console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(element, list) {
    list = {
        value: element,
        rest: list
    }

    return list
}

console.log(prepend("I'M THE ONE", arrayToList([1, 2, 3]) ));

function nth(list, num) {
    let valueArray = listToArray(list)

    if (valueArray.length > num) {
        return valueArray[num]
    }
    else{
        return undefined
    }
}


console.log(nth(arrayToList([1, 2, 3]), 2));

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20