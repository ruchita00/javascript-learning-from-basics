const userLogin = () => {
  console.log("Enter username and password");
  let username = prompt("Ënter username");
  let password = prompt("Enter password");

  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("Performing User Authentication");
      if (username === "dipesh" && password === "dipesh") {
        reslove("User Authenticated");
      } else {
        reject("Authetication failed");
      }
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`Go to home page as: ${userAuthStatus}`);
}

// userLogin()
//   .then((response) => {
//     console.log("validated user");
//     return goToHomePage(response);
//   })
//   .then((userAuthStatus) => {
//     console.log(userAuthStatus);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
