const express = require("express");
const {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unFollowUser,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(isAuthenticated, getUser)
  .put(isAuthenticated, updateUser)
  .delete(isAuthenticated, deleteUser);

router.route("/follow/:id").put(isAuthenticated, followUser);
router.route("/unfollow/:id").put(isAuthenticated, unFollowUser);
module.exports = router;
