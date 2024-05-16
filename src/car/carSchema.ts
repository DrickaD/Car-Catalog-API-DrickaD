import {z} from "zod";

export const ReturnCarSchema = z.object({
    id: z.string(),
    name: z.string().min(1),
    description: z.string().nullish(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().positive()
})

export const BodyCarSchema = ReturnCarSchema.omit({id: true});
export const BodyUpdateCarSchema = BodyCarSchema.partial();

 