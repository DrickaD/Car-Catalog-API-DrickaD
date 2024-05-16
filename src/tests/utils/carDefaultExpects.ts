import { TReturBodyCar, TCreateBodyCar } from "../../car";

export const carDefaultExpects = (data: TReturBodyCar, expectData: TCreateBodyCar ) =>{
    expect(data.name).toBe(expectData.name);0
    expect(data.brand).toBe(expectData.brand);
    expect(data.year).toBe(expectData.year);
    expect(data.km).toBe(expectData.km);
}