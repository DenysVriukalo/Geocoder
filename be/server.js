const express = require("express");
const bodyParser = require("body-parser");
const geocodeRoute = require("./routes/geocodeRoute")
const cors = require("cors");

dotenv.config({path: '/config/config.env'})

const app = express();
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });

/*const db = require("./app/models");
db.sequelize.sync();*/

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', geocodeRoute);
// simple route
app.get("/", (req, res) => {
    res.end('Hello World!')
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
