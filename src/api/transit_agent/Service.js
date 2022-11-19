const db = require("../../db/models/index");

class TransitAgentSevice {
  getTransitAgentInstance() {
    return db.TransitAgent;
  }
}

module.exports = new TransitAgentSevice();
