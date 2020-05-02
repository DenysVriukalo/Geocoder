module.exports = app => {
    const uploadedFile = require("../controllers/uploadedFile.controller.js");
  
    var router = require("express").Router();
  
    router.post("/uploadedFile",  uploadedFile.create);
};