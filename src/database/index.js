const MySQLConnection = require("./MYSQLConnect");

const db = {};

db.getConnection = MySQLConnection;

module.exports = db;
