const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    image: {
      type: String,
    },
    content: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    iframe: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("posts", postSchema);
