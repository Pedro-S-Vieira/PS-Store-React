import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/app/lib/prisma";
import ProductHorizontalList from "./components/product-horizontal-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  return (
    <div className="">
      <Image
        src="/banner-home-01.png"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto esse mês"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase"> Ofertas </p>
        <ProductHorizontalList products={deals} />
      </div>
      
      <Image
        src="/banner-home-02.png"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        alt="Até 55% de desconto em mouses"
      />
    </div>
  );
}
