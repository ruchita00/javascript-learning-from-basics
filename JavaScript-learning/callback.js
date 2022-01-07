// function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailture) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     onSuccess(number1, number2);
//   } else {
//     onFailture();
//   }
// }

// function onFail() {
//   console.log("wrong data");
//   console.log("please pass numbers only");
// }

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// getTwoNumbersAndAdd(4, 5, addTwoNumbers, onFail);

// function getTwoNumberAndAdd(number1, number2, onSuccess, onFailture) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     onSuccess(number1, number2);
//   } else {
//     onFailture();
//   }
// }

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// function onFail() {
//   console.log("wrong data types");
//   console.log("pass correct data types");
// }

// getTwoNumberAndAdd(4, 5, addTwoNumbers, onFail);



//callback hell
const heading1 = document.querySelector(".heading1");
console.log(heading1);
const heading2 = document.querySelector(".heading2");
setTimeout(() => {
  heading1.textContent = "Heading 1";
  heading1.style.color = "Violet";
  setTimeout(() => {
    heading1.textContent = "Heading 2";
    heading1.style.color = "red";
    setTimeout(() => {
      heading1.textContent = "Heading 1";
      heading1.style.color = "Violet";
    }, 1000);
  }, 1000);
}, 1000);
