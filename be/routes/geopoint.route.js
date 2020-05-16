const express = require('express');
const geopoint = require('../controllers/geopoint.controller');
const router = express.Router();

router.post('/geopoint/save', (req, res) => {
    geopoint.create(req, res);
})

router.post('/geopoint/hist/single', (req, res) => {
    geopoint.findAllSinglePage(req, res);
})

router.post('/geopoint/hist/all', (req, res) => {
    geopoint.findAll(req, res);
})

module.exports = router;