const toGoatLatin = require("./toGoatLatin");

describe("824. Goat Latin", () => {
  test("[INPUT] : I speak Goat Latin", () => {
    expect(toGoatLatin("I speak Goat Latin")).toBe(
      "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
    );
  });

  test("[INPUT] : The quick brown fox jumped over the lazy dog", () => {
    expect(toGoatLatin("The quick brown fox jumped over the lazy dog")).toBe(
      "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
    );
  });
});
