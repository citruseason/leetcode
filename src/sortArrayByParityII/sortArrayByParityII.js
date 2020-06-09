const fn = (A) => {
  const newArray = new Array(A.length);

  let nextEven = 0;
  let nextOdd = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      newArray[nextEven] = A[i];
      nextEven += 2;
    } else {
      newArray[nextOdd] = A[i];
      nextOdd += 2;
    }
  }
  return newArray;
};

module.exports = fn;
