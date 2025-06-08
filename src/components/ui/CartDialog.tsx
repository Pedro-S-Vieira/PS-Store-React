"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import Cart from "./cart";

const CartDialog = () => {
  const { isCartOpen, closeCart } = useContext(CartContext);

  return (
    <>
      <Sheet open={isCartOpen} onOpenChange={(open) => !open && closeCart()}>
        <SheetContent className="w-[350px]">
          <Cart />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CartDialog;
