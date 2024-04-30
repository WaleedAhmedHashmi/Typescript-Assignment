"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/
Object.defineProperty(exports, "__esModule", { value: true });
const str1 = "Ali";
const str2 = "Ahmed";
console.log(str1 === "Ali");
console.log(str2 !== "Ahmed");
// Tests using the lower case function
const fname = "Asad";
console.log(fname.toLowerCase());
//  Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 20;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num2 > num1);
console.log(num1 < num2);
console.log(num2 >= num1);
console.log(num1 <= num2);
// Tests using "and" and "or" operators
const numb1 = 15;
const numb2 = 10;
const numb3 = 20;
console.log(numb1 > numb2 && numb2 < numb3);
console.log(numb1 > numb2 || numb2 > numb3);
console.log(numb1 > numb2 && numb2 > numb3);
console.log(numb1 > numb2 || numb2 > numb3);
const array = [1, 2, 3, 4, 5];
const itemToFind = 6;
// Check if the item is in the array
const isInArray = array.includes(itemToFind);
// Print the result
if (isInArray) {
    console.log(`${itemToFind} is in the array.`);
}
else {
    console.log(`${itemToFind} is not in the array.`);
}
