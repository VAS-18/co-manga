"use client";

import { Cart, CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Car, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { removeItemFromCart } from "@/lib/actions/cart.actions";
import React from "react";

const AddtoCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();

  const handleAddtoCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error("Not Added");
      return;
    }

    toast.success(res.message, {
      action: {
        label: "Go To Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  //check if item in cart
  const existItems =
    cart && cart.items.find((x) => x.productId === item.productId);

  const  handleRemoveFromCart = async() => {

    const res = await removeItemFromCart(item.productId);
    if(res){
      toast.success(res.message, {
        action: {
          label: "Go To Cart",
          onClick: () => router.push("/cart"),
        },
      });
    }
    else{
      toast.error("idk what happend");
    }
    return;
  };

  return existItems ? (
    <div className="flex items-center">
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        <Minus className="h-4 w-4"/>
      </Button>
      <span className="px-2">{existItems.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddtoCart}>
        <Plus className="h-4 w-4"/>
      </Button>
    </div>
  ) : (
    <div>
      <Button
        className="w-full cursor-pointer"
        type="button"
        onClick={handleAddtoCart}
      >
        <Plus className="mr-2 h-4 w-4" />
        Add To Cart
      </Button>
    </div>
  );
};

export default AddtoCart;
