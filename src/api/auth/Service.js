const db = require("../../db/models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../../config");

module.exports = new (class AuthSevice {
  async login(username, password) {
    // find user from db
    let findUser = await db.User.findOne({ where: { username } });
    if (!findUser) return new Error("Not find User");
    // check password
    let isTrue = bcrypt.compareSync(password, findUser.password);
    // retruen pasword error
    if (!isTrue) return new Error("Password False");
    // data to jwt
    let data = {
      username: findUser.username,
      id: findUser.id,
    };

    let token = jwt.sign(data, config.jwt.keySerect, { expiresIn: "8h" });

    return {
      jwt: token,
      id: findUser.id,
    };
  }

  getInfo(jwtToken) {
    try {
      let info = jwt.verify(jwtToken, config.jwt.keySerect);
      return info;
    } catch (error) {
      throw error;
    }
  }
})();
