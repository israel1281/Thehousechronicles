const Interviews = require("../models/interviewsModel");

const interviewsCtrl = {
  createInterviews: async (req, res) => {
    try {
      const { posts, link } = req.body;
      if (!posts)
        return res.status(400).json({ msg: "please provide all payload" });

      const filter = {};
      const interviewsDocCount = await Interviews.countDocuments(filter);

      if (interviewsDocCount === 6)
        return res.status(400).json({
          msg: "cant add extra bannerSlide. instead update the bannerslider",
        });

      const newInterviews = new Interviews({
        posts,
      });

      await newInterviews.save();

      res.status(200).json({
        status: "success",
        message: "created successfully",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getInterviewsDocById: async (req, res) => {
    try {
      const interviews = await Interviews.findById({
        _id: req.params.id,
      }).populate({
        path: "posts",
        populate: {
          path: "category",
        },
      });

      res.json({
        status: "success",
        data: interviews,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getInterviewsDoc: async (req, res) => {
    try {
      const interviews = await Interviews.find().populate({
        path: "posts",
        populate: {
          path: "category",
        },
      });

      res.json({
        status: "success",
        data: interviews,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  updateInterviews: async (req, res) => {
    try {
      await Interviews.findByIdAndUpdate(
        { _id: req.params.id },
        {
          ...req.body,
        }
      );

      res.json({
        status: "success",
        message: "successfully updated",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteInterviews: async (req, res) => {
    try {
      await Interviews.findByIdAndDelete({ _id: req.params.id });

      res.json({
        status: "success",
        message: "data successfully deleted",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = interviewsCtrl;
