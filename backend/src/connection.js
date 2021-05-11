const mysql = require("mysql2");

require("dotenv");

const con = mysql.createConnection({
    host: process.env.BD_HOST || "localhost",
    user: process.env.BD_USER || "root",
    password: process.env.BD_PASS || "root",
    database: process.env.BD_DATABASE || "PRODUTOS",
});

const query = (sql, callback) =>{
    return con.query(sql , callback)
}

module.exports = {
    con,
    query,
}