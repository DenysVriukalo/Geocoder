const db = require("../models");
const Geopoint = db.geopoint;
const Op = db.Sequelize.Op;
const geocoder = require("../utils/geocoder");

exports.create = (req, res) => {

    //Geocode query
    console.log(req.body.address);
    geocoder.geocode(req.body.address)
    .then((geocodedPlace)=>{
        //Saving in DB
        console.log(geocodedPlace);
        Geopoint.create({
            address: req.body.address,
            lat: geocodedPlace[0].latitude,
            lon: geocodedPlace[0].longitude,
            placeId: geocodedPlace[0].extra.googlePlaceId,
            //userId: req.body.userId,
            uploadedFileId: req.body.uploadedFileId
        }).then((geopoint) => {   
            //Response
            res.send(
                JSON.stringify({
                    id: geopoint.id,
                    lat: geopoint.lat,
                    lon: geopoint.lon,
                    placeId: geopoint.placeId
                })
            );
            return geopoint;
        }).catch((err) => {
            console.log(">> Error while creating geopoint: ", err);
        });
    })
};



exports.findAllSinglePage = (req, res) => {
  
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