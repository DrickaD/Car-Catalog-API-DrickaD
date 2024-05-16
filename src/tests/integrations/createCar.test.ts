import { carBodyInvalidMock, createCarBodyMock } from "../mocks/car.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request"

describe("Integration test: create car", ()=>{
    test("should be able to create a car sucessfully", async()=>{
        const data = await request
            .post("/cars")
            .send(createCarBodyMock)
            .expect(201)
            .then((response)=> response.body);

        expect(data.id).toBeDefined();
        carDefaultExpects(data, createCarBodyMock );
    });

    test("should generate an error when trying to create a task with an invalid body", async ()=>{
        const data = await request
            .post("/cars")
            .send(carBodyInvalidMock)
            .expect(400)
            .then((response) => response.body);
    });
});