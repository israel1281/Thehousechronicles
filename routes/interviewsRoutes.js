const router = require("express").Router();
const interviewsCtrl = require("../components/interviewsCtrl");

router.post("/interviews", interviewsCtrl.createInterviews);
router.get("/interviews", interviewsCtrl.getInterviewsDoc);
router.get("/interviews/:id", interviewsCtrl.getInterviewsDocById);
router.put("/interviews/:id", interviewsCtrl.updateInterviews);
router.delete("/interviews/:id", interviewsCtrl.deleteInterviews);

module.exports = router;
