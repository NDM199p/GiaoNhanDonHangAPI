const OrderController = require("./controller");

module.exports = function OrderRoute(app) {
  app.post("/order", OrderController.save);
  app.get("/orders", OrderController.findAll);
  app.put("/order/:id", OrderController.update);
  app.put("/order-cancel/:id", OrderController.cancel);
  app.delete("/order/:id", OrderController.remove);
  app.get("/order/:id", OrderController.remove);
};
