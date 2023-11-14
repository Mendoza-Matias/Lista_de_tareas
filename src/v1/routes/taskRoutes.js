const express = require("express");
const taskController = require("../../controller/taskController")
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     task:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: the task name
 *         important:
 *           type: boolean
 *           description: the important task     
 *         description:
 *           type: string
 *           description: the description task
 *         date:
 *           type: date
 *           description: the date task
 *       example:
 *         name: Ir a comprar ropa
 *         important: false
 *         description: Ir de compras por la tarde
 *         date: 2023-11-14
 */


/**
 * @swagger
 * /api/v1/task/:
 *   get:
 *     summary: Get all tasks
 *     tags: 
 *       - task
 *     responses:
 *       '200':
 *         description: all task
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  $ref: '#/components/schemas/task'
 *       '404':
 *         description: No tasks found
 */

/**
 * @swagger
 * /api/v1/task/:taskId:
 *   get:
 *     summary: Get one task
 *     tags: 
 *       - task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description : the task Id  
 *     responses:
 *       '200':
 *         description: One task
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  items: 
 *                    $ref:'#/components/schemas/task' 
 *       '404':
 *         description: No task found
 */


router
    .get("/", taskController.getAllTask)

    .get("/:taskId", taskController.getOneTask)

    .post("/", taskController.createNewTask)

    .patch("/:taskId", taskController.updateOneTask)

    .delete("/:taskId", taskController.deleteOneTask)

module.exports = router;