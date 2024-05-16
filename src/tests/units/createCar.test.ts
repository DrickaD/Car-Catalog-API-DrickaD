import { carsServices} from "../../car";
import { carBodyMock, createCarBodyMock } from "../mocks/car.mocks";
import { prismaMock } from "../mocks/prisma";
import { carDefaultExpects} from "../utils/carDefaultExpects";

describe("Unit test: create car", ()=>{
    test("should be able to create car sucessfully", async ()=>{
        prismaMock.car.create.mockResolvedValue(carBodyMock);
        const data = await carsServices.create(createCarBodyMock);

        expect(data.id).toBeDefined();
        carDefaultExpects(data, carBodyMock)
    })
})
