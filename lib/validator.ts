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


// ****AUTH SCHEMAS****

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
  path: ['confirmPassword'],
});

// ****AUTH SCHEMA****











// ****CART SCHEMAS****

export const cartItemSchema = z.object({
  productId : z.string().min(1, 'Product is required'),
  name : z.string().min(1, 'Product name is required'),
  slug : z.string().min(1, 'Slug is required'),
  qty : z.number().int().nonnegative('Qty must be a positive number'),
  Image : z.string().min(1,'Product is required'),
  price: z.number().int().nonnegative('Price must be positive')
});

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: z.number().int().nonnegative('Price must be positive'),
  totalPrice: z.number().int().nonnegative('Total Price must be positive'),
  shippingPrice: z.number().int().nonnegative('Shipping Price must be positive'),
  taxPrice: z.number().int().nonnegative('Tax Price must be positive'),
  sessionCartId: z.string().min(1, 'session cart id is required'),
  userId: z.string().optional().nullable()
})