const app = require("./index");
const { swaggerDocs: v1SwaggerDocs } = require("./v1/swagger");

const PORT = process.env.PORT || 3000
 
app.listen(PORT, () => {
    console.log("Server active");
    v1SwaggerDocs(app,PORT);
})
