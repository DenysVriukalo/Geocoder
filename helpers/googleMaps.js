const NodeGeocoder = require('node-geocoder');
const dotenv = require("dotenv");
dotenv.config();


const options = {
  provider: 'google',
  // Optional depending on the providers
  //fetch: customFetchImplementation,
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

// Fetch one address

const geoOneAddress = (qwery) => {
	try {
		geocoder.geocode(qwery).then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.log(error)
		})
	}
	catch(error) {
		console.error(error);
	};	
};
//geoOneAddress('29 champs elysée paris');

// Batch geocode

const geoBatch = (qwery) => {
	try {
		geocoder.batchGeocode(qwery).then((response) => {
			response.forEach(res =>console.log(res.value))
		})
		.catch((error) => {
			console.log(error)
		})
	}
	catch(error) {
		console.error(error);
	};	
};

// geoBatch([
// 	'Kharkiv Ukraine',
// 	'Kiev Ukraine'
// ]);
