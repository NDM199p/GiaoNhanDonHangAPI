const WarehoseController = require("./Controller");

module.exports = function WarehoseRoute(app) {
  app.post("/warehose", WarehoseController.save);
  app.delete("/warehose/:id", WarehoseController.remove);
  app.put("/warehose/:id", WarehoseController.update);
  app.get("/warehose/:transitAgentId/orders", WarehoseController.findOrders);
  app.get(
    "/warehose/:transitAgentId/orders/waiting-for-customer",
    WarehoseController.findOrdersByStatusWaitingForCustommerSend
  );
};
