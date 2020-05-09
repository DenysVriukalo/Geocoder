const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config({path: "./config/config.env"});
const geocodeRoute = require("./routes/geocodeRoute")
const db = require("./models");

const app = express();

//------------------------------
//db.sequelize.sync();

//Use this to update database structure
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/
//------------------------------

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use('/api', geocodeRoute);

app.get("/", (req, res) => {
    res.send('Hello World!')
});

const middleware = [
  express.json(),
  cors(corsOptions),  
  function (req, res, next) {
        console.log('Time:', Date.now());
        next();
    },

];
app.use(middleware);
app.use('/', require('./routes/geopoint.route.js'));
app.use('/', require('./routes/user.route.js'));
app.use('/', require('./routes/uploadedFile.route.js'));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
