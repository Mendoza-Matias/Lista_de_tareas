const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Metada info

const options = {
    definition: {
        openapi: "3.0.0",
        info:
        {title: "taskApi", version: "1.0.0"},
    },
    apis: ["./src/v1/routes/taskRoutes.js"],
};

//Documentacion

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    //Formato visual
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    //Formato json
    app.get("/api/v1/docs.json",(req,res)=>{
        res.setHeader("Content-Type","application/json");
        res.send(swaggerSpec);
    });
    console.log(`Version 1 docs are available http://localhost:${port}/api/v1/docs`)

}

module.exports = {swaggerDocs};