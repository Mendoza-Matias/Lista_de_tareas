const express = require('express');
const v1TaskRouter = require("./v1/routes/taskRoutes");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello word")
})


app.use("/api/v1/task",v1TaskRouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server active");
})
