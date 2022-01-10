// array is ordered collection of similar data Elements

// let fruit = ["apple", "mango", "grapes"];
// let numbers = [1, 2, 3, 4];
// let mixed = [1, 2, 3, 4.3, "string", null, undefined];
// console.log(fruit);
// console.log(numbers);
// console.log(mixed);
// fruit[2] = "ruchi";
// console.log(fruit[0]); // array indexing start from 0
// console.log(fruit);
// console.log(typeof fruit);
// console.log(Array.isArray(fruit));

// let obj = {};
// console.log(typeof obj);
// console.log(Array.isArray(obj));

// array push

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// fruits.push("banana");

// Array pop

// console.log(fruits);
// fruits.pop("grapes");
// console.log(fruits);

// let poppedfruit = fruits.pop();
// console.log(fruits);
// console.log(poppedfruit);

// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);
// let shiftfruit = fruits.shift();
// console.log(shiftfruit);

// primitive vs reference data types

// let num1 = 6;
// let num2 = num1;

//how to clone array
//how to concatenate two arrays

// let array1 = ["itm1", "itm2"];
// let array2 = ["itm2", "itm2"];

// let array2 = [].concat(array1);
// let array2 = array1.slice(0).concat(["item3", "item4"]);

// array1.push("item3");

// let oneMoreArray = ["item3", "item4"];
// let array2 = [...array1, ...oneMoreArray];

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

//for loop in array

// let fruits = ["apple", "mango", "grapes", "banana"];

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// let fruits2 = [];
// for (let i = 0; i < fruits.length; i++) {
//   fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);

//use const for creating array

// const fruits = ["apple", "mango"];
// fruits = ["grapes"];
// fruits.push("banana");

// console.log(fruits);

//while loop in array

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
// while (i < fruits.length) {
//   fruits2.push(fruits[i].toUpperCase());
//   i++;
// }

// console.log(fruits2);

//for of loop in array

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// for (let fruit of fruits) {
//   fruits2.push(fruit.toUpperCase());
// }

// console.log(fruits2);

//for in loop in array

const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];

for (let index in fruits) {
  fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
