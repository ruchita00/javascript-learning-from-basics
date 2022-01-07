// const promise = new Promise((resolve, reject) => {
//   console.log("Async task execution");
//   if (false) {
//     const person = { name: "ruchita" };
//     resolve(person);
//   } else {
//     const err = { errCode: "1001" };
//     reject(err);
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch(() => console.log("failed"))
//   .finally(() => {
//     console.log("clean up");
//   });

//async task with promises

// function asyncTask() {
//   return Promise.resolve();
// }

// asyncTask().then(() => {
//   console.log(name);
// });

// const name = "ruchi";

// const p = Promise.resolve("done");

// p.then((val) => {
//   console.log(val);
//   return "done";
// })
//   .then((val) => {
//     console.log(val);
//     return "don2";
//   })
//   .then((val) => console.log(val))
//   .catch((val) => console.log(val));

const p = Promise.reject("failed");

p.then((val) => {
  console.log(val);
  return "done1";
})
  .then((val) => {
    console.log(val);
    return "done2";
  })
  .catch((val) => console.log(val));
