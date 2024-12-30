import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent  ">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          alt={`Uma imagem ilustrativa de um ${product.imageUrls[0]}`}
        />

        {product.discountPercent > 0 && (
          <Badge className="absolute left-4 top-2 px-2 py-[2px]">
            <ArrowDownIcon size={12} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className=" overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm  font-semibold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
