import { z } from "zod";

// Schema for inserting products
export const insertProductsSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  brand: z.string().min(3, "Brand must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string().min(3, "Product must have atleast one image")),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: z.number(),
});

//Schema for user sign-in
export const signInFormSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

//Schema for user sign-up
export const signUpFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters"),

}).refine((data)=> data.password == data.confirmPassword, {
  message: "Password don't match",
  path: ['confirmPassword']
});

