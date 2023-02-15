const mongoose = require("mongoose")

const bannerSliderSchema = new mongoose.Schema({
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts"
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model("bannerSlider", bannerSliderSchema)