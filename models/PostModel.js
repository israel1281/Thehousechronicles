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
      type: Object,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("posts", postSchema);
