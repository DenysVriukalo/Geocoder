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
    var pageIndex = req.body.pageindex;

    var maxPage = Geopoint.count({
        col: 'id',
        where: { uploadedFileId: null }
    }).catch((err) => {
        console.log(">> Error while counting geopoints: ", err);
        return 0;
    });

    Geopoint.findAll({
        attributes: ['id', 'address', 'lat', 'lon', 'placeId'],
        where: { uploadedFileId: null  },
        offset: ((index - 1) * 10),
        raw: true,
        order: [['createdAt', 'DESC']],
        limit: 10
    }).then(geopoints => {
        res.send(JSON.stringify({ maxPages: maxPage, geopoints: geopoints }))
    }).catch((err) => {
        console.log(">> Error while searching geopoints: ", err);
    });
};

exports.findOneGeopoint = (req, res) => {
    var geoID = req.body.id;
    Geopoint.findByPk(geoId)
        .then(geopoint => {
            res.send(JSON.stringify(geopoint));
        }).catch((err) => {
            console.log(">> Error while searching geopoint: ", err);
        });
} 

exports.findAll = (req, res) => {
    var pageIndex = req.body.pageindex;

    var maxPage = Geopoint.count({
        col: 'id'
    }).catch((err) => {
        console.log(">> Error while counting geopoints: ", err);
        return 0;
    });

    Geopoint.findAll({
        attributes: ['id', 'address', 'lat', 'lon', 'placeId'],
        offset: ((index - 1) * 10),
        raw: true,
        order: [['createdAt', 'DESC']],
        limit: 10
    }).then(geopoints => {
        res.send(JSON.stringify({ maxPages: maxPage, geopoints: geopoints }))
    }).catch((err) => {
        console.log(">> Error while searching geopoints: ", err);
    });
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};