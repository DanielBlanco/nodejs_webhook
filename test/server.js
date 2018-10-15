const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const request = require("request");
const host = "http://localhost:3000";

describe("Root", () => {
  let url = host;

  it("returns status 200", done => {
    request(url, (error, response, body) => {
      assert.equal(response.statusCode, 200);
      done();
    });
  });

  it("returns a hello", done => {
    request(url, (error, response, body) => {
      assert.equal(body, "Hello!");
      done();
    });
  });
});

describe("Color Code Converter API", () => {
  describe("RGB to Hex conversion", () => {
    let url = host + "/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", done => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in hex", done => {
      request(url, (error, response, body) => {
        expect(body).to.equal("ffffff");
        done();
      });
    });
  });

  describe("Hex to RGB conversion", () => {
    let url = host + "/hexToRgb?hex=00ff00";

    it("returns status 200", done => {
      request(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in RGB", done => {
      request(url, (error, response, body) => {
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });
});
