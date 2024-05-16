import { carsServices} from "../../car";
import { carBodyMock, updateCarBodyMock } from "../mocks/car.mocks";
import { prismaMock } from "../mocks/prisma";


describe("Unit test: update car", ()=>{
    test("should  be able to upgrade a car successfully", async ()=>{

        const newCarExpect = {...carBodyMock, ...updateCarBodyMock};

        prismaMock.car.update.mockResolvedValue(newCarExpect);

        const data = await carsServices.update(updateCarBodyMock, carBodyMock.id );

        expect(data).toStrictEqual(newCarExpect);
    })
})


