module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER
        },
        full_name: {
            type: Sequelize.CHAR(60)
        },
        email: {
            type: Sequelize.CHAR(60)
        },
        password: {
            type: Sequelize.CHAR(45)
        },
        created_at: {
            type: Sequelize.INTEGER
        }
    });
  
    return User;
};