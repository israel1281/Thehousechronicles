const router = require("express").Router();
const postCtrl = require("../components/postCtrl");

router.post("/post", postCtrl.createPost);
router.get("/post", postCtrl.getPosts);
router.get("/all-post", postCtrl.getAllPosts)
router.get("/post/:id", postCtrl.getPostsById);
router.put("/post/:id", postCtrl.updatePost);
router.delete("/post/:id", postCtrl.deletePost);
router.get("/post", postCtrl.searchPost);
router.get("/filter-posts", postCtrl.adminFilterPost);

module.exports = router;
