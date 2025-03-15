const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Laboratorios\_XimeWeb',
    password: '',
});

module.exports = pool.promise();