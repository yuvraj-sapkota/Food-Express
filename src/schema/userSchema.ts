import { z } from "zod";

// creating a schema for displaying the error message for signup page
export const userSignupSchema = z.object({
  fullname: z.string().min(1, "Fullname is invalid"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password should be atleast 8 character"),
  contact: z.string().min(10, "Number must be of 10 digit"),
});

export type SignupInputState = z.infer<typeof userSignupSchema>;


// creating a schema for displaying error message for Login page 
export const userLoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password should be atleast 8 character"),
});

export type loginInputState = z.infer<typeof userLoginSchema>;
