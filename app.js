const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const Jokes = require("./models/jokes");
const jokesmodel = require("./models/jokes");

const jokesrouter = require("./routes/basicJokesRouter")(jokesmodel);

require("./startup/db.js")(app);

// register view engine
// This tells the app to look into the views folder to find the ejs files.
app.set("view engine", "ejs");

// mongoose and mongo sandbox routes
// app.get("/api/writejokes", (req, res) => {
//   const jokes = new Jokes({
//     title: "Chicken joke",
//     body: "Why does the chicken cross the road",
//   });

//   jokes
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

require("./routes/routes")(app);
// app.use("/api", jokesrouter);
