import { EllipsisVertical, ShoppingCart, User, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <div>
      <nav className="hidden md:flex  w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant={"ghost"}>
          <Link href={"/cart"}>
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <UserButton/>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className=" align-middle">
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
              <SheetTitle>Menu</SheetTitle>
              <Button asChild variant={"ghost"}>
                <Link href={"/cart"}>
                  <ShoppingCart /> Cart
                </Link>
              </Button>
              <UserButton/>
              <ModeToggle />
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </nav>
    </div>
  );
};

export default Menu;
