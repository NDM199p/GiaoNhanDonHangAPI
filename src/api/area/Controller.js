const AreaSevice = require("./Service");

module.exports = class AreaController {
  static async save(req, res) {
    let areaObject = req.body;
    try {
      let result = await AreaSevice.getAreaInstance().create(areaObject);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    let areaId = req.params.id;
    let areaObject = req.body;
    try {
      let result = await AreaSevice.getAreaInstance().update(areaObject, { where: { id: areaId } });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async remove(req, res) {
    let areaId = req.params.id;
    try {
      let result = await AreaSevice.getAreaInstance().destroy({
        where: { id: areaId },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      let result = await AreaSevice.getAreaInstance().findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
