"use strict";

const { test, trait } = use("Test/Suite")("Webhook");

trait("Test/Browser");

test("visit webhooks index page", async ({ browser }) => {
  const page = await browser.visit("/webhooks");
  await page.assertHas("Webhooks Index page!");
}).timeout(0);
