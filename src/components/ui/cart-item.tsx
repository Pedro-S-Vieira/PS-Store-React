import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  TrashIcon,
} from "lucide-react";
import { Button } from "./button";
import { useContext } from "react";
interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {

  const { removeProductFromCart, updateProductQuantity } = useContext(CartContext);

  const handleRemoveProductClick = () => {
    removeProductFromCart(product.id);
  }

  const handleIncrement = () => {
    updateProductQuantity(product.id, product.quantity + 1);
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      updateProductQuantity(product.id, product.quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] "
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercent > 0 && (
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button size="icon" variant="outline" className="h-8 w-8" onClick={handleDecrement}>
              <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-sm">{product.quantity}</span>

            <Button size="icon" variant="outline" className="h-8 w-8" onClick={handleIncrement}>
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button
        size="icon"
        variant="outline"
        onClick={handleRemoveProductClick}
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
