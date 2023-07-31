"use strict";

// 1. Print numbers from 1 to 135
// loop through the array and console log each number of the array
for (let i = 1; i <= 135; i++) {
  console.log(i);
}

// 2. Print Odd Numbers 1 - 135
// print all Odd numbers from 1 to 135
// loop => condition for odd num
// console log the solution

// for (let i = 1; i <= 135; i = i + 2) {
//   console.log(i);
// }

//3. Sum of Printed Numbers
// print all numbers element 0 = 1, last element = 135
// sum the numbers I'm printing
// create a var (outside the for loop)
// loop
// do the sum operation
// write the string "Number is: 0 Sum: 0"
// console.log the solution

// let x = 0;
// for (let i = 0; i <= 135; i++) {
//   x = x + i;
//   console.log("Number is: " + i + " Sum: " + x);
// }

// 4. Print the elements of an array
// iterate through the array
// console log all numbers having their index
// const x = [1, 4, 2, 12];

// for (let i = 0; i < x.length; i++) {
//   const element = x[i];
//   console.log(element);
// }

// 5. Find Max
// create a variable that will store the maximum number
// iterate through the array
// at each iteration, we check if the current number of the array is greater than the number stored in the variable
// if so, overwrite the variable
// console log result

// const x = [2, -3, -1, 5];
// let storedNumber = 0;

// for (let i = 0; i < x.length; i++) {
//   const element = x[i];

//   if (element > storedNumber) {
//     storedNumber = element;
//   }
// }

// console.log(storedNumber);

// 6. Get Average
// create a variable that will store the sum of array number
// iterate through the array
// at each iteration, we add the current number of the array to the number stored in the accumulator
// having received the sum of all the numbers in the array, divide it by the number of elements in the array
// console log result

// const x = [2, 1, 3, 4, 5];
// let accumulator = null;

// for (let i = 0; i < x.length; i++) {
//   const element = x[i];
//   accumulator += element;
// }

// console.log(accumulator / x.length);

// 7. Eliminate the Negatives
// create a variable that will store the resulted array
// iterate through the array
// at each iteration, we push the current number of the array to the new array, if the number is bigger than 0.
// if not, push 0
// console log result

// const x = [2, -1, 4, -3];
// let result = [];

// for (let i = 0; i < x.length; i++) {
//   const element = x[i];

//   if (element > 0) {
//     result.push(element);
//   } else {
//     result.push(0);
//   }
// }

// console.log(result);

// 8. Number to String
// create a variable that will store the resulted array
// iterate through the array
// at each iteration, we push the current number of the array to the new array, if the number is bigger or equal 0
// if not, push 'Turing'
// console log result

// const x = [1, -4, 0, -1];
// let result = [];

// for (let i = 0; i < x.length; i++) {
//   const element = x[i];

//   if (element >= 0) {
//     result.push(element);
//   } else {
//     result.push("Turing");
//   }
// }

// console.log(result);
