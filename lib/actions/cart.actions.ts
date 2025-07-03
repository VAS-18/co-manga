"use server";
import { auth } from "@/auth";
import { cookies } from "next/headers";
import { CartItem } from "@/types";
import { prisma } from "@/app/db/prisma";
import { cartItemSchema, insertCartSchema } from "../validator";
import { formatError, round2 } from "../utils";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";

//Calculate cart Prices

const calcPrice = (items: CartItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + Number(item.price) * item.qty, 0)
    ),
    shippingPrice = round2(itemsPrice > 1000 ? 0 : 150),
    taxPrice = round2(0.15 * itemsPrice),
    totalPrice = round2(itemsPrice + taxPrice + shippingPrice);

  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

export async function addItemToCart(data: CartItem) {
  try {
    const sessionCartId = (await cookies()).get("sessionCartId")?.value;
    if (!sessionCartId) throw new Error("Cart Session not found");

    const session = await auth();
    const userId = session?.user?.id ? (session.user.id as string) : undefined;
    const cart = await getMyCart();

    const item = cartItemSchema.parse(data);
    const product = await prisma.product.findFirst({
      where: { id: item.productId },
    });
    if (!product) throw new Error("Product not Found");

    if (!cart) {
      const prices = calcPrice([item]);
      const newCart = insertCartSchema.parse({
        userId,
        items: [item],
        sessionCartId,
        ...prices,
      });
      await prisma.cart.create({ data: newCart });
      revalidatePath(`/product/${product.slug}`);
      return {
        success: true,
        message: `${product.name} added to cart`,
      };
    } else {
      const existItem = (cart.items as CartItem[]).find(
        (x) => x.productId === item.productId
      );
      if (existItem) {
        if (product.stock < existItem.qty + 1) {
          throw new Error("Not Enough Stock");
        }
        (cart.items as CartItem[]).find(
          (x) => x.productId === item.productId
        )!.qty = existItem.qty + 1;
      } else {
        if (product.stock < 1) throw new Error("not enough stock");
        cart.items.push(item);
      }

      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: cart.items as Prisma.CartUpdateitemsInput[],
          ...calcPrice(cart.items as CartItem[]),
        },
      });
      revalidatePath(`/product/${product.slug}`);
      return {
        success: true,
        message: `${product.name} ${
          existItem ? "updated in" : "added to"
        } cart`,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message || "Could not add to the Cart",
    };
  }
}

export async function getMyCart() {
  const sessionCartId = (await cookies()).get("sessionCartId")?.value;
  if (!sessionCartId) throw new Error("Cart Session not found");

  const session = await auth();
  const userId = session?.user?.id ? (session.user.id as string) : undefined;

  const cart = await prisma.cart.findFirst({
    where: userId ? { userId } : { sessionCartId },
  });

  if (!cart) return undefined;

  return {
    ...cart,
    items: cart.items as CartItem[],
    itemsPrice: Number(cart.itemsPrice.toString()),
    totalPrice: Number(cart.totalPrice.toString()),
    shippingPrice: Number(cart.shippingPrice.toString()),
    taxPrice: Number(cart.taxPrice.toString()),
  };
}

export async function removeItemFromCart(productId: string) {
  try {
    const sessionCartId = (await cookies()).get("sessionCartId")?.value;
    if (!sessionCartId) throw new Error("Cart Session not found");

    //get product

    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    //get user cart

    const cart = await getMyCart();

    if (!cart) {
      throw new Error("Cart not found");
    }
    //check for items
    const exist = (cart.items as CartItem[]).find(
      (x) => x.productId === productId
    );

    if (!exist) {
      throw new Error("Item not found");
    }

    if (exist.qty === 1) {
      cart.items = (cart.items as CartItem[]).filter(
        (x) => x.productId !== exist.productId
      );
    } else {
      (cart.items as CartItem[]).find((x) => x.productId === productId)!.qty =
        exist.qty - 1;
    }

    //Update Cart in DB

    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: cart.items as Prisma.CartUpdateitemsInput[],
        ...calcPrice(cart.items as CartItem[]),
      },
    });


    revalidatePath(`/product/${product.slug}`);

    return {
      success: true,
      message: `${product.name} removed from cart`
    }

  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}
