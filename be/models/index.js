const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },

    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci', 
      timestamps: true
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.uploadedFile = require("./uploadedFile.model.js")(sequelize, Sequelize);
db.geopoint = require("./geopoint.model.js")(sequelize, Sequelize);

db.user.hasMany(db.uploadedFile, { as: "uploadedFile" });
db.uploadedFile.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.user.hasMany(db.geopoint, { as: "geopoint" });
db.geopoint.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.uploadedFile.hasMany(db.geopoint, { as: "geopoint" });
db.geopoint.belongsTo(db.uploadedFile, {
  foreignKey: "uploadedFileId",
  as: "uploadedFile",
});

module.exports = db;
