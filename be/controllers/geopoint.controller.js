const db = require("../models");
const Geopoint = db.geopoint;
const Op = db.Sequelize.Op;

exports.create = (geopoint) => {
    console.log(req)
    res.send(
        {
            id: 19,
            lat: '49°47\'01.6"N',
            lon: '36°06\'15.6"E',
            placeId: 'fd78ag9adf'
        } 
    );

    //DB insert
    /*return Geopoint.create({
        address: geopoint.address,
        lat: geopoint.lat,
        lon: geopoint.lon,
        placeId: geopoint.placeId,
        uploadedFileId: geopoint.uploadedFileId,
        userId: geopoint.userId
    })
    .then((geopoint) => {
        console.log(">> Created geopoint: " + JSON.stringify(geopoint, null, 4));
        return geopoint;
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