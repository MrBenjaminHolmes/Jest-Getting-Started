function encrypt(string) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newString = [];
  [...string].forEach((char) => {
    if (alphabet.includes(char)) {
      let rotor = alphabet.indexOf(char);
      if (rotor == 25) {
        newString.push(alphabet[0]);
      }
      newString.push(alphabet[rotor + 1]);
    } else {
      newString.push(char);
    }
  });
  return newString.join("");
}

module.exports = encrypt;
