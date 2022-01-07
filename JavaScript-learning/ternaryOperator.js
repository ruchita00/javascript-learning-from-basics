// let age = 3;
// let drink;

// if (age >= 5) {
//   drink = "coffe";
// } else {
//   drink = "milk";
// }

// console.log(drink);

// ternary operator
// let age = 3;
// let drink = age >= 5 ? "coffe" : "milk";
// console.log(drink);

// let age = 18;
// let drink = age >= 18 ? "hard drink" : "milk";
// console.log(drink);

// and or operator

let firstName = "Harshit";
let age = 23;

// if (firstName[0] === "H") {
//   console.log("ÿour name start with H");
// }

// if (age > 18) {
//   console.log("you are above 18");
// }

// if (firstName[0] === "H" && age > 18) {
//   console.log("Name start with H and above 18");
// } else {
//   console.log("inside elsw");
// }

// true+true=true

//OR operator

if (firstName[0] === "H" || age > 18) {
  console.log("inside if");
} else {
  console.log("inside else");
}

//nested if else

//winning number 19
//19 your guess is right
// 17 too low
// 20 too high

// let winningNumber = 19;

// let userGuess = +prompt("Guess a number");
// //"12"
// console.log(typeof userGuess, userGuess);

// if (userGuess === winningNumber) {
//   console.log("your guess is right!");
// } else {
//   if (userGuess < winningNumber) {
//     console.log("too low");
//   } else {
//     console.log("too high");
//   }
// }

// let marks = 80;
// let generalMarks = +prompt("guess a number");
// console.log(typeof marks);

// if (marks === generalMarks) {
//   console.log("your marks is accuraate");
// } else {
//   if (marks < generalMarks) {
//     console.log("your failed");
//   } else {
//     console.log("you r passed");
//   }
// }

let tempInDegree = -70;

if (tempInDegree < 0) {
  console.log("extremely cold outside");
} else if (tempInDegree < 16) {
  console.log("it is cold outside");
} else if (tempInDegree < 25) {
  console.log("wheather is okay");
} else if (tempInDegree < 35) {
  console.log("lets go for swim");
} else if (tempInDegree < 45) {
  console.log("turn on AC");
} else {
  console.log("too hot");
}
