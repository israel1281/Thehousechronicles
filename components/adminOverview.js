const Subscribe = require("../models/subscribeModel");
const Post = require("../models/PostModel");
const Category = require("../models/categoryModel");

const adminOverview = {
  getTotalDataStored: async (req, res) => {
    try {
      const filter = {};
      const subscribers = await Subscribe.countDocuments(filter);
      const posts = await Post.countDocuments(filter);
      const categories = await Category.countDocuments(filter);

      res.json({
        status: "success",
        data: [
          {
            name: "Posts",
            value: posts,
          },
          {
            name: "Categories",
            value: categories,
          },
          {
            name: "Subscribers",
            value: subscribers,
          },
        ],
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = adminOverview;
