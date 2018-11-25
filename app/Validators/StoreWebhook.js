"use strict";

class StoreWebhook {
  /**
   * Get validation rules.
   */
  get rules() {
    return {
      url: "required|unique:webhooks|max:250|url",
      event: "required|max:80",
      auth_mechanism: "required|in:none,basic,oauth2"
    };
  }

  get messages() {
    return {
      max: "Please keep it under {{ argument.0 }} characters.",
      "url.unique": "Please provide an unique URL for your webhook.",
      "url.required": "Please provide an unique URL for your webhook.",
      "event.required": "Please provide an event identifier.",
      "auth_mechanism.required":
        "Dude! don't mess with the site and provide an auth mechanism.",
      "auth_mechanism.in": "Please select one of: None, Basic, OAuth2"
    };
  }
}

module.exports = StoreWebhook;
