const fn = require("./sortedSquares");

describe("977. Squares of a Sorted Array", () => {
  test("[INPUT] : [-4,-1,0,3,10]", () => {
    expect(fn([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });
});
