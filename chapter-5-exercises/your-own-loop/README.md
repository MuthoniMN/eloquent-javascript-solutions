Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.

```
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
```

## Pseudocode
1. create the higher-order function that takes 4 parameters, a value and 3 functions
2. loop through the value and execute the test function
3. if `true`, else stop
4. after the loop is done, call the body function and pass the updated value as an argument
5. run the update function

## Concepts Covered 
- Functions 
- Loops
- Recursion