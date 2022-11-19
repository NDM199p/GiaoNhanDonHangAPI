const db = require("../../db/models/index");
const OrderService = require("../order/service");
const orderService = new OrderService();

class WarehoseSevice {
  getWarehoseInstance() {
    return db.Warehose;
  }

  getWarehoseModel() {
    return db.Warehose;
  }

  getOrdersByStatusWaitingForCustommerSend(transitAgentId) {
    return orderService.getOrderModel().findAll({
      where: { senderTransitAgent: transitAgentId },
    });
  }
}

module.exports = new WarehoseSevice();
