'use strict';
require('dotenv').config();

module.exports = {
  db: {
    host: process.env.DB_HOST,
    port: 3306,
    url: '',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    connector: 'mysql',
  },
};