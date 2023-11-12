const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    name: String,
    important: Boolean,
    description: String,
    date: Date
})

module.exports = mongoose.model("tasks", taskSchema);