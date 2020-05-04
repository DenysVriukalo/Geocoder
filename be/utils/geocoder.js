const NodeGeocoder = require('node-geocoder');
const dotenv = require("dotenv");
dotenv.config();


const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: 'https',
  apiKey: 'AIzaSyBsasqdW4fThLX6xcqctrssaY8379p6v6o',
  formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;