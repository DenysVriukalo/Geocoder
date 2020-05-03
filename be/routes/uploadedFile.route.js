const express = require('express');
const uploadedFile = require('../controllers/uploadedFile.controller');
const router = express.Router();

router.post('/uploadedFile', (req, res) => {
    uploadedFile.create(req, res);
})

module.exports = router;