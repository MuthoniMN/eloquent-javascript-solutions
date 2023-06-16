function flattenArray(array) {
    let str = array.reduce((current, a) => {
        return current.concat(a)
    })
    return str
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattenArray(arrays));
// → [1, 2, 3, 4, 5, 6]