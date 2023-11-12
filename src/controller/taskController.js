const taskServices = require("../services/taskServices");


const getAllTask = async (req, res) => {

    try {
        const allTask = await taskServices.getAllTask();
        res.status(200).json({tasks:allTask})
    } catch (error) {
        res.status(404).json(error)
    }

}

const getOneTask = async (req, res) => {

    try {
        const oneTask = await taskServices.getOneTask(req.params.id);
        res.status(200).json({oneTask:oneTask})
    } catch (error) {
        res.status(404).json(error)
    }

}

const createNewTask = async (req, res) => {

    try {
        const createdTask = await taskServices.createNewTask(req.body);
        res.satuts(201).json({task:createdTask});

    } catch (error) {
        res.status(400).json(error)
    }
}

const updateOneTask = async (req, res) => {

    try {
        const updatedTask = await taskServices.updateOneTask(req.params.id, req.body);
        res.status(200).json({taskUpdate:updatedTask});
    } catch (error) {
        res.status(404).json(error)
    }

}

const deleteOneTask = async (req, res) => {

    try {
        const deleteTask = await taskServices.deleteOneTask(req.params.id);
        res.status(201).json({taskDelete:deleteTask})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllTask,
    getOneTask,
    createNewTask,
    updateOneTask,
    deleteOneTask
}