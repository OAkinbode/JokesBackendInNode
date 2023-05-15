const express = require("express");
const app = express();
const fs = require("fs");

// register view engine
// This tells the app to look into the views folder to find the ejs files.
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  const jokes = [
    { name: "Chickens", joke: "Why does the chicken cross the road" },
    { name: "Ducks", joke: "Why do the ducks cross the pond" },
    { name: "Antelope", joke: "Why does the antelope cross the highway" },
  ];
  res.render("index", { jokes });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/jokes/seed", (req, res) => {
  res.render("jokes", {
    message: "welcome to jokes page. I am testing passing values into the html",
  });
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
