const express = require("express");

const routes = function (jokesmodel) {
  const controller = require("../controllers/jokescontroller")(jokesmodel);
  const uploadjokerouter = express.Router();

  uploadjokerouter
    .get("/getjoke", controller.getJokeFromGenericJokeAPI)
    .post("/postjoke", controller.postjoke)
    .delete("/deljoke", controller.deljoke);
  return uploadjokerouter;
};

module.exports = routes;
