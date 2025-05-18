"use client"

import { Product } from "@prisma/client";
import { createContext, ReactNode } from "react";

interface CardProduct extends Product {
  quantity: number;
}
interface ICardCContext {
  products: CardProduct[];
  cardTotalPrice: number;
  cardBasePrice: number;
  cardTotalDiscount: number;
}

const CardContext = createContext<ICardCContext>({
    products: [],
    cardTotalPrice: 0,
    cardBasePrice: 0,
    cardTotalDiscount: 0
});

const CardProvider = ({children}: {children: ReactNode} ) => {
    return ( 
        <CardContext.Provider value={{
            products: [],
            cardTotalPrice: 0,
            cardBasePrice: 0,
            cardTotalDiscount: 0
        }}>
            {children}
        </CardContext.Provider>
     );
}
 
export default CardProvider;