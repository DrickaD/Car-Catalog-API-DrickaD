import { prisma } from "../../database/prisma";
import { createListCarsMock } from "../mocks/car.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request"

describe("Integration test: get many cars", ()=>{
    test("should be able to get many cars sucessfully", async()=>{

        await prisma.car.createMany({data: createListCarsMock})

        const data = await request
            .get("/cars")
            .expect(200)
            .then((response)=> response.body);

        expect(data).toHaveLength(2);

        expect(data[0].id).toBeDefined();
        carDefaultExpects(data[0], createListCarsMock[0] );

        expect(data[1].id).toBeDefined();
        carDefaultExpects(data[1], createListCarsMock[1] );
    })
})
