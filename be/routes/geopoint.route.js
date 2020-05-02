module.exports = app => {
    const geopoint = require("../controllers/geopoint.controller.js");
  
    var router = require("express").Router();
  
    router.post("/geopoint",  geopoint.create);
  };