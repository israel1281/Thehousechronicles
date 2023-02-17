const router = require("express").Router();
const bannerSliderCtrl = require("../components/bannerSliderCtrl");

router.post("/banner-slider", bannerSliderCtrl.createBannerSlider);
router.get("/banner-slider", bannerSliderCtrl.getBannerSliderContent);
router.put("/banner-slider/:id", bannerSliderCtrl.updateBannerSliderContent);
router.get("/banner-slider/:id", bannerSliderCtrl.getBannerSliderContentById);

module.exports = router;
