const Post = require("../models/PostModel");
const Category = require("../models/categoryModel");

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString }; //queryString = req.query

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    this.query.find(JSON.parse(queryStr));

    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const postCtrl = {
  createPost: async (req, res) => {
    try {
      const { title, author, image, content, category } = req.body;
      if (!title && !author && !image)
        return res
          .status(400)
          .json({ msg: "payload should have title, author, image" });

      const newPost = new Post({
        title,
        author,
        image,
        content,
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
      if (!req.query.category) {
        const features = new APIfeatures(
          Post.find().sort({ _id: -1 }).populate("category"),
          req.query
        )
          .filtering()
          .sorting()
          .paginating();

        const posts = await features.query;

        res.json({
          status: "success",
          count: posts.length,
          data: posts,
        });
      } else {
        const categoryPosts = await Post.find()
          .sort({ _id: -1 })
          .populate("category");

        const catPosts = categoryPosts.filter(
          (post) => post.category.name === req.query.category
        );

        const filteredPosts =
          catPosts && catPosts.length ? catPosts : categoryPosts;

        res.json({
          status: "success",
          count: filteredPosts.length,
          data: filteredPosts,
        });
      }
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getPostsById: async (req, res) => {
    try {
      const post = await Post.findById({ _id: req.params.id }).populate(
        "category"
      );

      res.json({
        status: "success",
        data: post,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = postCtrl;
