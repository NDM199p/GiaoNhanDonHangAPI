const db = require("../../db/models/index");

class LevelAreaSevice {
  getLevelAreaInstance() {
    return db.LevelArea;
  }
}

module.exports = new LevelAreaSevice();
