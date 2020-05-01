module.exports = (sequelize, Sequelize) => {
    const Geopoint = sequelize.define("geopoint", {
        id: {
            type: Sequelize.INTEGER
        },
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
        uploaded_file_id: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    });
  
    return UploadedFile;
};