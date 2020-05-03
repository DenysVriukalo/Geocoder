module.exports = (sequelize, Sequelize) => {
    const UploadedFile = sequelize.define("uploaded_file", {
        name: {
            type: Sequelize.CHAR(60)
        },
        content: {
            type: Sequelize.TEXT
        },
    });
  
    return UploadedFile;
};