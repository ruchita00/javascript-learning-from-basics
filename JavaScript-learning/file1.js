console.log("hello world");

//variable
//variable can store some information
//we can use that information later

//declare variable
var firstName = "ruchita";

//use a variable
console.log(firstName);
//change value
firstName = "tina";
console.log(firstName);

//rules for naming valriables

//you cannot start with number
// example
// 1value(invalid)
// value1(invalid)

var value = 10;
console.log(value / 10);

//you can use only underscore or dollar symbol

//first_name(valid)
//_firstname(valid)

//first$name(valid)
//$firstname(valid)

//you cannot use spaces

//first name(invalid)

//convention

//start with small letter and use camelCase

//let keyword
//declare variable with let keyword

// let firstName = "ruchita";
// console.log(firstName);

//scope
// block scope

let secondName = "ruchita";
secondName = "sejal";
console.log(secondName);

//we can change let value

//declare constants

const pi = "3.14";
console.log(pi);
console.log(pi * 3);

//does not change const value

//string indexing

let Name = "ruchita";

// r u c h i t a
// 0 1 2 3 4 5 6

console.log(Name[2]);

//length of string

console.log(Name.length);

// spaces included in length

console.log(Name[Name.length - 1]);

//methods

//trim()

let nameName = "     ruchita   ";
console.log(nameName.length);
nameName = nameName.trim();
console.log(nameName);
console.log(nameName.length);

//toUpperCase()

let harshName = "harshit";
harshName = harshName.toUpperCase();
console.log(harshName);

//toLowerCase()

let upperName = "RUCHITASAGGALGILE";
upperName = upperName.toLowerCase();
console.log(upperName);

//start index
//end index

let newString = harshName.slice(0, 6);
console.log(newString);
