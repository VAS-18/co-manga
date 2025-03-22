"use server";

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { prisma } from "@/app/db/prisma";

export async function getLatestProducts() {
    const prisma = new PrismaClient();

    const data = await prisma.product.findMany({
        take: 5,
        orderBy: {createdAt: 'desc'},
    });

    return convertToPlainObject(data);
}

//get product by its slug

export async function getProductBySlug(slug: string){
    return await prisma.product.findFirst({
        where: {slug: slug}
    })
}
