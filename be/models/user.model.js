module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        full_name: {
            type: Sequelize.CHAR(60)
        },
        email: {
            type: Sequelize.CHAR(60)
        },
        password: {
            type: Sequelize.CHAR(45)
        },
    });
  
    return User;
};