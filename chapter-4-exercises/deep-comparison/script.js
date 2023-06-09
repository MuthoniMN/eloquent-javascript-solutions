function deepEqual(a, b) {
    // check if they are the same data type
    if (typeof a !== typeof b) {
        return false
    }
    // check for null or undefined
    else if(a === null || b === null || a === undefined || b === undefined){
        return a === b
    }
    // check if they are primitive data types
    else if (typeof a !== 'object'  || typeof b !== 'object') {
        return a === b
    }
    // check if they are arrays
    else if (Array.isArray(a) || Array.isArray(b)) {
        if (a.length !== b.length) {
            return false
        } else {
            for (let i = 0; i < a.length; i++) {
                return deepEqual(a[i], b[i])   
            }
        }
    }
    // check if they have the same properties
    let keys1 = Object.keys(a).toString()
    let keys2 = Object.keys(b).toString()
    if (keys1 !== keys2) {
        return false
    }else{
        let boolArr = []
        let props = Object.keys(a)

        for (let i = 0; i < props.length; i++) {
            let val1 = a[props[i]]
            let val2 = b[props[i]]
            if(!deepEqual(val1, val2)){
                boolArr.push (false)
            }else{
                boolArr.push (true)
            }
        } 

        let bool = boolArr.filter((b) => b === true)
        if (bool.length === props.length) {
            return true
        } else {
            return false
        }
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true