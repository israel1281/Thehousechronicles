const router = require("express").Router();
const categoryCtrl = require("../components/categoryCtrl");

router.post("/category", categoryCtrl.createCategory);
router.get("/category", categoryCtrl.getCategories)

module.exports = router;
