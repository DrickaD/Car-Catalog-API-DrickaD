import { prisma } from "../../database/prisma";
import { createCarBodyMock } from "../mocks/car.mocks";
import { request } from "../utils/request";

describe("Integration test: delete car", ()=>{
    test("should be able to delete a car successfully", async ()=>{
        const car = await prisma.car.create({data: createCarBodyMock});
        await request.delete(`/cars/${car.id}`).expect(204);
    });

    test("should throw error when car is invalid", async ()=>{
        const data = await request
            .delete("/cars/fae8704e-fe27-4fd2-9628-ade1812e31db")
            .expect(404)
            .then((response) => response.body);

        expect(data.error).toBe("Car not found.")
    });
})