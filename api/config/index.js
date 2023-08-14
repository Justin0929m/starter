require("dotenv").config();
const { createPool } = require("mysql");

const connection = createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  multipleStatements: true,
  connectionLimit: 30,
});

module.exports = connection;
