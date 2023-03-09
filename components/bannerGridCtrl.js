const BannerGrid = require("../models/bannerGridModel");

const bannerGridCtrl = {
  createBannerGrid: async (req, res) => {
    try {
      const { posts } = req.body;
      if (!posts)
        return res.status(400).json({ msg: "please provide the post payload" });

      const filter = {};
      const bannerDocCount = await BannerGrid.countDocuments(filter);

      if (bannerDocCount === 4)
        return res.status(400).json({
          msg: "cant add extra bannerGrid. instead update the bannerGrid",
        });

      const newBannerGridContent = new BannerGrid({
        posts,
      });

      await newBannerGridContent.save();

      res.status(200).json({
        status: "success",
        message: "banner content successfully created",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getBannerGridContent: async (req, res) => {
    try {
      const bannerGrid = await BannerGrid.find().populate({
        path: "posts",
        populate: "category",
      });

      res.json({
        status: "success",
        data: bannerGrid,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getBannerGridContentById: async (req, res) => {
    try {
      const bannerGrid = await BannerGrid.findById({
        _id: req.params.id,
      }).populate({
        path: "posts",
        populate: {
          path: "category",
        },
      });

      res.json({
        status: "success",
        data: bannerGrid,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  updateBannerGridContent: async (req, res) => {
    try {
      await BannerGrid.findByIdAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );

      res.json({
        message: "update successful",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteBannerGrid: async (req, res) => {
    try {
      await BannerGrid.findByIdAndDelete({ _id: req.params.id });

      res.json({
        status: "success",
        message: "banner deleted successfully",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = bannerGridCtrl;
