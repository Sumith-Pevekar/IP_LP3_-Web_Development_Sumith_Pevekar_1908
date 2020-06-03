const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timeSchema = new Schema(
  {
    username: { type: String, required: true },

    tidate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Time = mongoose.model("Time", timeSchema);

module.exports = Time;
