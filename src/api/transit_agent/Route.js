const TransitAgentController = require("./Controller");

module.exports = function TransitAgentRoute(app) {
  app.post("/transit-agent", TransitAgentController.save);
  app.delete("/transit-agent/:id", TransitAgentController.remove);
  app.put("/transit-agent/:id", TransitAgentController.update);
  app.get("/transit-agents", TransitAgentController.getAll);
};
