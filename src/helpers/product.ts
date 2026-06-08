import { Product } from '@prisma/client';
export interface ProductWithTotalPrice extends Product {
    totalPrice: number
}

export const formatPrice = (value: number): string => {
    return value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

export const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
    if (product.discountPercent <= 0) {
        return {
            ...product,
            totalPrice: Number(product.basePrice),
        }
    }

    const totalDiscount = Number(product.basePrice) * (product.discountPercent/100);

    return {
       ...product,
        totalPrice: Number(product.basePrice) - totalDiscount,
    }
}