const express = require("express");
const taskController = require("../../controller/taskController")
const router = express.Router();

router
    .get("/",taskController.getAllTask)
    
    .get("/:taskId",taskController.getOneTask)

    .post("/",taskController.createNewTask)

    .patch("/:taskId",taskController.updateOneTask)

    .delete("/:taskId",taskController.deleteOneTask)

    module.exports = router;