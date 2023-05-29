const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// The reason I put the name Blog here is because the mongodb I created has this as the name of the field
const Jokes = mongoose.model("Jokes", jokesSchema);
module.exports = Jokes;
