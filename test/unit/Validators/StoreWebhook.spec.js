"use strict";

const { beforeEach, test, trait } = use("Test/Suite")(
  "Validators/StoreWebhook"
);

const { validate } = use("Validator");
const StoreWebhookValidator = use("App/Validators/StoreWebhook");
const { rules } = use("App/Validators/StoreWebhook");

trait("DatabaseTransactions");

beforeEach(async () => {
  this.val = new StoreWebhookValidator();
});

test("url is required", async ({ assert }) => {
  const validation = await validate({}, this.val.rules, this.val.messages);
  assert.isTrue(validation.fails());
  assert.deepEqual(validation.messages(), [
    {
      field: "url",
      message: "You must provide an URL.",
      validation: "required"
    }
  ]);
});
