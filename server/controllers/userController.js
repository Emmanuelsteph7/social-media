const User = require("../models/User");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const bcrypt = require("bcryptjs");

exports.getUser = catchAsyncErrors(async (req, res, next) => {
  const id = req.user._id;

  try {
    const user = await User.findById(id);

    if (!user) {
      return next(new ErrorHandler("User not found.", 404));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});

exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  const id = req.user._id;
  const body = req.body;

  try {
    const user = await User.findById(id);

    if (req.user.isAdmin || user) {
      if (body.password) {
        body.password = await bcrypt.hash(body.password, 10);
      }

      const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });

      res.status(200).json({
        success: true,
        user: updatedUser,
      });
    } else {
      next(new ErrorHandler("Access denied.", 403));
    }
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const id = req.user._id;

  try {
    const user = await User.findById(id);

    if (req.user.isAdmin || user) {
      await User.findByIdAndDelete(id);

      res.status(200).json({
        success: true,
        message: "User deleted",
      });
    } else {
      next(new ErrorHandler("Access denied.", 403));
    }
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});

exports.followUser = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const currentUser = req.user;

  try {
    const userToFollow = await User.findById(id);

    if (!userToFollow.followers.includes(currentUser._id)) {
      // this is how to push to the array in mongoose
      await userToFollow.updateOne({ $push: { followers: currentUser._id } });
      await currentUser.updateOne({ $push: { following: id } });

      res.status(200).json({
        success: true,
        message: "User followed",
      });
    } else {
      next(new ErrorHandler("User is already followed by you", 403));
    }
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});

exports.unFollowUser = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const currentUser = req.user;

  try {
    const userToFollow = await User.findById(id);

    if (userToFollow.followers.includes(currentUser._id)) {
      await userToFollow.updateOne({ $pull: { followers: currentUser._id } });
      await currentUser.updateOne({ $pull: { following: id } });

      res.status(200).json({
        success: true,
        message: "User unfollowed",
      });
    } else {
      next(new ErrorHandler("User is already unfollowed by you", 403));
    }
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
});
