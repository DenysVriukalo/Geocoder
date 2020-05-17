const db = require("../models");
const UploadedFile = db.uploadedFile;
const Op = db.Sequelize.Op;
const fs = require('fs');
const fileParser = require("../utils/fileParser");
const geocoder = require("../utils/geocoder");
const Geopoint = db.geopoint;

exports.create = (req, res) => {
    var places = fileParser.parse(req.files.file.path);

    UploadedFile.create({
        name: req.files.file.originalFilename,
        content: places.join('\n'),
    }).catch((err) => {
        console.log(">> Error while creating uploaded file: ", err);
        res.send();
    });

    geocoder.batchGeocode(places)
    .catch((err)=>{
        console.log('>> Error while geocoding a batch: ', err);
        res.send();
    })
    .then((geocodedPlaces) => {
        console.log('');
        
        var geopoints = [];
        let obj = {};
        for(var i = 0; i < geocodedPlaces.length; i++){
            
            let geopoint = {
                address: places[i],
                lat: geocodedPlaces[i].value[0].latitude,
                lon: geocodedPlaces[i].value[0].longitude,
                placeId: geocodedPlaces[i].value[0].extra.googlePlaceId,
            };
            obj = geopoint;
            geopoints.push(geopoint);
        }
        try{
            
        }
        catch(err){
            res.send();
            console.log('>> Error while geocoding a batch: ', err);
        }

        Geopoint.bulkCreate(geopoints)
        .catch((err) => {
            console.log(">> Error while creating geopoint: ", err);
            res.send();
        });
        
        res.json(geopoints);
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