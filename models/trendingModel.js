const mongoose = require("mongoose");

const trendingShcema = new mongoose.Schema(
  {
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("trending", trendingShcema);
