import ProductHorizontalList from "@/components/ui/product-horizontal-list";
import SectionTitle from "@/app/(home)/components/section-title";
import { prismaClient } from "@/app/lib/prisma";
import ProductImages from "./components/product-images";
// import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductInfo from "./components/product-info";
// import ProductList from "@/components/ui/product-list";
// import SectionTitle from "@/components/ui/section-title";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products:{
            where: {
              slug: { 
                not: slug,
              }
            }
          }
        },
      },
    },
  });

  if (!product) return null;
  return (
    <div className="gab-8 flex flex-col pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <ProductHorizontalList products={product.category.products} />
    </div>
  );
};

export default ProductDetailsPage;
