import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Convert prisma object into a regular JS object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

//Format Error function

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
  if (error.name === "ZodError") {
    //handle Zod Error
    const fieldErrors = Object.keys(error.errors).map(
      (f) => error.errors[f].message
    );

    return fieldErrors.join(". ");
  } else if (
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    //Handle Prisma Error
    const field = error.meta?.target ? error.meta.target[0] : "Field";
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  } else {
    //Handle other Errors

    return typeof error.message === "string"
      ? error.message
      : JSON.stringify(error.message);
  }
}

//round number to 2 decimal places

export function round2(value: number | string) {
  if (typeof value === "number") {
    return Math.round(((value + Number.EPSILON) * 100) / 100);
  } else if (typeof value === "string") {
    return Math.round((Number(value + Number.EPSILON) * 100) / 100);
  } else {
    throw new Error("Value is not a number or string");
  }
}
