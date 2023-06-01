> Write a program that uses `console.log` to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print `"Fizz"` instead of the number, and for numbers divisible by 5 (and not 3), print `"Buzz"` instead.
> 
> When you have that working, modify your program to print `"FizzBuzz"` for numbers that are divisible by both 3 and 5 (and still print `"Fizz"` or `"Buzz"` for numbers divisible by only one of those).

## Pseudocode

### First Part 

1. Create a loop that prints the numbers
2. `if(num % 3 === 0 )`, print `"Fizz"`
3. `else if(num % 5 === 0)`, print `"Buzz"`
4. `else`, print `num` 

### Second Part 

1. Create a loop that prints the numbers
2. if `num % 3 === 0` and `num % 5 === 0` , print `"FizzBuzz"`
3. `else if(num % 3 === 0 )`, print `"Fizz"`
4. `else if(num % 5 === 0)`, print `"Buzz"`
5. `else`, print `num` 

## Explanation

In the second part of the question, we are asked to check if two existing conditions are true meaning one of the statements in the `if` block would evaluate to true.

If we did it like this, we will not get the intended output. 
```
if(num % 3 === 0){
	console.log("Fizz")
}else if(num % 5 === 0){
	console.log("Buzz")
}else if(num % 3 === 0 && num % 5 === 0){
	console.log("FizzBuzz")
}else{
	console.log(num)
}
```
When `num` is 15, the output displayed on the console is `"Fizz"` which is true. However,  we are expecting `"FizzBuzz"` because 15 is divisible by 3 and 5.

This happened because in an if block once JavaScript finds a true statement, it doesn't check the other statements. This means that the program stopped executing after the first condition which is `num % 3 === 0`.

So we have to make sure that the first condition checks whether the number is divisible by 3 and 5.