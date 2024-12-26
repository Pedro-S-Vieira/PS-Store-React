"use client";

import Image from "next/image";
import Catagories from "./components/categories";
export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png "
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de desconto esse mês"
      />

      <div className="mt-8">
      <Catagories />
      </div>
    </div>
  );
}
