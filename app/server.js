const dotenv = require("dotenv");
const path = require("path");
const configPath = path.resolve(process.cwd(), "config", ".env");
const express = require("express");
const app = express();
const Home = require("./controllers/home");
const Converter = require("./controllers/Converter");

class Server {
  constructor() {
    this.initEnv();
    this.initViewEngine();
    this.initRoutes();
    this.start();
  }

  start() {
    let port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => console.log("Server started on port " + port));
  }

  initEnv() {
    let result = dotenv.config({ path: configPath });
    if (result.error) {
      throw result.error;
    }
    console.log("Environment config:", result.parsed);
  }

  initViewEngine() {
    app.set("views", __dirname + "/views");
    app.set("view engine", "jade");
  }

  initRoutes() {
    app.get("/", (req, res) => new Home(req, res).index());
    app.get("/rgbToHex", (req, res) => new Converter(req, res).rgbToHex());
    app.get("/hexToRgb", (req, res) => new Converter(req, res).hexToRgb());
  }
}

new Server();
