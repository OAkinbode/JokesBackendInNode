const jokesmodel = require("../models/jokes");

const basicJokesRouter = require("./basicJokesRouter")(jokesmodel);
const searchJokesRouter = require("./searchJokesRouter")(jokesmodel);

console.log("routes is working at the moment");

module.exports = function (app) {
  app.use("/api", basicJokesRouter);
  app.use("/api", searchJokesRouter);
};
