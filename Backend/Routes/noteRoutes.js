const express = require("express");
const { getAllNotes, createNote, getNote, updateNote } = require("../Controllers/noteController");
const { protect } = require("../Controllers/authContoller");


const router = express.Router();

router.route("/").get( protect ,getAllNotes).post(createNote);
router.route("/:id").get(getNote).patch(updateNote); 
module.exports = router;