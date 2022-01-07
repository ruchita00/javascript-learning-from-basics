//Promise.resolve
//Promise chaining

// const mypromise = Promise.resolve(5);
// Promise.resolve(5).then((value) => {
//   console.log(value);
// });

//then()
//then method always return promise

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromise().then((value) => {
  console.log(value);
  value += "Bar";
  return value;
});
