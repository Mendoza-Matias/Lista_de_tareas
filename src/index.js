const express = require('express');
const v1TaskRouter = require("./v1/routes/taskRoutes");
require("dotenv").config();
const conectDatabase = require("./database/conectDb");
const app = express();

conectDatabase();

//Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello word")
})

//Routes
app.use("/api/v1/task", v1TaskRouter);

module.exports = app;