const converter = require("../lib/util/converter");

/**
 * Webhook controller.
 */
class Webhook {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  index() {
    this.response.send("webhooks!");
  }
}
module.exports = Webhook;
