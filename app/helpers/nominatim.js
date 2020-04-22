const nominatim = require('nominatim-client');

// Set the global settings here
nominatim.global({
    useragent: "MyApp",             // The name of your application
    referer: 'http://example.com',  // The referer link
    email: 'user@example.com'       // The valid email
});

// The query
const query = {
    q: 'Avenue Monseigneur Vogt, Yaounde, Cameroon',
    addressdetails: '1'
};

nominatim.search(query, function(err, data) {
    if (err) {
        throw err;
    }
    
    console.log(data);
});