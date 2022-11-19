const TransitAgentSevice = require("./Service");

module.exports = class TransitAgentController {
  static async save(req, res) {
    let transitAgentObject = req.body;
    try {
      let result = await TransitAgentSevice.getTransitAgentInstance().create(transitAgentObject);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    let transitAgentId = req.params.id;
    let transitAgentObject = req.body;
    try {
      let result = await TransitAgentSevice.getTransitAgentInstance().update(transitAgentObject, {
        where: { id: transitAgentId },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async remove(req, res) {
    let transitAgentId = req.params.id;
    try {
      let result = await TransitAgentSevice.getTransitAgentInstance().destroy({
        where: { id: transitAgentId },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      let result = await TransitAgentSevice.getTransitAgentInstance().findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
