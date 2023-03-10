const router = require("express").Router();
const homeSectionsCtrl = require("../components/homeSectionsCtrl");

router.post("/home-section", homeSectionsCtrl.createHomeSections);
router.get("/home-section", homeSectionsCtrl.getHomeSections);
router.put("/home-section/:id", homeSectionsCtrl.updateHomeSection);
router.delete("/home-section/:id", homeSectionsCtrl.deleteHomesection);

module.exports = router;
