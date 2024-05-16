import { Router } from "express";
import { BodyCarSchema, BodyUpdateCarSchema, carsControllers } from './index';
import { ValidateRequest, isCarIdValid } from '../middlewares/index';

export const carsRoutes = Router();



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



