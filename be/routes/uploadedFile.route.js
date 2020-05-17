const express = require('express');
const uploadedFile = require('../controllers/uploadedFile.controller');
const router = express.Router();

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

router.post('/uploadedFile', multipartMiddleware, (req, res) => {
    console.log(req.files)
    uploadedFile.create(req, res);
})

module.exports = router;