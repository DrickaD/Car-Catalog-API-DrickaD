import { prisma } from "../../database/prisma";
import { createCarBodyMock, updateCarBodyMock } from "../mocks/car.mocks";
import { request } from "../utils/request"

describe("Integration test: update car", ()=>{
    test("should be able to update a car sucessfully", async()=>{

        const car = await prisma.car.create({data: createCarBodyMock});

        const data = await request
        .patch(`/cars/${car.id}`)
        .send(updateCarBodyMock)
        .expect(200)
        .then((response)=> response.body);
        
        const newCar = {...car, ...updateCarBodyMock}

        expect(data).toStrictEqual(newCar);
    });

    test("should throw error when car is valid", async ()=>{
        const data = await request
            .patch("/cars/fae8704e-fe27-4fd2-9628-ade1812e31db")
            .expect(404)
            .then((response) => response.body);

        expect(data.error).toBe("Car not found.")
    } )

})