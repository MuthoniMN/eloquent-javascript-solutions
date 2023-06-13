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

function prepend(list, element) {
    list = {
        value: element,
        rest: list
    }

    return list
}

console.log(prepend(arrayToList([1, 2, 3]), "I'M THE ONE"));

function nth(list, num) {
    let valueArray = listToArray(list)

    if (valueArray.includes(num)) {
        return valueArray.indexOf(num)
    }
    else{
        return undefineds
    }
}