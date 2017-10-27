function timDecrypter(string) {
  let result = string.split("");
  return result
    .map((letter, index) => {
      let codePoint = result[index].codePointAt(letter) - 3;
      return String.fromCharCode(codePoint);
    })
    .join("");
}

module.exports = timDecrypter;
