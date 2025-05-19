import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      <Badge variant="heading">
        <ShoppingCartIcon size={16} />
        Catálogo
      </Badge>

      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default Cart;
