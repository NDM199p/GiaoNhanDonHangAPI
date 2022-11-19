const AreaController = require("./Controller");

module.exports = function AreaRoute(app) {
  app.post("/area", AreaController.save);
  app.delete("/area/:id", AreaController.remove);
  app.put("/area/:id", AreaController.update);
  app.get("/areas", AreaController.getAll);
};
