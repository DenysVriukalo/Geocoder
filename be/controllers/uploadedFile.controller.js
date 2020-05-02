const db = require("../models");
const UploadedFile = db.uploadedFile;
const Op = db.Sequelize.Op;

exports.create = (uploadedFile) => {
    return UploadedFile.create({
        name: uploadedFile.name,
        userId: uploadedFile.userId,
        content: uploadedFile.content,
        uploadedAt: uploadedFile.uploadedAt
    })
    .then((uploadedFile) => {
        console.log(">> Created uploaded file: " + JSON.stringify(uploadedFile, null, 4));
        return uploadedFile;
    })
    .catch((err) => {
        console.log(">> Error while creating uploaded file: ", err);
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