import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductHorizontalListProps {
  products: Product[];
}

const ProductHorizontalList = ({ products }: ProductHorizontalListProps) => {
  return (
    <div className="flex w-full space-x-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="w-[156px] max-w-[156px]">
          
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductHorizontalList;
