const LevelAreaSevice = require("./Service");

module.exports = class LevelAreaController {
  static async save(req, res) {
    let levelAreaObject = req.body;
    try {
      let result = await LevelAreaSevice.getLevelAreaInstance().create(levelAreaObject);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    let levelAreaId = req.params.id;
    let levelAreaObject = req.body;
    try {
      let result = await LevelAreaSevice.getLevelAreaInstance().update(levelAreaObject, {
        where: { id: levelAreaId },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async remove(req, res) {
    let levelAreaId = req.params.id;
    try {
      let result = await LevelAreaSevice.getLevelAreaInstance().destroy({
        where: { id: levelAreaId },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      let result = await LevelAreaSevice.getLevelAreaInstance().findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
