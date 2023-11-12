const request = require("supertest");
const app = require("../index");

describe("test with api /tast", () => {

    describe("GET All /", () => {

        let response;
        beforeEach(async () => {
            response = await request(app).get('/api/v1/task/').send();
        })


        it("response router with status 200", async () => {
            expect(response.status).toBe(200);
            expect(response.header['content-type']).toContain('json')
        });

        it("response router with data in Array", async () => {
            expect(Object.values(response.body)).toBeInstanceOf(Array);
        })


    });


    describe("GET One /api/v1/task/:taskId", () => {
        const id = "6550e6815d9ecfde39511705"

        it("the route works and searches for a task", async () => {

            const response = await request(app).get("/api/v1/task/:taskId").send(id);
            expect(response.status).toBe(200)
            expect(Object.values(response.body)).toBeInstanceOf(Array);
        })
    })

    describe("POST /api/v1/task/", () => {

        const newTask = { name: "Test", importance: "baja", description: "test" }

        it("the route works and create new task", async () => {
            const response = await request(app).post("/api/v1/task/").send(newTask);

            expect(response.status).toBe(200);
            expect(response.body.name).toBe(newTask.name);
            expect(response.body._id).toBeDefined();
        })

    })

    describe("PATCH /api/v1/task/:taskId", () => {

        const newTask = { name: "ultima actualizacion", importance: "baja", description: "test editado" }
        id="65511357efdc8c56424f8058";
       
        it("the route works and editing the task", async () => {
            const response = await request(app).patch(`/api/v1/task/${id}`).send(newTask);
            expect(response.status).toBe(200);
        })

    })

    describe("DELETE /api/v1/task/", () => {

        const id = "65511357efdc8c56424f8058";

        it("the route works and delete task", async () => {
            const response = await request(app).delete(`/api/v1/task/${id}`).send();
            expect(response.status).toBe(200);
        })


    })

});
