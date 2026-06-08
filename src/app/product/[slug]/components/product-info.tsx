"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice, formatPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  Loader2Icon,
  TruckIcon,
} from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "sonner";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart, openCart , isCartOpen} = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await delay(300);

      await addProductToCart({ ...product, quantity });

      toast.success("Produto adicionado ao carrinho!");
      openCart();
    } catch {
      toast.error("Erro ao adicionar ao carrinho");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col p-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">R$ {formatPrice(product.totalPrice)}</h1>
        {product.discountPercent > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={12} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      {product.discountPercent > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {formatPrice(Number(product.basePrice))}
        </p>
      )}

      <div className="flex items-center gap-2">
        <Button size="icon" variant="outline" onClick={handleDecrement}>
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline" onClick={handleIncrement}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase" onClick={handleAddToCart}>
        {isLoading ? (
          <Loader2Icon className="h-4 w-4 animate-spin" />
        ) : (
          "Adicionar ao carrinho"
        )}
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-3">
          <TruckIcon size={20} />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">Correios®</span>
            </p>
            <p className="text-xs  text-[#8162FF]">
              <span className="font-bold">Envio para todo o Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
