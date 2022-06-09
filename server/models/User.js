const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // this means when the user is displayed, the password won't be sent along
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

// compare user password
// function keyword is used instead of arrow function because of the this keyword to access the userSchema properties
UserSchema.methods.comparePassword = async function (password) {
  //  bcrypt.compare compares the password from the client with the database
  // this will return a boolean
  return bcrypt.compare(password, this.password);
};

// Return JWT token
// Methods can be set on Schemas to help doing things related to that schema(s), and keeping them well organized.
// the first parameter in the sign is what you want to store as payload in the token
UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET);
};

module.exports = mongoose.model("User", UserSchema);
