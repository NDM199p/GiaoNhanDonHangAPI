const AuthController = require("./Controller");

module.exports = function AuthRoute(app) {
  app.post("/token", AuthController.getAuth);
};
