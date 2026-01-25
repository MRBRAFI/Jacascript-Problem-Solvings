const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 72 },
  { name: "bharlie", age: 40 },
  { name: "harlie", age: 50 },
];

const groupByAge = (users) => {
  const group20 = { Group_of_0_20: "" };
  const group40 = { Group_of_21_40: "" };
  const group60 = { Group_of_41_60: "" };
  const group80 = { Group_of_61_80: "" };
  const group100 = { Group_of_81_100: "" };
  for (const user of users) {
    if (user.age <= 20) {
      group20.Group_of_0_20 += `${user.name}`;
    } else if (user.age > 20 && user.age <= 40) {
      group40.Group_of_21_40 +=
        (group40.Group_of_21_40 ? ", " : "") + user.name;
    } else if (user.age > 40 && user.age <= 60) {
      group60.Group_of_41_60 +=
        (group60.Group_of_41_60 ? ", " : "") + user.name;
    } else if (user.age > 60 && user.age <= 80) {
      group80.Group_of_61_80 +=
        (group80.Group_of_61_80 ? ", " : "") + user.name;
    } else if (user.age > 80 && user.age <= 100) {
      group100.Group_of_80_100 +=
        (group100.Group_of_81_100 ? ", " : "") + user.name;
    }
  }
  return { group20, group40, group60, group80, group100 };
};

console.log(groupByAge(users));
