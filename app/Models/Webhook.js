'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
//const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Webhook extends Model {
  static boot () {
    super.boot()
  }
}

module.exports = Webhook
