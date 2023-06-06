> Write a function `countBs` that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
> 
   Next, write a function called `countChar` that behaves like `countBs`, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite `countBs` to make use of this new function.

```
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```
## Pseudocode
- `countBs`
1. create a function that takes a string as an argument
2. create a variable to store the count of B's
3. Loop through the string to access each character
4. Check if the character is "B"
5. increment the count variable
6. return the final value of the count variable

- `countChar`
1. create a function that takes a string and a letter as arguments
2. create a variable to store the count of the letter
3. Loop through the string to access each character
4. Check if the character is the same as the letter
5. increment the count variable
6. return the final value of the count variable

## Concepts Covered
- Functions
- Loops
- Conditions