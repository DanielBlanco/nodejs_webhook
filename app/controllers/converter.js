const converter = require("../lib/util/converter");

/**
 * Converter controller.
 */
class Converter {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  hexToRgb() {
    let rgb = _.flow(
      converter.hexToRgb,
      JSON.stringify
    )(req.query.hex);

    res.send(rgb);
  }

  rgbToHex() {
    let red = parseInt(req.query.red, 10);
    let green = parseInt(req.query.green, 10);
    let blue = parseInt(req.query.blue, 10);

    let hex = converter.rgbToHex(red, green, blue);

    res.send(hex);
  }
}
module.exports = Converter;
