module.exports = (sequelize, Sequelize) => {
    const Geopoint = sequelize.define("geopoint", {
        address: {
            type: Sequelize.CHAR(200)
        },
        lat: {
            type: Sequelize.CHAR(15)
        },
        lon: {
            type: Sequelize.CHAR(15)
        },
        place_id: {
            type: Sequelize.CHAR(50)
        },
    });
  
    return Geopoint;
};