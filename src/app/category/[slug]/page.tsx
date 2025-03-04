import { prismaClient } from "@/app/lib/prisma";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import { LayoutGrid } from "lucide-react";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }
  
  return (
    <div className="p-5 flex flex-col gap-8">
      <Badge variant="heading">
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {params.name}
      </Badge>
      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          ></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
