"use strict";

const { browser } = require("../support");
const { test, trait } = use("Test/Suite")("Webhook");

trait("Test/Browser");

test("visit webhooks index page", async ({ browser }) => {
  const page = await browser.visit("/webhooks");
  await page.assertHasIn("h1.title", "Webhooks");
}).timeout(browser.timeout);
