const db = require("../models");
const Geopoint = db.geopoint;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req);

    //Geocode query
    //

    //DB insert
    console.log(req.body.address + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

    Geopoint.create({
        address: req.address,
        lat: null,
        lon: null,
        placeId: null,
        userId: null,
        uploadedFileId: null
    }).then((comment) => {
        console.log(">> Created geopoint: " + JSON.stringify(comment, null, 4));
        return comment;
    }).catch((err) => {
        console.log(">> Error while creating geopoint: ", err);
    });

    //Response
    res.send(
        JSON.stringify({
            id: 19,
            lat: 49.779120,
            lon: 36.112769,
            placeId: 'fd78ag9adf'
        })
    );
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