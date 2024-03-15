const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'A note must have a title'],
        unique:true,
    },
    description:{
        type:String,
        required:[true , "A Note must have a description"]
    }
},{
    timestamps:true,
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;