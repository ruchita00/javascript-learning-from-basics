//promise
//its asynchronous

console.log("script start");
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve({ value: "Fried Rice" });
  } else {
    reject("Couldnt do it");
  }
});

//how to consume
friedRicePromise.then(
  (myfriedRice) => {
    console.log("lets eat", myfriedRice);
  },
  (error) => {
    console.log(error);
  }
);

for (let i = 0; i < 100; i++) {
  console.log(Math.random(), i);
}

console.log("script end");

//function returning promise

function ricePromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve({ value: "friendrice" });
    } else {
      reject("could not do it");
    }
  });
}

ricePromise()
  .then((myfriedRice) => {
    console.log("lets eat", myfriedRice);
  })
  .catch((error) => {
    console.log(error);
  });
