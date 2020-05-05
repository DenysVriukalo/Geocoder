const db = require("../models");
const Geopoint = db.geopoint;
const Op = db.Sequelize.Op;
const geocoder = require("../utils/geocoder");

exports.create = (req, res) => {

    //Geocode query
    geocoder.geocode(req.body.address)
    .then((loc)=>{
        //Saving in DB
        Geopoint.create({
            address: loc[0].formattedAddress,
            lat: loc[0].latitude,
            lon: loc[0].longitude,
            placeId: loc[0].extra.googlePlaceId,
            userId: req.body.userId,
            uploadedFileId: req.body.uploadedFileId
        }).then((geopoint) => {
            console.log(">> Created geopoint: " + JSON.stringify(geopoint, null, 4));        
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