function isEven(n) {
    if (n >= 0) {
        if (n === 0) {
            return true
        } else if (n === 1) {
            return false
        } else {
            return isEven(n - 2)
        }
    }
    return "Please enter a positive number"
}

console.log(isEven(2));
console.log(isEven(7));
console.log(isEven(6));
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??