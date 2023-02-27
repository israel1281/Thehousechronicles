const router = require("express").Router();
const subscribeCtrl = require("../components/subscribeCtrl");

router.post("/subscribe", subscribeCtrl.addSubscribers);
router.get("/subscribe", subscribeCtrl.getSubscribers);

module.exports = router;
