const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (user) => {
    return User.create({
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt
    })
    .then((user) => {
        console.log(">> Created user: " + JSON.stringify(user, null, 4));
        return user;
    })
    .catch((err) => {
        console.log(">> Error while creating user: ", err);
    });
};

exports.findAll = (req, res) => {
  
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};
