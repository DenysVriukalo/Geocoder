module.exports = {
    HOST: "localhost",
    USER: "guest",
    PASSWORD: "guestpass",
    DB: "gerodot",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};