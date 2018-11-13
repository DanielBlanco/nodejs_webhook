"use strict";

class StoreWebhook {
  /**
   * Get validation rules.
   */
  get rules() {
    return {
      url: "required"
    };
  }

  get messages() {
    return {
      "url.required": "You must provide an URL."
    };
  }
}

module.exports = StoreWebhook;
