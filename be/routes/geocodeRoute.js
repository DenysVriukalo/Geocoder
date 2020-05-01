const express = require("express");
const { geoOneAddress, geoBatch } = require("../helpers/googleMaps");
const router = express.Router();

router.get("/geocodeAddress",  (req, res) => {
	console.log(req)
	geoOneAddress(req.query)
		.then(result => {
			res.send(result);
		})
		.catch(error => console.log({ error, res }));
});

router.get("/geocodeBatch",  (req, res) => {
	geoBatch(req.query)
		.then(result => {
			res.send(result);
		})
		.catch(error => console.log({ error, res }));
});

module.exports = router;