const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: [],
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
