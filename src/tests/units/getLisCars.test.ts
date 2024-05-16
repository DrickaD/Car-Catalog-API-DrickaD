import { carsServices} from "../../car";
import { getListCarsMock } from "../mocks/car.mocks";
import { prismaMock } from "../mocks/prisma";
import { carDefaultExpects} from "../utils/carDefaultExpects";


describe("Unit test: get many car", ()=>{
    test("should  be able to get many cars successfully", async ()=>{

        prismaMock.car.findMany.mockResolvedValue(getListCarsMock);
        
        const data = await carsServices.getList();

        expect(data).toHaveLength(getListCarsMock.length);
        carDefaultExpects(data[0], getListCarsMock[0]);
        carDefaultExpects(data[1], getListCarsMock[1]);
    })
})