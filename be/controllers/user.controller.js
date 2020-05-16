const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (user) => {
    return User.create({
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt
    }).catch((err)=>
    {
        console.log(">>Error while user creating "+err);
        res.send();
    }).then((user) => {
        console.log(">> Created user: " + JSON.stringify(user, null, 4));
        return user;
    })
    .catch((err) => {
        console.log(">> Error while creating user: ", err);
        res.send();
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
