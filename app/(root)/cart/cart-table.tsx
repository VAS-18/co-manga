"use client";
import { Cart } from "@/types";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { useTransition } from "react";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { ArrowRight, Loader, Minus, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const CartTable = ({ cart }: { cart?: Cart }) => {
  //   const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="p-4 mx-10">
      <h1 className="font-bold ">Shopping Cart</h1>
      {!cart || cart.items.length === 0 ? (
        <div>
          Too bad your cart is empty.
          <Link href="/">Go Get Some Mangas!!!</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-center">Quantity</TableHead>
                        <TableHead className="text-center">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cart.items.map((item) => (
                        <TableRow key={item.slug}>
                            <TableCell>
                                <Link href={`/product/${item.slug}`} className="flex items-center">
                                    <Image
                                    src={item.Image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                    >
                                    </Image>
                                    <span className="p-4">{item.name}</span>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTable;
