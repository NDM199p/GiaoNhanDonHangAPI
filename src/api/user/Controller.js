const UserSevice = require("./Service");

module.exports = class UserController {
  static async save(req, res) {
    let userObject = req.body;
    try {
      let result = await UserSevice.getUserInstance().create(userObject);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    let userId = req.params.id;
    let userObject = req.body;
    try {
      let result = await UserSevice.getUserInstance().update(userObject, { where: { id: userId } });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async remove(req, res) {
    let userId = req.params.id;
    try {
      let result = await UserSevice.getUserInstance().destroy({
        where: { id: userId },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      let result = await UserSevice.getUserInstance().findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
