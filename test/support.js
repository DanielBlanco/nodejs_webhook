"use strict";

const Env = use("Env");

module.exports = {
  browser: {
    timeout: parseInt(Env.get("BROWSER_TESTS_TIMEOUT", 6000))
  }
};
