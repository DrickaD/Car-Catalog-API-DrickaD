import "express-async-errors";
import "reflect-metadata";
import helmet from "helmet";
import cors from "cors";
import express, { json } from "express";
import { carsRoutes } from "./car/index";
import { handleErrors } from "./error/handleErrors.middlewares";

export const app = express();
app.use(cors());

app.use(json());
app.use(helmet());

app.use("/cars", carsRoutes);

app.use(handleErrors);

