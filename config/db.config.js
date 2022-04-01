const mysql = require('mysql');

// Set database connection credentials
const config = {
    host     : '69.90.221.109',
    user     : 'mysma745_abhi',
    password : 'Mayu@7081',
    database : 'mysma745_cms'
};

// Create a MySQL pool
const pool = mysql.createPool(config);


// Export the pool
module.exports = pool;