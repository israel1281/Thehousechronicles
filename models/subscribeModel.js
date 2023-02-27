const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("subscribe", subscribeSchema);
