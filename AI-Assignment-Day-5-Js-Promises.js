// 1 Ordering Food

function orderFood() {
  return (myOrder = new Promise((resolve, reject) => {
    const ranNum = Math.floor(Math.random() * 10) < 8 ? true : false;

    if (ranNum) {
      setTimeout(() => {
        resolve("Pizza Delivered");
      }, 2000);
    } else {
      reject("Restaurant Closed");
    }
  }));
}

orderFood()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 2 Downloading File

function downloadFile() {
  return (myfile = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      setTimeout(() => {
        resolve("Download Complete");
      }, 3000);
    } else {
      reject("Download Failed");
    }
  }));
}

downloadFile()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// 3 Checking Login

function checkLogin() {
  return (checkLogin = new Promise((resolve, reject) => {
    const checkingSim = Math.random() <= 0.5 ? true : false;

    if (checkingSim) {
      resolve("Login Successful");
    } else {
      reject("Login Unsuccessful");
    }
  }));
}

checkLogin()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
