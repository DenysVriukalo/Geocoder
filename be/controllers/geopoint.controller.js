const db = require("../models");
const Geopoint = db.geopoint;
const Op = db.Sequelize.Op;
const geocoder = require("../utils/geocoder");

exports.create = (req, res) => {

    //Geocode query
    geocoder.geocode(req.body.address)
    .catch((ex)=>
    {
        console.log(">>Error while geocoding "+ex);
        res.send();
    })
    .then((geocodedPlace)=>{
        //Saving in DB
        Geopoint.create({
            address: req.body.address,
            lat: geocodedPlace[0].latitude,
            lon: geocodedPlace[0].longitude,
            placeId: geocodedPlace[0].extra.googlePlaceId,
            //userId: req.body.userId,
            uploadedFileId: req.body.uploadedFileId
        }).catch((ex)=>{
            console.log(">>Error whlie saving geopoint to DB "+ex);
            res.send();
        })
        .then((geopoint) => {   
            //Response
            res.JSON(
                {
                    id: geopoint.id,
                    lat: geopoint.lat,
                    lon: geopoint.lon,
                    placeId: geopoint.placeId
                });
            
            return geopoint;
        }).catch((err) => {
            console.log(">> Error while creating geopoint: ", err);
            res.send();
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
    }).catch((ex)=>{
        console.log(">>Error while searching geopoints "+ex);
        res.send();
    })
    .then(geopoints => {
        res.JSON({ maxPages: maxPage, geopoints: geopoints })
    }).catch((err) => {
        console.log(">> Error while sending geopoints: ", err);
        res.send();
    });
};

exports.findOneGeopoint = (req, res) => {
    var geoID = req.body.id;
    Geopoint.findByPk(geoId)
        .then(geopoint => {
            res.JSON(geopoint);
        }).catch((err) => {
            console.log(">> Error while searching geopoint: ", err);
            res.send();
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
    }).catch((err)=>
    {
        console.log(">> Error while searching geopoints: ", err);
        res.send();
    }).then(geopoints => {
        res.JSON({ maxPages: maxPage, geopoints: geopoints })
    }).catch((err) => {
        console.log(">> Error while sending geopoints: ", err);
        res.send();
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