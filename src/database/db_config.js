'use strict'

const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host    : process.env.DB_HOST,
    user    : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = {
    dbhost: process.env.DB_HOST,
	dbport: process.env.DB_PORT,
	dbuser: process.env.DB_USER,
	dbpass: process.env.DB_PASSWORD,
    dbname: process.env.DB_DATABASE,
	dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dbConn: dbConn
};