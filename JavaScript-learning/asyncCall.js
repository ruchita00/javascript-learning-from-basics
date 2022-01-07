const userLogin = () => {
  console.log("Enter username and password");
  let username = prompt("Enter username");
  let password = prompt("Enter password");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing user authentication");
      if (username === "dipesh" && password === "dipesh") {
        resolve("user authenticated");
      } else {
        reject("user authentication is failed");
      }
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`go to home page: ${goToHomePage}`);
}

async function perfromTask() {
  const response = await userLogin();
  console.log("Validated user");
  const userAuthStatus = await goToHomePage(response);
  console.log(userAuthStatus);
}

perfromTask();
