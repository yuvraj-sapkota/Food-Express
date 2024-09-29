// import {z} from "zod";

// export const menuSchme = z.object({
//     name:z.string().nonempty({message:"name is required"}),
//     description:z.string().nonempty({message:"description is required"}),
//     number:z.number().min(0, {message:"Price cannot be negatice"}),
// })

import { z } from "zod";

export const menuSchema = z.object({
  name: z.string().nonempty({ message: "name is required" }),
  description: z.string().nonempty({ message: "description is required" }),
  price: z.number().min(0, { message: "Price cannot be negative" }),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => file?.size != 0, { message: "Image is required" }),
});

export type MenuFormSchema = z.infer<typeof menuSchema>;
