require("dotenv").config();

const config = {};

config.NAME = process.env.DB_NAME;
config.HOST = process.env.DB_HOST;
config.PASSWORD = process.env.DB_PASSWORD;
config.USER = process.env.DB_USER;

module.exports = config;
