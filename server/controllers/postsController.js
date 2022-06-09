const Posts = require("../models/Posts");
const User = require("../models/User");
const mongoose = require("mongoose");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

exports.createPost = catchAsyncErrors(async (req, res, next) => {
  const body = req.body;
  const user = req.user;

  if (!body.description) {
    return next(new ErrorHandler("Please, enter the description", 400));
  }

  try {
    const postBody = { userId: user._id, ...req.body };
    const post = await Posts.create(postBody);

    res.status(201).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.getPost = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  try {
    const post = await Posts.findById(id);

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.getPosts = catchAsyncErrors(async (req, res, next) => {
  try {
    const posts = await Posts.find();

    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.updatePost = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const user = req.user;

  try {
    const post = await Posts.findById(id);

    if (user._id.toString() === post.userId.toString()) {
      const post = await Posts.findByIdAndUpdate(id, body, { new: true });

      res.status(200).json({
        success: true,
        data: post,
        message: "Post updated",
      });
    } else {
      return next(new ErrorHandler("Not authorized", 403));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.deletePost = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  const user = req.user;

  try {
    const post = await Posts.findById(id);

    if (user._id.toString() === post.userId.toString() || user.isAdmin) {
      await Posts.findByIdAndDelete(id);

      res.status(200).json({
        success: true,
        message: "Post deleted",
      });
    } else {
      return next(new ErrorHandler("User not authorized", 403));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.likeAndUnlikePost = catchAsyncErrors(async (req, res, next) => {
  const postId = req.params.id;
  const user = req.user;

  try {
    const post = await Posts.findById(postId);

    console.log(post);

    if (!post.likes.includes(user._id)) {
      await post.updateOne({ $push: { likes: user._id } });

      res.status(200).json({
        success: true,
        message: "Post liked",
      });
    } else {
      await post.updateOne({ $pull: { likes: user._id } });

      res.status(200).json({
        success: true,
        message: "Post unliked",
      });
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.getTimelinePosts = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;

  try {
    const currentUserPosts = await Posts.find({ userId: user._id });
    const followingPosts = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(user._id),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    const totalPosts = currentUserPosts
      .concat(...followingPosts[0].followingPosts)
      .sort((a, b) => b.createdAt - a.createdAt); // latest posts will appear first

    res.status(200).json({
      success: true,
      data: totalPosts,
    });
  } catch (error) {
    console.log(JSON.stringify(error));
    return next(new ErrorHandler(error.message, 500));
  }
});
