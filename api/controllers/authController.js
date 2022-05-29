const User = require("../models/User");
const bcrypt = require("bcrypt");
const { createError } = require("../utils/error");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

//Register
const register = async (req, res, next) => {
  try {
    //hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //save
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    return next(createError(500, "Server Error"));
  }
};

//Login
const login = async (req, res, next) => {
  try {
    //find user by email
    const user = await User.findOne({ email: req.body.email });
    //if user exists check password
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      //if password match create token
      if (validPassword) {
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        //now saving the token in the cookies
        const { password, ...others } = user._doc;
        res
          .cookie("access_token", token, { httpOnly: true })
          .status(200)
          .json(others);
      } else {
        return next(createError(401, "Invalid password"));
      }
    } else {
      return next(createError(401, "User not found "));
    }
  } catch (error) {
    next(error);
  }
};

//export
module.exports = { register, login };
