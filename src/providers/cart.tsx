"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}
interface ICartContext {
  products: CartProduct[];
  cardTotalPrice: number;
  cardBasePrice: number;
  cardTotalDiscount: number;
  total: number;
  subtotal: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (productId: string) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cardTotalPrice: 0,
  cardBasePrice: 0,
  cardTotalDiscount: 0,
  total: 0,
  subtotal: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  updateProductQuantity: () => {},
});

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>(
    JSON.parse(localStorage.getItem("@ps-store/cart-products") || "[]"),
  );

  useEffect(() => {
    localStorage.setItem("@ps-store/cart-products", JSON.stringify(products));
  }, [products]);
  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.quantity;
    }, 0);
  }, [products]);

  const totalDiscount = subtotal - total;

  const addProductToCart = (product: CartProduct) => {
    const productIsAlreadyInCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyInCart) {
      const updatedProducts = products.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
          };
        }
        return cartProduct;
      });
      setProducts(updatedProducts);
    } else setProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId),
    );
  };

  const updateProductQuantity = (productId: string, quantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity,
          };
        }
        return product;
      }),
    );
  };
  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        removeProductFromCart,
        updateProductQuantity,
        total,
        subtotal,
        totalDiscount,
        cardTotalPrice: 0,
        cardBasePrice: 0,
        cardTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;
