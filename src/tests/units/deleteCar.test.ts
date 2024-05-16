import { carsServices} from "../../car";
import { carBodyMock } from "../mocks/car.mocks";

describe("Unite test: delete car", ()=>{
    test("should be able to delete a car successfully", async ()=>{
        await carsServices.delete(carBodyMock.id);
    })
})