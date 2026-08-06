import { z } from "zod";

export const customerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),

  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Enter a valid 10-digit phone number"
    ),

  company: z
    .string()
    .min(2, "Company name is required"),

  status: z.enum(["active", "inactive"]),

  notes: z.string().optional(),
});

export type CustomerFormData = z.infer<typeof customerSchema>;