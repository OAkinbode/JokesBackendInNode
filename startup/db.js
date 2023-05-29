const express = require("express");
const mongoose = require("mongoose");

dbconnect = (app) => {
  const dbURI =
    "mongodb+srv://jokeuser:Chair2376man@cluster0.kau4c4u.mongodb.net/jokes-node?retryWrites=true&w=majority";

  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
      console.log("connected to db");
      app.listen(3000, () => {
        console.log("Server is running on port 3000");
      });
    })
    .catch((err) => console.log(err));
};

module.exports = dbconnect;
