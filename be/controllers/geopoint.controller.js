const db = require("../models");
const Geopoint = db.geopoint;
const Op = db.Sequelize.Op;
const geocoder = require("../utils/geocoder");

exports.create = (req, res) => {

        //Saving in DB  
        Geopoint.create({
            address: req.body.address,
            lat: req.body.lat,
            lon: req.body.lon,
            placeId: req.body.placeId,
            uploadedFileId: null
        }).catch((err)=>{
            console.log(">>Error whlie saving geopoint to DB "+err);
            res.send();
        })
        .then((geopoint) => {   
            //Response
            res.JSON(
                {
                    id: geopoint.id
                });
            
            return geopoint;
        }).catch((err) => {
            console.log(">> Error while sending geopoint id: ", err);
            res.send();
        });
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
    }).catch((err)=>{
        console.log(">>Error while searching geopoints "+err);
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