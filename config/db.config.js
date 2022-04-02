const mysql = require('mysql');

require('dotenv').config();

// Set database connection credentials
const config = {
    host     : process.env.HOST_NAME,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
};

// Create a MySQL pool
const pool = mysql.createPool(config);


// Export the pool
module.exports = pool;