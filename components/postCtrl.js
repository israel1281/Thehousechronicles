const Post = require("../models/PostModel");

const postCtrl = {
  createPost: async (req, res) => {
    try {
      const { title, author, image, category } = req.body;
      if (!title && !author && !image)
        return res
          .status(400)
          .json({ msg: "payload should have title, author, image" });

      const newPost = new Post({
        title,
        author,
        image,
        category,
      });

      await newPost.save();

      res.status(200).json({
        status: "success",
        message: "post successfully created",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getPosts: async (req, res) => {
    try {
      const post = await Post.find().sort({ _id: -1 });

      res.status(200).json({
        status: "success",
        data: post,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = postCtrl;
