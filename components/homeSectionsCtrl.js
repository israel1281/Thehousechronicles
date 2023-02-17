const HomeSections = require("../models/homeSectionsModel");

const homeSectionCtrl = {
  createHomeSections: async (req, res) => {
    try {
      const newHomeSection = new HomeSections({
        ...req.body,
      });

      await newHomeSection.save();

      res.json({
        message: "data created",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getHomeSections: async (req, res) => {
    try {
      const homesection = await HomeSections.find()
        .sort({ _id: -1 })
        .populate("category")
        .populate({
          path: "posts",
          populate: {
            path: "category",
          },
        });

      res.json(homesection);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  updateHomeSection: async (req, res) => {
    try {
      await HomeSections.findByIdAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );

      res.json({
        message: "section updated",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = homeSectionCtrl;
