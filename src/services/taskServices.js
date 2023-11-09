const taskModel = require("../models/task");

const getAllTask = async() => {
    return await taskModel.find();
}

const getOneTask = async(id) => {
    return await taskModel.findOne(id);
}

const createNewTask = async(task) => {
    return await taskModel.create(task);
}

const updateOneTask = async(id,task) => {
    return await taskModel.updateOne(id,task);
}

const deleteOneTask = async(id) => {
    return await taskModel.deleteOne(id);
} 

module.exports = {
    getAllTask,
    getOneTask,
    createNewTask,
    updateOneTask,
    deleteOneTask
}