const express = require('express');
const v1TaskRouter = require("./v1/routes/taskRoutes");
const conectDatabase = require("./database/conectDb");
const dotenv = require("dotenv").config();
const app = express();

conectDatabase();
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello word")
})

//Routes
app.use("/api/v1/task",v1TaskRouter);

app.listen(PORT, () => {
    console.log("Server active");
})
