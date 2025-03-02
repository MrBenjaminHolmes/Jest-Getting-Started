function reverseString(string) {
  let newString = [];
  [...string].forEach((char) => newString.unshift(char));
  return newString.join("");
}
module.exports = reverseString;
