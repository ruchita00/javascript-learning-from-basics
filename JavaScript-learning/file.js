// type of operator

// data types

// 1.primitive datatypes

// 1.string "harshit"
// 2.numner 1 2 44 4.5
// 3.booleans
// 4.undefined
// 5.null
// 6.BigInt
// 7.Symbol

// let age = 23;
// let firstName = "ruchi";

// //convert number to string
// console.log(typeof (age + ""));
// age = age + "";
// console.log(typeof age);

// //convert string to number

// let myStr = +"34";
// console.log(typeof(myStr));

// let age = 19;

//convert number to string
// age = String(age);
// console.log(typeof age);

//convert string to number
// age = Number(age);
// console.log(typeof age);

//string concatenation

// let string1 = "harshit";
// let string2 = "vashish";

// let fullName = string1 + " " + string2;
// console.log(fullName);

// let string1 = "17";
// let string2 = "10";

// let newString = +string1 + +string2;

// console.log(newString);

//template string

// let age = 22;
// let firstName = "harshit";

// my name is harshit and my age is 22

// let aboutMe = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);

//undefined

// let firstName;
// console.log(typeof firstName);
// firstName = "ruchi";
// console.log(typeof firstName, firstName);

//not assign any value = reuslt is undefined

//null

// let myVariable = null;
// console.log(myVariable);
// console.log(typeof myVariable);

//bug = type of null is showing as object,it should be null

///BigInt

let myNumber = BigInt(12);
let sameMyNumber = 123n;
let same = 12;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);

console.log(myNumber + sameMyNumber);

//we cannot mixed bigint datatype with other datatype
// example:

console.log(myNumber + same);
