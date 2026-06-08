"use server"

import { CartProduct } from "@/providers/cart"
import Stripe from "stripe"

export const createCheckout = async (products: CartProduct[]) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  })

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${process.env.HOST_URL}/api/order/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: process.env.HOST_URL,
    line_items: products.map((product) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: product.name,
          description: product.description,
          images: product.imageUrls,
        },
        unit_amount: Math.round(product.totalPrice * 100),
      },
      quantity: product.quantity,
    })),
  })

  return checkout
}
