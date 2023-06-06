require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

dbconnect = (app) => {
  const username = process.env.username;
  const password = process.env.password;
  const cluster = process.env.cluster;

  const dbURI = `mongodb+srv://${username}:${password}@${cluster}?retryWrites=true&w=majority`;

  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
      // console.log("connected to db");
      app.listen(3000, () => {
        // console.log("Server is running on port 3000");
      });
    })
    .catch((err) => console.log(err));
};

module.exports = dbconnect;
