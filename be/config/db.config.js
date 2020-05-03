const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    HOST: "localhost",
    USER: process.env.MYSQL_DB_USER,
    PASSWORD: process.env.MYSQL_DB_PASSWORD,
    DB: "gerodot",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};