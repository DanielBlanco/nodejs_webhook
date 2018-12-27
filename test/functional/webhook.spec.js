"use strict";

const _f = require("lodash/fp");
const Factory = use("Factory");
const { browser } = require("../support");
const { beforeEach, test, trait } = use("Test/Suite")("Webhook");

trait("Test/Browser");

beforeEach(async () => {
  const create = _f.times(() => Factory.model("App/Models/Webhook").create());
  this.webhookSeeds = await Promise.all(create(3));
});

test("visit webhooks index page", async ({ browser }) => {
  const page = await browser.visit("/webhooks");
  await page.assertHasIn("h1.title", "Webhooks");
  const assertHasUrl = _f.map(wh => page.assertHasIn("tbody", wh.url));
  await Promise.all(assertHasUrl(this.webhookSeeds));
}).timeout(browser.timeout);
