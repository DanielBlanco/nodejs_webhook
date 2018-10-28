"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class WebhooksSchema extends Schema {
  up() {
    this.create("webhooks", table => {
      table.increments();
      table
        .string("url", 250)
        .notNullable()
        .unique();
      table.string("event", 80);
      table.enum("auth_mechanism", ["basic", "oauth2", "none"], {
        useNative: true,
        enumName: "auth_mechanism_type"
      });
      table.json("auth_details", 80);
      table.timestamps();
    });
  }

  down() {
    this.drop("webhooks");
  }
}

module.exports = WebhooksSchema;
