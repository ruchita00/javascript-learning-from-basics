//synchronous programming vs asynchronous programming

//synchronous programming

// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }
// console.log("script end");

//javascript synchronous programming hai and single threaded

// console.log("script start");
// function hello() {
//   console.log("ïnside set timeout");
// }
// setTimeout(hello, 1000);
// console.log("script end");

console.log("script start");
const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 0);

for (let i = 0; i < 100; i++) {
  console.log("...");
}

console.log("settimeout id is:", id);
console.log("clearing time out");
clearTimeout(id);
console.log("script end");
