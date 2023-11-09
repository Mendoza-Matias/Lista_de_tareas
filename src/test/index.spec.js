const request = require("supertest");
const app = require("../index");


describe("exist GET / ",()=>{

    test("the test respond with = 200 status code",async()=>{

        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    })
})