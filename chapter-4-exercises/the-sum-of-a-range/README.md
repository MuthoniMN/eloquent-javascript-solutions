>Write a `range` function that takes two arguments, `start` and `end`, and returns an array containing all the numbers from `start` up to (and including) `end`.
>
  Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55. 
  
>As a bonus assignment, modify your `range` function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call `range(1, 10, 2)` should return `[1, 3, 5, 7, 9]`. Make sure it also works with negative step values so that `range(5, 2, -1)` produces `[5, 4, 3, 2]`.


## Pseudocode
#### The `range()` function
1. create the range function with two parameters
2. initialize an empty array
3. loop from the start to the end
4. push individual values to the array
5. return the array

#### The `sum()` function
1. create the sum function that takes an array as an argument
2. initialize a `totalSum` variable to store the sum of the number
3. loop through the array 
4. add each element to `totalSum`
5. return the `totalSum`

#### Modifying the `range()` function
1. add a step parameter that has a default value of 1
2. check if the start is greater than the end
3. increment the loop value using the step given

## Concepts Covered
- Loops
- Arrays