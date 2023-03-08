const router = require("express").Router();
const postCtrl = require("../components/postCtrl");

router.post("/post", postCtrl.createPost);
router.get("/post", postCtrl.getPosts);
router.get("/post/:id", postCtrl.getPostsById);
router.put("/post/:id", postCtrl.updatePost);
router.delete("/post/:id", postCtrl.deletePost);

module.exports = router;
