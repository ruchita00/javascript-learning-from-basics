function myFunction() {
  return new Promise((resolve, reject) => {
    const value = false;
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

myFunction()
  .then(() => {
    console.log("resloved");
  })
  .catch(() => {
    console.log("rejected");
  });
