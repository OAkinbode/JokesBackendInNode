const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const Jokes = require("./models/jokes");
const jokesmodel = require("./models/jokes");
const cors = require("cors");

app.use(cors());

const jokesrouter = require("./routes/basicJokesRouter")(jokesmodel);

require("./startup/db.js")(app);

// register view engine
// This tells the app to look into the views folder to find the ejs files.
app.set("view engine", "ejs");

require("./routes/routes")(app);
// app.use("/api", jokesrouter);

// To run, use nodemon app
