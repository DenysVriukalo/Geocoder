module.exports = (sequelize, Sequelize) => {
    const Geopoint = sequelize.define(
        "geopoint",
        {
            address: {
                type: Sequelize.CHAR(200)
            },
            lat: {
                type: Sequelize.CHAR(15)
            },
            lon: {
                type: Sequelize.CHAR(15)
            },
            placeId: {
                type: Sequelize.CHAR(50)
            }
        },
        {
            hooks: {
                beforeCreate: function(geopoint, options) {
                    
                }
            }
        }
    );
  
    return Geopoint;
};