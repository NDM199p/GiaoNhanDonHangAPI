const LevelAreaController = require("./Controller");

module.exports = function LevelAreaRoute(app) {
  app.post("/level-area", LevelAreaController.save);
  app.delete("/level-area/:id", LevelAreaController.remove);
  app.put("/level-area/:id", LevelAreaController.update);
  app.get("/level-areas", LevelAreaController.getAll);
};
