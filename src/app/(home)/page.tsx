import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductHorizontalList from "../../components/ui/product-horizontal-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-bannner";

export default async function Home() {
  const [deals, keyboards, mouses] = await Promise.all([
    prismaClient.product.findMany({
      where: {
        discountPercent: {
          gt: 0,
        },
      },
    }),
    prismaClient.product.findMany({
      where: {
        category: {
          slug: "keyboards",
        },
      },
    }),
    prismaClient.product.findMany({
      where: {
        category: {
          slug: "mouses",
        },
      },
    }),
  ]);

  return (
    <div className="flex flex-col gap-8 py-8">
      <picture>
        <source srcSet="/banner-home-00.png"  />
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês"
          className="w-full"
        />
      </picture>
<div className="min-[1200px]:px-8">

      <div className="min-[1200px]:px-4 min-[1200px]:pb-4">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductHorizontalList products={deals} />
      </div>

<div className="flex flex-col items-center justify-center min-[1200px]:flex-row py-5 ">
  <PromoBanner
    src="/banner-home-02-desktop.png"
    alt="Até 55% de desconto em mouses"
  />
  <div className="hidden min-[1200px]:block">
    <PromoBanner
      src="/banner-home-03-desktop.png"
      alt="Até 20% de desconto em fones"
    />
  </div>
</div>
      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductHorizontalList products={keyboards} />
      </div>

      <div className="hidden min-[1200px]:block py-5">
        <PromoBanner
          src="/banner-fretegrátis.png"
          alt="Frete grátis"
        />
      </div>
  <div className="hidden max-[1200px]:block py-5">

        <PromoBanner
          src="/banner-home-03-desktop.png"
          alt="Até 20% de desconto em fones"
        />

      </div>
      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductHorizontalList products={mouses} />
      </div>
</div>

    </div>
  );
}
