/**
 * Home controller.
 */
class Home {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  index() {
    this.response.render("index", { message: "Welcome to my Nodejs app!" });
  }
}
module.exports = Home;
