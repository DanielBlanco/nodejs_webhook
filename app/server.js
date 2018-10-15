const express = require("express");
const _ = require("lodash");
const app = express();
const converter = require("./converter");

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/rgbToHex", (req, res) => {
  let red = parseInt(req.query.red, 10);
  let green = parseInt(req.query.green, 10);
  let blue = parseInt(req.query.blue, 10);

  let hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get("/hexToRgb", (req, res) => {
  let rgb = _.flow(
    converter.hexToRgb,
    JSON.stringify
  )(req.query.hex);

  res.send(rgb);
});

app.listen(3000, () => {
  console.log("We have started our server on port 3000");
});
