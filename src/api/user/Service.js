const db = require("../../db/models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../../config");

class UserSevice {
  getUserInstance() {
    return db.User;
  }
}

module.exports = new UserSevice();
