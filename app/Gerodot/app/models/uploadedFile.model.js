module.exports = (sequelize, Sequelize) => {
    const UploadedFile = sequelize.define("uploaded_file", {
        id: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.CHAR(60)
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        content: {
            type: Sequelize.TEXT
        },
        uploaded_at: {
            type: Sequelize.INTEGER
        }
    });
  
    return UploadedFile;
};