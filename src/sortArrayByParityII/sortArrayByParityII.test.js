const fn = require("./sortArrayByParityII");

describe("922. Sort Array By Parity II", () => {
  test("[INPUT] : [4,2,5,7]", () => {
    expect(fn([4, 2, 5, 7])).toEqual([4, 5, 2, 7]);
  });
});
