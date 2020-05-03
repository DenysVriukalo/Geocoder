const db = require("../models");
const UploadedFile = db.uploadedFile;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req)
    res.send(
        JSON.stringify({
            fileId: 65,
            geopoints: [
                {
                    id: 19,
                    lat: 49.779120,
                    lon: 36.112769,
                    placeId: 'fd78ag9adf'
                }
            ]
        })
    );
    

    //DB insert
    /*return UploadedFile.create({
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
    });*/
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