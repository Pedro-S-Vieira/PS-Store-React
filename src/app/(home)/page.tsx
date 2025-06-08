import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductHorizontalList from "../../components/ui/product-horizontal-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-bannner";
import { useEffect, useState } from "react";

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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <picture>
        <source srcSet="/banner-home-00.png" media="(min-width: 1024px)" />
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês"
          className="w-full"
        />
      </picture>

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductHorizontalList products={deals} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-02-desktop.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductHorizontalList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-03-desktop.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductHorizontalList products={mouses} />
      </div>
    </div>
  );
}
