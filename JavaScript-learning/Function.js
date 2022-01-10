// function singHappyBirthday() {
//   console.log("Happy Birthady to you.....");
// }

// function twoPlusFour(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

//function declaration

// const returnValue = twoPlusFour(4, 5, 1);
// console.log(returnValue);

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(3));

// example

// function firstChar(anyString) {
//   return anyString[0];
// }

// console.log(firstChar("abc"));

// example

// const findTarget = function (array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };
// const myArray = [1, 3, 8, 90];
// const ans = findTarget(myArray, 90);
// console.log(ans);

// //function expression

// const singHappyBirthday = function () {
//   console.log("happy birthday to you....");
// };

// singHappyBirthday();

//Arrow Function

const singHappyBirthday = () => {
  console.log("happy birthday to day...");
};

singHappyBirthday();

const sumThreeNumbers = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

console.log(sumThreeNumbers(1, 2, 3));
