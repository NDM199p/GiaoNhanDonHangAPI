const config = require("../config");

// {
//   user: {
//     id: null;
//   }
// }

class AuthencateMiddware {
  static async authencation(req, res, next) {
    const token = req.header("Authorization").replace("Bearer ", "");
    try {
      const data = jwt.verify(token, config.jwt.keySerect);
      if (!data.user) throw new Error("Token failed.");
      req.user = data.user;
      req.isAuthencation = true;
      //   req.user = user;
      req.token = token;
      next();
    } catch (error) {
      res.status(401).send({ error: "Not authorized to access this resource" });
    }
  }
}

module.exports = AuthencateMiddware;
