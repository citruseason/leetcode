const fn = require("./toGoatLatin");

describe("824. Goat Latin", () => {
  test("[INPUT] : I speak Goat Latin", () => {
    expect(fn("I speak Goat Latin")).toEqual(
      "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
    );
  });

  test("[INPUT] : The quick brown fox jumped over the lazy dog", () => {
    expect(fn("The quick brown fox jumped over the lazy dog")).toEqual(
      "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
    );
  });
});
