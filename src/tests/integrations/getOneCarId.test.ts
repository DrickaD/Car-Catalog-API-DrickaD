import { prisma } from "../../database/prisma";
import { createCarBodyMock } from "../mocks/car.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request"

describe("Integration test: get one car", ()=>{
    test("should be able to get one car by ID sucessfully", async()=>{

        const car = await prisma.car.create({data: createCarBodyMock});

        const data = await request
            .get(`/cars/${car.id}`)
            .expect(200)
            .then((response)=> response.body);

        carDefaultExpects(data, createCarBodyMock );
    })

    test("should throw error when car is invalid", async ()=>{
        const data = await request
            .delete("/cars/fae8704e-fe27-4fd2-9628-ade1812e31db")
            .expect(404)
            .then((response) => response.body);

        expect(data.error).toBe("Car not found.")
    });
})
