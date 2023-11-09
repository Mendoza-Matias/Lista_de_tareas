
const getAllTask = (req,res)=>{
    res.send("Get all task")
}

const getOneTask = (req,res)=>{
    res.send("Get one task")
}

const createNewTask = (req,res)=>{
    res.set("Create new task")
}

const updateOneTask = (req,res)=>{
    res.send("Edit one task")
}

const deleteOneTask = (req,res)=>{
    res.send("Delete one task")
}

module.exports = {
    getAllTask,
    getOneTask,
    createNewTask,
    updateOneTask,
    deleteOneTask
}