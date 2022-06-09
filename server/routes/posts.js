const express = require("express");
const {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likeAndUnlikePost,
  getTimelinePosts,
} = require("../controllers/postsController");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/").post(isAuthenticated, createPost);

router
  .route("/:id")
  .get(isAuthenticated, getPost)
  .put(isAuthenticated, updatePost)
  .delete(isAuthenticated, deletePost);

router.route("/like/:id").put(isAuthenticated, likeAndUnlikePost);
router.route("/timeline/posts").get(isAuthenticated, getTimelinePosts);

module.exports = router;
