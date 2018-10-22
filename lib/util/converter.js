/**
 * Pad the value with a zero prefix if it is only one character long, because a
 * valid hexadecimal representation must always contain two characters.
 */
let pad = hex => {
  return hex.length === 1 ? "0" + hex : hex;
};

/**
 * Converts rgb to hex.
 */
exports.rgbToHex = (red, green, blue) => {
  let redHex = red.toString(16);
  let greenHex = green.toString(16);
  let blueHex = blue.toString(16);

  return pad(redHex) + pad(greenHex) + pad(blueHex);
};

/**
 * Converts hex to rgb.
 */
exports.hexToRgb = hex => {
  let red = parseInt(hex.substring(0, 2), 16);
  let green = parseInt(hex.substring(2, 4), 16);
  let blue = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];
};
