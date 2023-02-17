const mongoose = require("mongoose");

const bannerGridSchema = new mongoose.Schema(
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

module.exports = mongoose.model("bannerGrid", bannerGridSchema);
