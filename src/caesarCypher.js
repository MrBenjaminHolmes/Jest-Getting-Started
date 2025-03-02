function encrypt(string, shiftFactor) {
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
  const alphabetUpper = alphabet.map((char) => char.toUpperCase());
  let newString = [];

  [...string].forEach((char) => {
    if (alphabet.includes(char)) {
      let rotor = alphabet.indexOf(char);
      let newChar = rotor + shiftFactor;
      if (newChar > 25) {
        newChar = newChar - 26;
        newString.push(alphabet[newChar]);
      } else {
        newString.push(alphabet[rotor + shiftFactor]);
      }
    } else if (alphabetUpper.includes(char)) {
      let rotor = alphabetUpper.indexOf(char);
      let newChar = rotor + shiftFactor;
      if (newChar > 25) {
        newChar = newChar - 26;
        newString.push(alphabetUpper[newChar]);
      } else {
        newString.push(alphabetUpper[rotor + shiftFactor]);
      }
    } else {
      newString.push(char);
    }
  });
  return newString.join("");
}

module.exports = encrypt;
