const fn = (S) => {
  const words = S.split(" ");
  return words
    .map((word, index) => {
      let newWord = word;
      if (word.search(/^(a|e|i|o|u)/gi) === -1) {
        newWord = word.substring(1) + word[0];
      }
      return newWord + "ma" + "a".repeat(index + 1);
    })
    .join(" ");
};

module.exports = fn;
