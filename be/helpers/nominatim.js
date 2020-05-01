const Nominatim = require('nominatim-geocoder');

const geocoder = new Nominatim({
	delay: 1000, // delay between requests
	secure: false, // enables ssl
	host:'nominatim.openstreetmap.org',
});
	
const getGeocode = async(qwery) => {
	try {
		geocoder.search( { q: qwery }).then((response) => {
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

const request = getGeocode("Kharkiv, Ukraine");