const assert = require("chai").assert;
var converter = require(`${process.cwd()}/lib/util/converter`);

describe("Color Code Converter", () => {
  describe("RGB to Hex conversion", () => {
    it("converts the basic colors", () => {
      let redHex = converter.rgbToHex(255, 0, 0);
      let greenHex = converter.rgbToHex(0, 255, 0);
      let blueHex = converter.rgbToHex(0, 0, 255);

      assert.equal(redHex, "ff0000");
      assert.equal(greenHex, "00ff00");
      assert.equal(blueHex, "0000ff");
    });
  });

  describe("Hex to RGB conversion", () => {
    it("converts the basic colors", () => {
      let red = converter.hexToRgb("ff0000");
      let green = converter.hexToRgb("00ff00");
      let blue = converter.hexToRgb("0000ff");

      console.log("testing red value", red);
      console.table(red);

      assert.equal(red, [255, 0, 0]);
      assert.equal(green, [0, 255, 0]);
      assert.equal(blue, [0, 0, 255]);
    });
  });
});
