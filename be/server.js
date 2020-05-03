const express = require("express");
const bodyParser = require("body-parser");
const geocodeRoute = require("./routes/geocodeRoute")
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({path: '/config/config.env'})

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

const db = require("./models");

//------------------------------
db.sequelize.sync();

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

//Routes
app.use('/', require('./routes/geopoint.route.js'));
app.use('/', require('./routes/user.route.js'));
app.use('/', require('./routes/uploadedFile.route.js'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
