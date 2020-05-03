module.exports = (sequelize, Sequelize) => {
    const UploadedFile = sequelize.define("uploadedFile", {
        name: {
            type: Sequelize.CHAR(60)
        },
        content: {
            type: Sequelize.TEXT
        },
    });
  
    return UploadedFile;
};