import { z } from "zod";
import { BodyCarSchema, ReturnCarSchema, BodyUpdateCarSchema } from "./carSchema";

export type TCreateBodyCar = z.infer<typeof BodyCarSchema>;
export type TReturBodyCar = z.infer<typeof ReturnCarSchema>;
export type TUpdateBodyCar = z.infer<typeof BodyUpdateCarSchema>;