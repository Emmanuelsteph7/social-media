const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Register new user => api/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  let { userName, firstName, lastName, password } = req.body;

  if (!userName) {
    return next(new ErrorHandler("Please, enter your user name", 400));
  }

  if (!firstName) {
    return next(new ErrorHandler("Please, enter your first name", 400));
  }

  if (!lastName) {
    return next(new ErrorHandler("Please, enter your last name", 400));
  }

  if (!password) {
    return next(new ErrorHandler("Please, enter your password", 400));
  }

  // first check if there is an existing user
  let previousUser = await User.findOne({ userName });

  if (previousUser) {
    return next(new ErrorHandler("User name is already registered", 400));
  }

  try {
    // hash password
    password = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName,
      firstName,
      lastName,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 500));
  }
});

// login user => api/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { userName, password } = req.body;

  // return an error when no email is sent from client
  if (!userName) {
    return next(new ErrorHandler("Please, enter your user name", 400));
  }

  // return an error when no password is sent from client
  if (!password) {
    return next(new ErrorHandler("Please, enter your password", 400));
  }

  // finding user in database
  // the select method removes the password from the user object that is received

  let user;
  try {
    user = await User.findOne({ userName }).select("+password");
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }

  if (!user) {
    return next(new ErrorHandler("Invalid credentials", 401));
  }

  // check for correct password
  const passwordVerify = await user.comparePassword(password);

  if (!passwordVerify) {
    return next(new ErrorHandler("Invalid password", 401));
  }

  sendToken(user, 200, res);
});
