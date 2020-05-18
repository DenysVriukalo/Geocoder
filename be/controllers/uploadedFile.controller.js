const db = require("../models");
const UploadedFile = db.uploadedFile;
const Op = db.Sequelize.Op;
const fs = require('fs');
const fileParser = require("../utils/fileParser");
const geocoder = require("../utils/geocoder");
const Geopoint = db.geopoint;

exports.create = (req, res) => {
    const places = fileParser.parse(req.files.file.path);

    geocoder.batchGeocode(places)
    .catch((err)=>{
        console.log('>> Error while geocoding a batch: ', err);
    })
    .then((geocodedPlaces) => {
        let geopointsDB = [];
        let geopoints = [];

        try{
            for(let i = 0; i < geocodedPlaces.length; i++){
                let geopointDB = {
                    address: places[i],
                    lat: geocodedPlaces[i].value[0].latitude,
                    lon: geocodedPlaces[i].value[0].longitude,
                    placeId: geocodedPlaces[i].value[0].extra.googlePlaceId,
                };
                geopointsDB.push(geopointDB);
                let geopoint = {
                    address: places[i],
                    coords:{lat: geocodedPlaces[i].value[0].latitude,
                    lng: geocodedPlaces[i].value[0].longitude},
                    placeId: geocodedPlaces[i].value[0].extra.googlePlaceId,
                };
                geopoints.push(geopoint);
            }
        }
        catch(err){
            res.send();
            console.log('>> Error while geocoding a batch: ', err);
        }

        Geopoint.bulkCreate(geopointsDB)
        .catch((err) => {
            console.log(">> Error while creating geopoint: ", err);
        });

        UploadedFile.create({
            name: req.files.file.originalFilename,
            content: JSON.stringify(geocodedPlaces),
        }).catch((err) => {
            console.log(">> Error while creating uploaded file: ", err);
            res.send();
        });

        
        
       return res.json(geopoints);
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