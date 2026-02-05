function getUserData() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
}

getUserData();

async function getUserDataNew() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Data retrieving failed");
  }
}

getUserDataNew();
