const db = require("../models");
const UploadedFile = db.uploadedFile;
const Op = db.Sequelize.Op;
const fs = require('fs');
const fileParser = require("../utils/fileParser");
const geocoder = require("../utils/geocoder");

exports.create = (req, res) => {
    /*var content = fileParser.parse(req.body.file.content);
    
    UploadedFile.create({
        name: req.body.file.name,
        content: content.join('\n'),
        userId: req.body.userId,
    }).catch((err) => {
        console.log(">> Error while creating uploaded file: ", err);
    });*/
    
    var geopoints = [];
    (async (content) => {
        content.forEach(geopoint => {

            console.log(geopoint.address);

            geocoder.geocode(geopoint.address)
            .then((geocodedPlace)=>{
                //Saving in DB
                console.log(geocodedPlace);
                var geopoint = {
                    address: geopoint.address,
                    lat: geocodedPlace[0].latitude,
                    lon: geocodedPlace[0].longitude,
                    placeId: geocodedPlace[0].extra.googlePlaceId,
                    //userId: req.body.userId,
                    uploadedFileId: req.body.uploadedFileId
                };
                geopoints.prototype.push(geopoint);
                Geopoint.create(geopoint).then((geopoint) => {
                    return geopoint;
                }).catch((err) => {
                    console.log(">> Error while creating geopoint: ", err);
                });
            })
        });    
    })(req.body.addresses);

    res.send(
        JSON.stringify(geopoints)
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