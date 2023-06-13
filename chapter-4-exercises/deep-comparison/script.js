function deepEqual(obj1, obj2) {
    // check if they are the same data type
    if(typeof obj1 !== typeof obj2){
       return false
    }
    // check for null and undefined
    else if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
        return obj1 === obj2
    } 
    // check for primitive data types
    else if (typeof obj1 !== "object" && typeof obj2 !== "object") {
        return obj1 === obj2
    } 
    // check for arrays
    else if(Array.isArray(obj1) && Array.isArray(obj2)){
        if (obj1.length !== obj2.length) {
            return false
        } else {
            for (let i = 0; i < obj.length; i++) {
                if(!deepEqual(obj1[i], obj2[i])){
                    return false
                }
            }
        }
    }else{
            // check for objects
        let keys1 = Object.keys(obj1).toString()
        let keys2 = Object.keys(obj2).toString()

        if (keys1 === keys2 ){
            for (let key in obj1) {
                let val1 = obj1[key]
                let val2 = obj2[key]
                if(!deepEqual(val1, val2)){
                    return false
                }
            }
        }else {
            return false
        }
    }

    return true
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true