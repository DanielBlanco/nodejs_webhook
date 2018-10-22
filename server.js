const Config = require("./lib/util/config");
const express = require("express");
const app = express();
const Home = require("./controllers/home");
const Webhook = require("./controllers/webhook");
const Converter = require("./controllers/converter");

class Server {
  constructor() {
    this.initEnv();
    this.initDB();
    this.initViewEngine();
    this.initRoutes();
    this.start();
  }

  start() {
    let port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => console.log("Server started on port " + port));
  }

  initEnv() {
    console.log("Environment config:", Config.loadEnv());
  }

  initDB() {
    app.set("db", Config.db());
  }

  initViewEngine() {
    app.set("views", __dirname + "/views");
    app.set("view engine", "jade");
  }

  initRoutes() {
    app.get("/", (req, res) => new Home(req, res).index());
    app.get("/webhooks", (req, res) => new Webhook(req, res).index());
    app.get("/rgbToHex", (req, res) => new Converter(req, res).rgbToHex());
    app.get("/hexToRgb", (req, res) => new Converter(req, res).hexToRgb());
  }
}

new Server();
