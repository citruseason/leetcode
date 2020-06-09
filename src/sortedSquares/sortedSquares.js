const fn = (A) => {
  return A.map((a) => a * a).sort((a, b) => a - b);
};

module.exports = fn;
