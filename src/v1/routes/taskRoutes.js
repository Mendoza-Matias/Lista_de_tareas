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
 * info:
 *   title: Task API
 *   description: Simple CRUD application using Node.js with the Express framework and MongoDB, incorporating CRUD (Create, Read, Update, Delete) methods. The application follows the MVC *    * *   (Model-View-Controller) architecture pattern.
 *   version: 1.0.0
 * paths:
 *   /api/v1/task/:
 *     get:
 *       summary: Get all tasks
 *       responses:
 *         '200':
 *           description: A list of tasks
 *     post:
 *       summary: Create a new task
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/task'
 *       responses:
 *         '201':
 *           description: Task created successfully
 *
 *   /api/v1/task/:{taskId}:
 *     get:
 *       summary: Get one task by ID
 *       parameters:
 *         - in: path
 *           name: taskId
 *           required: true
 *           description: ID of the task
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: A single task
 *         '404':
 *           description: Task not found
 *     patch:
 *       summary: Update one task by ID
 *       parameters:
 *         - in: path
 *           name: taskId
 *           required: true
 *           description: ID of the task
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/task'
 *       responses:
 *         '200':
 *           description: Task updated successfully
 *         '404':
 *           description: Task not found
 *     delete:
 *       summary: Delete one task by ID
 *       parameters:
 *         - in: path
 *           name: taskId
 *           required: true
 *           description: ID of the task
 *           schema:
 *             type: string
 *       responses:
 *         '204':
 *           description: Task deleted successfully
 *         '404':
 *           description: Task not found
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
 *         name: Go shopping for clothes
 *         important: false
 *         description: Shop in the afternoon
 *         date: 2023-11-14
 */



router
    .get("/", taskController.getAllTask)

    .get("/:taskId", taskController.getOneTask)

    .post("/", taskController.createNewTask)

    .patch("/:taskId", taskController.updateOneTask)

    .delete("/:taskId", taskController.deleteOneTask)

module.exports = router;