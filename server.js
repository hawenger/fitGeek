const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

//require('./models/workout.js');

const app = express();
const db = require("./models");

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes

require('./routes/api-routes.js')(app);
require("./Routes/html-routes.js")(app);




app.listen(process.env.PORT || 3000);