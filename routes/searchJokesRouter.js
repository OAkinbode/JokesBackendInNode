const express = require("express");

const routes = function (jokesmodel) {
  const controller = require("../controllers/jokescontroller")(jokesmodel);
  const uploadjokerouter = express.Router();

  uploadjokerouter.get("/getsearchedjoke", controller.getJokeFromKeywordAPI);
  return uploadjokerouter;
};

module.exports = routes;
