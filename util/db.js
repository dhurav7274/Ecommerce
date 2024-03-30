const mysql = require("mysql2");
// require("dotenv").config();

const conn = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  waitForConnections: true,
  connectionLimit: 10,

    // host: "localhost",
    // user: "root",
    // password: "root",
    // database: "e_commerce",
    // waitForConnections: true,
    // connectionLimit: 10,
});

module.exports = conn;
