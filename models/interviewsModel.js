const mongoose = require("mongoose");

const interviewsSchema = new mongoose.Schema({
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
});

module.exports = mongoose.model("interviews", interviewsSchema);
