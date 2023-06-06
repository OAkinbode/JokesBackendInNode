const jokesmodel = require("../models/jokes");

const basicJokesRouter = require("./basicJokesRouter")(jokesmodel);
const searchJokesRouter = require("./searchJokesRouter")(jokesmodel);

module.exports = function (app) {
  app.use("/api", basicJokesRouter);
  app.use("/api", searchJokesRouter);
};
