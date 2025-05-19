"use client"

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CartProduct extends Product {
  quantity: number;
}
interface ICartContext {
  products: CartProduct[];
  cardTotalPrice: number;
  cardBasePrice: number;
  cardTotalDiscount: number;
  addProductToCart: (product: CartProduct) => void
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cardTotalPrice: 0,
    cardBasePrice: 0,
    cardTotalDiscount: 0,
    addProductToCart: () => {}
});

const CardProvider = ({children}: {children: ReactNode} ) => {
    const [products, setProducts] = useState<CartProduct[]>([]);

    const addProductToCart = (product: CartProduct) => {
        setProducts((prevProducts) => [...prevProducts, product]);
    }
    return ( 
        <CartContext.Provider value={{
            products,
            addProductToCart,
            cardTotalPrice: 0,
            cardBasePrice: 0,
            cardTotalDiscount: 0
        }}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CardProvider;