const NodeGeocoder = require('node-geocoder');
const dotenv = require("dotenv");
dotenv.config();


const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: 'https',
  //fetch: customFetchImplementation,
  apiKey: process.env.GEOCODER_MAPS_API_KEY,
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

// Fetch one address

const geoSingle = async ({ address }) => {
	try {
		return await geocoder.geocode(address);
	}
	catch(error) {
		console.error(error);
	};	
};
//geoOneAddress('29 champs elysée paris');

// Batch geocode

const geoBatch = async ({ batch }) => {
	try {
		return await geocoder.batchGeocode(JSON.parse(batch));
	}
	catch(error) {
		console.error(error);
	};	
};

// geoBatch([
// 	'Kharkiv Ukraine',
// 	'Kiev Ukraine'
// ]);
module.exports = { geoSingle, geoBatch };