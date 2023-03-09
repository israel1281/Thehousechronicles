const router = require("express").Router();
const adminOverviewCtrl = require("../components/adminOverview");

router.get("/overview", adminOverviewCtrl.getTotalDataStored);

module.exports = router;
