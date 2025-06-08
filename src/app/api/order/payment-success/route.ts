
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const POST = async (request: Request) => {
  console.log("Webhook received");

  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    console.log('errp', request)
    return new NextResponse(null, { status: 400 });
  }

  const text = await request.text()

  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  if (event.type === "checkout.session.completed") {
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(event.data.object.id, {
      expand: ['line_items'],
    });
    const lineItems = sessionWithLineItems.line_items
    console.log(lineItems)
  }

  return NextResponse.json({ received: true })
}