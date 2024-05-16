import { Router } from "express";
import { BodyCarSchema, BodyUpdateCarSchema, CarsControllers } from './index';
import { ValidateRequest, isCarIdValid } from '../middlewares/index';
import { container } from "tsyringe";
import { CarsServices } from "./cars.services";


export const carsRoutes = Router();

container.registerSingleton("carsServices", CarsServices);
const carsControllers = container.resolve(CarsControllers);

carsRoutes.post("/",
ValidateRequest.execute({body: BodyCarSchema}),
(req, res)=> carsControllers.insertCar(req, res)
);

carsRoutes.get("/",
(req, res)=> carsControllers.getCarsList(req, res)
);

carsRoutes.get("/:id", isCarIdValid.execute,
(req, res)=> carsControllers.getOneCar(req, res)
);

carsRoutes.patch("/:id",
isCarIdValid.execute,
ValidateRequest.execute({body: BodyUpdateCarSchema}),
(req, res)=> carsControllers.updateCar(req, res)
);

carsRoutes.delete("/:id",
isCarIdValid.execute,
(req, res)=> carsControllers.deleteCar(req, res)
);



