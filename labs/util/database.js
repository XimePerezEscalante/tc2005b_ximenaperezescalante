const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Laboratorios\_XimeWeb',
    password: '',
});


/* const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_username',
    password: 'your_password',
    host: 'localhost',
    port: 5432, // default Postgres port
    // database: 'your_database_name'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
}; */


module.exports = pool.promise();