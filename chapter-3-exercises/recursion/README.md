>We’ve seen that `%` (the remainder operator) can be used to test whether a number is even or odd by using `% 2` to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

- Zero is even.
    
- One is odd.
    
- For any other number _N_, its evenness is the same as _N_ - 2.
    

>Define a recursive function `isEven` corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

>Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

```
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
```

## Pseudocode

1. Create a function that takes a number, n as the argument
2. check if the number is greater than or equal to 0
3.  if the number, n is equal to 0, return true
4. else if number, n is equal to 1, return false
5. else recursively call the function

## Concepts Covered
- Functions
- Conditionals