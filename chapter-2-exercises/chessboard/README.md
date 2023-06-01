> Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
> 
> Passing this string to `console.log` should show something like this:
``` 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```
> When you have a program that generates this pattern, define a binding `size = 8` and change the program so that it works for any `size`, outputting a grid of the given width and height.

## Pseudocode

1. Declare a variable to store the chessboard and assign it an empty string
2. Create a loop to make the columns
3. Create a nested loop to create the rows
4. if the column is even, ensure it starts with "#"
5. else the column should start with a space
6. Concatenate the space and "#" to create the row
7. Concatenate the rows to create the chessboard 

## Concepts Covered
- Loops
- Conditional Statements
- String Concatenation