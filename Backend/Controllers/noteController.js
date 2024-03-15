const Note = require("../Models/noteModel");
const AppError = require("../Utils/appError");
const catchAsync = require("../Utils/catchAsync");

const getAllNotes= catchAsync(async(req, res,next)=>{
    const notes = await Note.find();
  res.status(200).json({ status: "success", results: notes.length, notes });
})

const createNote= catchAsync(async(req, res,next)=>{
    const note = await Note.create(req.body);
  res.status(201).json({ status: "success", note });
})

const getNote = catchAsync(async (req, res, next) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return next(new AppError(`No Note Found with that id`, 404));
    }
  
    res.status(200).json({ status: "success", note });
  });
  

  const updateNote = catchAsync(async (req, res, next) => {
    const newNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
  
    if (!newNote) {
      return next(new AppError(`No Note Found with that id`, 404));
    }
    res.status(200).json({ status: "success", newNote });
  });
  
module.exports = {getAllNotes,createNote , getNote,updateNote}