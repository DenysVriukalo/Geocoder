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
            address: req.body.address,
            lat: loc[0].latitude,
            lon: loc[0].longitude,
            placeId: loc[0].extra.googlePlaceId,
            //userId: req.body.userId,
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
        attributes: ['id', 'address'],
        where: { uploadedFileId: null //,userId: id
         },
        offset: ((index - 1) * 10),
        raw: true,
        order: [['createdAt', 'DESC']],
        limit: 10
    }).then(geopoints => {
        console.log(geopoints);
        res.send(JSON.stringify({ maxPages: maxPage, geopoints }))
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
  
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};