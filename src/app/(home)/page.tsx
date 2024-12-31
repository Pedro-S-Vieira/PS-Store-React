import Categories from "./components/categories";
import { prismaClient } from "@/app/lib/prisma";
import ProductHorizontalList from "./components/product-horizontal-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-bannner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductHorizontalList products={deals} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductHorizontalList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>
    </div>
  );
}
