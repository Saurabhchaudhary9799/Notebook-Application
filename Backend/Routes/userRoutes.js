const express = require("express");
const User = require("../Models/userModel");
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
} = require("../Controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser); 
module.exports = router;
