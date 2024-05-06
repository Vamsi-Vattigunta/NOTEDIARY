const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExists = await User.findOne({ email });

  //bcrypt
  hashedPassword = await bcrypt.hash(password, 10);

  if (userExists) {
    res.status(404);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

module.exports = { registerUser };
