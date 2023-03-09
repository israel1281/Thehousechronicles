const mongoose = require("mongoose");

const interviewsSchema = new mongoose.Schema({
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
  link: {
    type: String,
  },
});

module.exports = mongoose.model("interviews", interviewsSchema);
