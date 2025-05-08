"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductItemImg = ({ src, alt, ...props }: any) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="relative">
      <div className="flex aspect-square w-full  items-center  justify-center rounded-lg bg-accent hover:bg-[#121212] ">
        <Image
          {...props}
          src={src}
          alt={alt}
          width={0}
          height={0}
          objectFit="cover"
          className={cn(
            "h-auto max-h-[70%] w-auto max-w-[80%] transform object-contain duration-300 ease-in-out motion-safe:hover:scale-110",
            isLoading
              ? "scale-100 blur-xl grayscale"
              : "scale-100 blur-0 grayscale-0",
          )}
          layout="responsive"
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default ProductItemImg;