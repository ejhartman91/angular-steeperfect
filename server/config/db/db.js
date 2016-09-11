let mysql = require('mysql');
let db = mysql.createPool({
    host: process.env.IP,
    user: process.env.C9_USER,
    password: '',
    database: 'c9'
});

module.exports = db;