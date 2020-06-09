const fn = (A) => {
  const evens = [];
  const odds = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evens.push(A[i]);
    } else {
      odds.push(A[i]);
    }
  }
  return [...evens, ...odds];
};

module.exports = fn;
