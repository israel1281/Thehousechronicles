const router = require("express").Router();
const trendingCtrl = require("../components/trendingCtrl");

router.post("/trending", trendingCtrl.createTrendingPosts);
router.get("/trending", trendingCtrl.getTrendingPosts);
router.get("/trending/:id", trendingCtrl.getTrendingPostsById);
module.exports = router;
