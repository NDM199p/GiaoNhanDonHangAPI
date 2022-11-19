const db = require("../../db/models/index");

class AreaSevice {
  getAreaInstance() {
    return db.Area;
  }
}

module.exports = new AreaSevice();
