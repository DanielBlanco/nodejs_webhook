"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Webhook = use("App/Models/Webhook");

/**
 * Resourceful controller for interacting with webhooks
 */
class WebhookController {
  /**
   * Show a list of all webhooks.
   * GET webhooks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const data = await Webhook.query()
      .orderBy("event", "desc")
      .fetch();
    return view.render("webhook.index", { webhooks: data.rows });
  }

  /**
   * Render a form to be used for creating a new webhook.
   * GET webhooks/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    return view.render("webhook.create");
  }

  /**
   * Create/save a new webhook.
   * POST webhooks
   *
   * @param {object} ctx
   * @param {Session} ctx.session
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, session, response }) {
    const data = request.only([
      "url",
      "event",
      "auth_mechanism",
      "auth_details"
    ]);

    try {
      await Webhook.create(data);
    } catch (e) {
      console.log(e);
      session.flash({ error: "Unable to create webhook!" });
      return response.redirect("back");
    }

    return response.route("WebhookController.index");
  }

  /**
   * Display a single webhook.
   * GET webhooks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing webhook.
   * GET webhooks/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update webhook details.
   * PUT or PATCH webhooks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a webhook with id.
   * DELETE webhooks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = WebhookController;
