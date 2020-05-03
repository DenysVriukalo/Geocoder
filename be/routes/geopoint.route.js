const express = require('express');
const geopoint = require('../controllers/geopoint.controller');
const router = express.Router();

router.post('/geopoint', (req, res) => {
    geopoint.create(req, res);
})

module.exports = router;