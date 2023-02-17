const Trending = require("../models/trendingModel");

const trendingCtrl = {
  createTrendingPosts: async (req, res) => {
    try {
      const { posts } = req.body;
      if (!posts)
        return res.status(400).json({ msg: "posts payload must be provided " });

      const filter = {};

      const trendingPostsCount = await Trending.countDocuments(filter);
      if (trendingPostsCount === 1)
        return res.status(400).json({
          msg: "cant add extra trendingPosts. instead update the trendingPosts",
        });

      if ((trendingPostsCount < 1) | (trendingPostsCount === 0)) {
        const newTrendingPosts = new Trending({
          posts,
        });

        await newTrendingPosts.save();
        res.json({
          status: "success",
          message: "trendingPosts created successfully",
        });
      }
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getTrendingPosts: async (req, res) => {
    try {
      const trendingPosts = await Trending.find()
        .sort({ _id: -1 })
        .populate({
          path: "posts",
          populate: {
            path: "category",
          },
          limit: 4,
        });

      res.json({
        status: "success",
        data: trendingPosts,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getTrendingPostsById: async (req, res) => {
    try {
      const trending = await Trending.findById({ _id: req.params.id })
        .sort({ _id: -1 })
        .populate({
          path: "posts",
          populate: {
            path: "category",
          },
          limit: 4,
        });

      res.json({
        status: "success",
        data: trending,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = trendingCtrl;
