const taskServices = require("../services/taskServices");


const getAllTask = async (req, res) => {

    try {
        const allTask = await taskServices.getAllTask();
        res.json({ data: allTask, status: "succes" })
    } catch (error) {
        res.status(500).json(error)
    }

}

const getOneTask = async (req, res) => {

    try {
        const oneTask = await taskServices.getOneTask(req.params.id);
        res.json({ data: oneTask, status: "succes" })
    } catch (error) {
        res.json(error)
    }

}

const createNewTask = async (req, res) => {

    try {
        const createdTask = await taskServices.createNewTask(req.body);
        res.json({ data: createdTask, status: "succes" });

    } catch (error) {
        res.status(500).json(error)
    }
}

const updateOneTask = async (req, res) => {

    try {
        const updatedTask = await taskServices.updateOneTask(req.params.id, req.body);
        res.json({ data: updatedTask, status: "succes" })
    } catch (error) {
        res.json(error)
    }

}

const deleteOneTask = async (req, res) => {

    try {
        const deleteTask = await taskServices.deleteOneTask(req.params.id);
        res.json({ data: deleteTask, message: "succes" })
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