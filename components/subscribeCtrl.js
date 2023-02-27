const Subscribe = require("../models/subscribeModel");

const subscribeCtrl = {
  addSubscribers: async (req, res) => {
    try {
      const checkEmail = await Subscribe.findOne({ email: req.body.email });
      if (checkEmail)
        return res.status(422).json({ msg: "this email has been subscribed" });

      const newSubscription = new Subscribe({
        email: req.body.email,
      });

      await newSubscription.save();

      res.status(200).json({
        status: "success",
        message: "successfully subscribed to our newsletter",
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getSubscribers: async (req, res) => {
    try {
      const subscribers = await Subscribe.find().sort({ _id: -1 });

      res.status(200).json({
        status: "success",
        data: subscribers,
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = subscribeCtrl;
