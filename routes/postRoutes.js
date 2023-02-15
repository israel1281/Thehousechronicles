const router = require("express").Router();
const postCtrl = require("../components/postCtrl");

router.post("/post", postCtrl.createPost);
router.get("/post", postCtrl.getPosts);

module.exports = router;
