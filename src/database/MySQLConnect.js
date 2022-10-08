const mysql = require("mysql2");
const configs = require("../configs/index");

const MySQLConnection = mysql
  .createConnection({
    host: configs.DATABASE.HOST,
    password: configs.DATABASE.PASSWORD,
    user: configs.DATABASE.USER,
    database: configs.DATABASE.NAME,
  })
  .promise();

module.exports = MySQLConnection;
