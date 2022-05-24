// requiring msql
const mysql = require('mysql');

// setting up mysql connection config
const config = {
    // get host from .env file, or use localhost
    host: process.env.DB_HOST || 'localhost',
    user: 'root',
    password: '1234',
    database: 'project'
};

// create and export a mysql database connection
module.exports = mysql.createConnection(config);