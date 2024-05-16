import { Request, Response} from "express";
import { status } from "../utils/HTTP.statusCode";
import { carsServices } from "./cars.services";

export class CarsControllers{
    public insertCar = async(req: Request, res: Response): Promise<Response>=>{
        const newCar = await carsServices.create(req.body)
        return res.status (status.HTTP_201_CREATED).json(newCar)
    }

    public getCarsList = async ({query}: Request, res: Response): Promise<Response>=>{
        const brand = query.brand? String(query.brand) : undefined;
        const listCars = await carsServices.getList(brand);
        return res.status(status.HTTP_200_OK).json(listCars);   
    }

    public getOneCar = async ({params}: Request, res: Response): Promise<Response>=>{
        const idCar = params.id
        const getTask = await carsServices.getOne(idCar);

        return res.status(status.HTTP_200_OK).json(getTask);
    }

    public updateCar = async (req: Request, res: Response): Promise<Response>=>{
        const {currentCar} = res.locals;
        const idCar = currentCar.id;
        const carBody = req.body;

        const updateCar = await carsServices.update(carBody, idCar)
        return res.status(status.HTTP_200_OK).json(updateCar);
    }
    
    public deleteCar = async (req: Request, res: Response): Promise<Response>=>{
        const idCar = req.params.id;
        await carsServices.delete(idCar);
        return res.status(status.HTTP_204_NO_CONTENT).json();
    }
}

export const carsControllers = new CarsControllers(); 
