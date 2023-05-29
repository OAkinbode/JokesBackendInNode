// const express = require("express");
// const app = express();
// const fs = require("fs");
// const mongoose = require("mongoose");
// const Jokes = require("./models/jokes");

// //connect to mongodb
// const dbURI =
//   "mongodb+srv://jokeuser:Chair2376man@cluster0.kau4c4u.mongodb.net/jokes-node?retryWrites=true&w=majority";

// mongoose
//   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => {
//     console.log("connected to db");
//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   })
//   .catch((err) => console.log(err));

// // register view engine
// // This tells the app to look into the views folder to find the ejs files.
// app.set("view engine", "ejs");

// // mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
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

// app.get("/all-blog", (req, res) => {
//   //use the model itself instead of an instance of the Joke model.
//   Jokes.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/", (req, res) => {
//   const jokes = [
//     { name: "Chickens", snippet: "Why does the chicken cross the road" },
//     { name: "Ducks", snippet: "Why do the ducks cross the pond" },
//     { name: "Antelope", snippet: "Why does the antelope cross the highway" },
//   ];
//   res.render("index", { jokes });
// });

// app.get("/about", (req, res) => {
//   // console.log(newJoke);
//   res.render("about");
// });

// app.get("/jokes/seed", (req, res) => {
//   res.render("jokes", {
//     message: "welcome to jokes page. I am testing passing values into the html",
//   });
// });

// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });
