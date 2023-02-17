const BannerSlider = require("../models/bannerSliderModel");

const bannerSliderCtrl = {
  createBannerSlider: async (req, res) => {
    try {
      const { posts } = req.body;
      if (!posts)
        return res.status(400).json({ msg: "please provide the post payload" });

      const filter = {};
      const bannerDocCount = await BannerSlider.countDocuments(filter);

      if (bannerDocCount === 1)
        return res.status(400).json({
          msg: "cant add extra bannerSlide. instead update the bannerslider",
        });

      const newBannerSliderContent = new BannerSlider({
        posts,
      });

      await newBannerSliderContent.save();

      res.status(200).json({
        status: "success",
        message: "banner content successfully created",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getBannerSliderContent: async (req, res) => {
    try {
      const bannerSlider = await BannerSlider.find().populate("posts");

      res.json({
        status: "success",
        data: bannerSlider,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getBannerSliderContentById: async (req, res) => {
    try {
      const bannerSlider = await BannerSlider.findById({
        _id: req.params.id,
      }).populate("posts");

      res.json({
        status: "success",
        data: bannerSlider,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  updateBannerSliderContent: async (req, res) => {
    try {
      await BannerSlider.findByIdAndUpdate(
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
};

module.exports = bannerSliderCtrl;
