import { Request, Response, NextFunction } from "express";
import { prisma } from "../database/prisma";
import { status } from "../utils/HTTP.statusCode";
import { AppError } from "../error/appError";



class IsCarIdValid{
    public execute = async ({params}: Request, res: Response, next: NextFunction): Promise<void> => {
        const idCar = params.id; 

        const currentCar = await prisma.car.findFirst({
            where: {id: idCar},
        });
        
        if(!currentCar){
            throw new AppError(status.HTTP_404_NOT_FOUND, "Car not found.");
        };
        
        res.locals = {...res.locals, currentCar};

        return next();
    }
 
}

export const isCarIdValid = new IsCarIdValid();