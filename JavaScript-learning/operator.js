//boolean & comparison operator

let num1 = 9;
let num2 = 7;

// console.log(num1 < num2);

//== vs ===
// console.log(num1 == num2); (check value only)

// == is only check value not check datatype

// === is check datatypes

// console.log(num1 === num2);

// != vs !==

// console.log(num1 !== num2);

//if else condition

let age = 18;
if (age >= 18) {
  console.log("this is valid for voting");
} else {
  console.log("not valid for vote");
}

let num = 15;
// console.log(9 % 4);
if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//truthy and falsy values

//falsy values

//false
//""
//null
//undefined
//0

//truthy values

//"abc"
// 1,-1

let firstName = -1;

if (firstName) {
  console.log(firstName);
} else {
  console.log("firstname is kinda empty");
}
