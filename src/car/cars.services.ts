
import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TCreateBodyCar, TReturBodyCar, TUpdateBodyCar, ReturnCarSchema } from "./index";


@injectable()
export class CarsServices{
    public create = async (payload: TCreateBodyCar): Promise<TReturBodyCar> =>{
        const car = await prisma.car.create({data: payload});
        const newCar = ReturnCarSchema.parse(car); 
        return newCar;
    };

    public getList = async(brand?: string): Promise<Array<TReturBodyCar>> =>{

        if(!brand){  
            const getCarsList = await prisma.car.findMany();
            return getCarsList;
        }

        const getCarsList = await prisma.car.findMany({
            where: {brand: {equals: brand, mode:"insensitive"}}});

        return getCarsList; 
    };


    public getOne = async(idCars: string) : Promise<TReturBodyCar> =>{
        const currentCar = await prisma.car.findFirst({
            where:{id: idCars}
        });

        return  ReturnCarSchema.parse(currentCar);
    };


    public update = async (car: TUpdateBodyCar, idCars: string): Promise<TReturBodyCar>=>{
        const currentCar = await prisma.car.update({where: {id: idCars}, data: car});
        const carUpdate = ReturnCarSchema.parse(currentCar);
        return carUpdate;
    };

    public delete = async(idCars: string) => {
       return await prisma.car.delete({where: {id: idCars}});
    };

};

export const carsServices = new CarsServices(); 

