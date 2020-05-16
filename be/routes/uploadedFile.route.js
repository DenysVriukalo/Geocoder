const express = require('express');
const uploadedFile = require('../controllers/uploadedFile.controller');
const router = express.Router();

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

router.post('/uploadedFile', multipartMiddleware, (req, res) => {
    uploadedFile.create(req, res);
})

module.exports = router;