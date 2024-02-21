import { z } from "zod";

// validations
export const UserValidations = z.object({
  username: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(7, { message: "Must be 5 or more characters long" }), // Chaining test
  age: z.number().min(18).optional(),
});

// extract the inferred type
export type User = z.infer<typeof UserValidations>;
