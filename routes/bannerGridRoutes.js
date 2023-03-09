const router = require("express").Router();
const bannerGridCtrl = require("../components/bannerGridCtrl");

router.post("/banner-grid", bannerGridCtrl.createBannerGrid);
router.get("/banner-grid", bannerGridCtrl.getBannerGridContent);
router.put("/banner-grid/:id", bannerGridCtrl.updateBannerGridContent);
router.get("/banner-grid/:id", bannerGridCtrl.getBannerGridContentById);
router.delete("/banner-grid/:id", bannerGridCtrl.deleteBannerGrid);

module.exports = router;
