const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

// POST Register new user
// route => api/register
router.route("/register").post(registerUser);

// POST Login user
// route => api/login
router.route("/login").post(loginUser);

module.exports = router;
