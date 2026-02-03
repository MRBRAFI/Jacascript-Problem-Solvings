function orderFood() {
  return (myOrder = new Promise((resolve, reject) => {
    const ranNum = Math.ceil(Math.random() * 10);

    if (ranNum < 8) {
      resolve("Pizza Delivered");
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
