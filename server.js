const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

const db = require("./models");
require('./models/workout');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/fitGeekDB`);
//mongoose.connect('mongodb://localhost:27017/fitGeekDB', { useNewUrlParser: true });

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
//require("./public/api.js")(app);
require('./routes/api-routes')(app);
require("./Routes/html-routes")(app);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});