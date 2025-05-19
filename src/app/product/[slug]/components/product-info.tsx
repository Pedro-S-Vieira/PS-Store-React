"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/providers/cart";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({
  product,
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart} = useContext(CartContext);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addProductToCart({...product, quantity});
  }
  return (
    <div className="flex flex-col p-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">{product.totalPrice.toFixed(2)}</h1>
        {product.discountPercent > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={12} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      {product.discountPercent > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
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
        Adicionar ao carrinho
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
