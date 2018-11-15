"use strict";

const { beforeEach, test, trait } = use("Test/Suite")(
  "Validators/StoreWebhook"
);
const Factory = use("Factory");
const _f = require("lodash/fp");
const { validate } = use("Validator");
const StoreWebhookValidator = use("App/Validators/StoreWebhook");
const { rules } = use("App/Validators/StoreWebhook");

trait("DatabaseTransactions");

beforeEach(async () => {
  this.val = new StoreWebhookValidator();
  this.validAttrs = {
    url: "http://example.com",
    event: "user_store",
    auth_mechanism: "none",
    auth_details: {}
  };
});

test("url is required", async ({ assert }) => {
  const testAttrs = _f.defaults(this.validAttrs)({ url: "" });
  const validation = await validate(
    testAttrs,
    this.val.rules,
    this.val.messages
  );
  assert.isTrue(validation.fails());
  assert.deepEqual(validation.messages(), [
    {
      field: "url",
      message: "Please provide an unique URL for your webhook.",
      validation: "required"
    }
  ]);
});

test("url is unique", async ({ assert }) => {
  const wh = await Factory.model("App/Models/Webhook").create();
  const testAttrs = _f.defaults(this.validAttrs)({ url: wh.url });
  const validation = await validate(
    testAttrs,
    this.val.rules,
    this.val.messages
  );
  assert.isTrue(validation.fails());
  assert.deepEqual(validation.messages(), [
    {
      field: "url",
      message: "Please provide an unique URL for your webhook.",
      validation: "unique"
    }
  ]);
});

test("event is required", async ({ assert }) => {
  const testAttrs = _f.defaults(this.validAttrs)({ event: "" });
  const validation = await validate(
    testAttrs,
    this.val.rules,
    this.val.messages
  );
  assert.isTrue(validation.fails());
  assert.deepEqual(validation.messages(), [
    {
      field: "event",
      message: "Please provide an event identifier.",
      validation: "required"
    }
  ]);
});

test("event cannot be over 80 chars", async ({ assert }) => {
  const repeat81 = _f.repeat(81);
  const testAttrs = _f.defaults(this.validAttrs)({ event: repeat81("a") });
  const validation = await validate(
    testAttrs,
    this.val.rules,
    this.val.messages
  );
  assert.isTrue(validation.fails());
  assert.deepEqual(validation.messages(), [
    {
      field: "event",
      message: "Please keep it under 80 characters.",
      validation: "max"
    }
  ]);
});
