import { carsServices} from "../../car";
import { carBodyMock} from "../mocks/car.mocks";
import { prismaMock } from "../mocks/prisma";
import { carDefaultExpects} from "../utils/carDefaultExpects";


describe("Unit test: get one car", ()=>{
    test("should  be able to get a car by ID successfully", async ()=>{

        prismaMock.car.findFirst.mockResolvedValue(carBodyMock);
        
        const data = await carsServices.getOne(carBodyMock.id);
        
        carDefaultExpects(data, carBodyMock)
    })
})