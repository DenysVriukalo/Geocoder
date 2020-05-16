const db = require("../models");
const UploadedFile = db.uploadedFile;
const Op = db.Sequelize.Op;
const fs = require('fs');
const fileParser = require("../utils/fileParser");
const geocoder = require("../utils/geocoder");
const Geopoint = db.geopoint;

exports.create = (req, res) => {
    /*var content = fileParser.parse(req.body.file.content);
    
    UploadedFile.create({
        name: req.body.file.name,
        content: content.join('\n'),
        userId: req.body.userId,
    }).catch((err) => {
        console.log(">> Error while creating uploaded file: ", err);
    });*/

    const userId = 0;
    const fileId = 1;

    console.log(req.body.file);
    res.send();

    /*geocoder.batchGeocode(req.body.addresses)
    .then((geocodedPlaces) => {
        var geopoints = [];
        for(let i = 0; i < geocodedPlaces.length; i++){
            console.log(userId);
            console.log(fileId);
            console.log(geocodedPlaces[i].value[0]);

            let geopoint = {
                address: req.body.addresses[i].address,
                lat: geocodedPlaces[i].value[0].latitude,
                lon: geocodedPlaces[i].value[0].longitude,
                placeId: geocodedPlaces[i].value[0].extra.googlePlaceId,
                //userId: userId,
                //uploadedFileId: fileId
            };

            console.log(geocodedPlaces[i].value[0]);

            geopoints.push(geopoint);
        }
        
        Geopoint.bulkCreate(geopoints)
        .catch((err) => {
            console.log(">> Error while creating geopoint: ", err);
        });

        res.send(
            JSON.stringify(geopoints)
        );
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