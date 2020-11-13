const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

const db = require("./models");

const app = express();

mongoose.connect('mongodb://localhost:27017/fitGeekDB', { useNewUrlParser: true });

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});