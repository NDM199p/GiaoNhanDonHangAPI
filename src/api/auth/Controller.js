const AuthSevice = require("./Service");

module.exports = class AuthController {
  static async getAuth(req, res) {
    let loginBody = req.body;
    try {
      let result = await AuthSevice.login(loginBody.username, loginBody.password);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static getInfo(req, res) {}
};
