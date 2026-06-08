import { Loader2Icon, ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext, useState } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice, formatPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? ""
);

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleFinishPurchaseClick = async () => {
    setIsLoading(true);
    try {
      const checkout = await createCheckout(products);
      const stripe = await stripePromise;

      if (!stripe) {
        toast.error("Erro ao conectar com o sistema de pagamento.");
        return;
      }

      await stripe.redirectToCheckout({ sessionId: checkout.id });
    } catch (error) {
      toast.error("Erro ao processar o pagamento. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-full flex-col gap-8">
      <Badge variant="heading">
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  product={computeProductTotalPrice(product as any) as any}
                  key={product.id}
                />
              ))
            ) : (
              <p className="text-center">Nenhum produto no carrinho</p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="mt-auto flex flex-col gap-3 border-t bg-background">
          <Separator />
          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {formatPrice(subtotal)} </p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>- R$ {formatPrice(totalDiscount)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs font-bold">
            <p>Total</p>
            <p>R$ {formatPrice(total)}</p>
          </div>
          <Button
            className="mt-7 font-bold uppercase"
            onClick={handleFinishPurchaseClick}
          >
            {isLoading ? (
              <Loader2Icon className="h-4 w-4 animate-spin" />
            ) : (
              "Finalizar compra"
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
