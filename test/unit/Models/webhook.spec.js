'use strict'

const { test, trait } = use('Test/Suite')('Models/Webhook')

const Webhook = use('App/Models/Webhook')

trait("DatabaseTransactions");

test('create webhook', async ({ assert }) => {
  let obj = new Webhook()
  obj.event = "something"
  obj.url = "https://test.com/webhooky"
  obj.auth_mechanism = "none"
  obj.auth_details = "{}"
  assert.isUndefined(obj.id)
  await obj.save()
  assert.isDefined(obj.id)
})
