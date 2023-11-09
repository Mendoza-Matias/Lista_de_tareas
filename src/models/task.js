const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    
    name:String,
    importance : String,
    description: String
})

module.exports = mongoose.model("tasks",taskSchema);