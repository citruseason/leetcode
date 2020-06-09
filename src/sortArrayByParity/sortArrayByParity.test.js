const fn = require("./sortArrayByParity");

describe("905. Sort Array By Parity", () => {
  test("[INPUT] : [3,1,2,4]", () => {
    expect(fn([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });
});
