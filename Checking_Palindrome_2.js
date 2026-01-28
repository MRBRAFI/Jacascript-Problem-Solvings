const str = "racecar";

const palindrome = (str) => {
  const reversed = str.split("").reverse().join("");

  if (reversed.toLowerCase() === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
console.log(palindrome(str));
