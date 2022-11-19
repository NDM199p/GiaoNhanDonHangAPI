require("dotenv").config();

const config = {
  cookie: {},
  bcrypt: { keySerect: process.env.BCRYPT_KEY_SERECT },
  jwt: {
    keySerect: process.env.JWT_KEY_SERECT,
  },
};

module.exports = config;
