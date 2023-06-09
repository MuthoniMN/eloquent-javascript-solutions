> Arrays have a `reverse` method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, `reverseArray` and `reverseArrayInPlace`. The first, `reverseArray`, takes an array as argument and produces a _new_ array that has the same elements in the inverse order. The second, `reverseArrayInPlace`, does what the `reverse` method does: it _modifies_ the array given as argument by reversing its elements. Neither may use the standard `reverse` method.

>Thinking back to the notes about side effects and pure functions which variant do you expect to be useful in more situations? Which one runs faster?

```
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```

## Pseudocode
### `reverseArray`
1. create the `reverseArray()` function 
2. create a variable whose value is an empty array
3. loop through the array backwards
4. push the individual elements to the empty array 
5. return the array 

### `reverseArrayInPlace`
1. create the `reverseArrayInPlace()` function
2. loop through the array backwards
3. push the individual elements to the array
4. loop through the first half of the array
5. remove the elements in the first half

## Concepts Covered
- Loops
- Arrays