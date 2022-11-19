const WarehoseSevice = require("./Service");

module.exports = class WarehoseController {
  static async save(req, res) {
    let warehoseObject = req.body;
    try {
      let result = await WarehoseSevice.getWarehoseInstance().create(warehoseObject);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async findOrders(req, res) {
    let transitAgentId = req.params.transitAgentId;
    try {
      let result = await WarehoseSevice.getWarehoseModel().findAll({
        where: {
          transitAgent: transitAgentId,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async findOrdersByStatusWaitingForCustommerSend(req, res) {
    let transitAgentId = req.params.transitAgentId;
    try {
      let result = await WarehoseSevice.getOrdersByStatusWaitingForCustommerSend(transitAgentId);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    let warehoseId = req.params.id;
    let warehoseObject = req.body;
    try {
      let result = await WarehoseSevice.getWarehoseInstance().update(warehoseObject, {
        where: { id: warehoseId },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async remove(req, res) {
    let warehoseId = req.params.id;
    try {
      let result = await WarehoseSevice.getWarehoseInstance().destroy({
        where: { id: warehoseId },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      let result = await WarehoseSevice.getWarehoseInstance().findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
