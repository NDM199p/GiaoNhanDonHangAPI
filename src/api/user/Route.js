const UserController = require("./Controller");

module.exports = function UserRoute(app) {
  app.post("/user", UserController.save);
  app.delete("/user/:id", UserController.remove);
  app.put("/user/:id", UserController.update);
  app.get("/users", UserController.getAll);
};
