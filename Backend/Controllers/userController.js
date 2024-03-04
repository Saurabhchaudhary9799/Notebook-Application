const User = require("../Models/userModel");
const AppError = require("../Utils/appError");
const catchAsync = require("../Utils/catchAsync");

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ status: "success", results: users.length, users });
});

const createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({ status: "success", user });
});

const getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError(`No User Found with that id`, 404));
  }

  res.status(200).json({ status: "success", user });
});

const updateUser = catchAsync(async (req, res, next) => {
  const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!newUser) {
    return next(new AppError(`No User Found with that id`, 404));
  }
  res.status(200).json({ status: "success", newUser });
});

module.exports = { getAllUsers, createUser, getUser, updateUser };
