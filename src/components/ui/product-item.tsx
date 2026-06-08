"use client";

import { ProductWithTotalPrice, formatPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "@/providers/cart";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const CartAddIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 18.78V17.04H6.2C6.06 17 5.96 16.89 5.96 16.75L5.99 16.63L6.87 14.43H14.85C15.56 14.43 16.18 14.03 16.5 13.43L17.38 11.8C14.53 11.12 12.35 8.71 12.03 5.73H4.12L3.2 4H0V5.74H1.94L5.44 13.36L4.13 15.82C3.9 16.23 3.82 16.75 3.95 17.28C4.17 18.19 5.03 18.79 5.94 18.79H17.5V18.78Z" fill="currentColor"/>
    <path d="M16.18 20C15.1 20 14.23 20.9 14.23 22C14.23 23.1 15.1 24 16.18 24C17.26 24 18.14 23.1 18.14 22C18.13 20.9 17.25 20 16.18 20Z" fill="currentColor"/>
    <path d="M6.40001 20C5.32001 20 4.45001 20.9 4.45001 22C4.45001 23.1 5.32001 24 6.40001 24C7.48001 24 8.36001 23.1 8.36001 22C8.35001 20.9 7.47001 20 6.40001 20Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M19 0C16.238 0 14 2.23858 14 5C14 7.76203 16.2386 10 19 10C21.762 10 24 7.76142 24 5C24 2.23797 21.7614 0 19 0ZM18.4444 2.36249V4.44444H16.2236C15.9199 4.44444 15.6667 4.69318 15.6667 5C15.6667 5.30896 15.916 5.55556 16.2236 5.55556H18.4444V7.91529C18.4444 8.21902 18.6932 8.47222 19 8.47222C19.309 8.47222 19.5556 8.22288 19.5556 7.91529V5.55556H21.7764C22.0801 5.55556 22.3333 5.30682 22.3333 5C22.3333 4.69104 22.084 4.44444 21.7764 4.44444H19.5556V2.36249C19.5556 2.05876 19.3068 1.80556 19 1.80556C18.691 1.80556 18.4444 2.0549 18.4444 2.36249Z" fill="currentColor"/>
  </svg>
);

const CartSuccessIcon = () => (
  <svg width="16" height="16" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.0021 17.2153V15.6203H6.6523C6.52407 15.5837 6.43248 15.4828 6.43248 15.3545L6.45995 15.2445L7.26596 13.2278H14.5749C15.2252 13.2278 15.7931 12.8612 16.0862 12.3112L16.8922 10.817C14.2819 10.1937 12.2852 7.98449 11.9921 5.25283H4.7472L3.90456 3.66699H0.973633V5.26199H2.75051L5.9562 12.247L4.75636 14.502C4.5457 14.8778 4.47242 15.3545 4.59149 15.8403C4.79299 16.6745 5.58068 17.2245 6.41416 17.2245H17.0021V17.2153Z" fill="#2f9734ff"/>
    <path d="M15.7929 18.334C14.8037 18.334 14.0068 19.159 14.0068 20.1673C14.0068 21.1757 14.8037 22.0007 15.7929 22.0007C16.7821 22.0007 17.5881 21.1757 17.5881 20.1673C17.5789 19.159 16.7729 18.334 15.7929 18.334Z" fill="#2f9734ff"/>
    <path d="M6.83584 18.334C5.84665 18.334 5.0498 19.159 5.0498 20.1673C5.0498 21.1757 5.84665 22.0007 6.83584 22.0007C7.82502 22.0007 8.63103 21.1757 8.63103 20.1673C8.62187 19.159 7.81586 18.334 6.83584 18.334Z" fill="#2f9734ff"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M22.956 4.58333C22.956 7.11333 20.9044 9.16667 18.3764 9.16667C15.8485 9.16667 13.7969 7.11333 13.7969 4.58333C13.7969 2.05333 15.8485 0 18.3764 0C20.9044 0 22.956 2.05333 22.956 4.58333ZM15.702 5.01417L17.3323 6.74667L21.0418 2.805L20.5655 2.29167L17.3415 5.72L16.1966 4.50083L15.702 5.01417Z" fill="#2f9734ff"/>
  </svg>
);

const ProductItem = ({ product }: ProductItemProps) => {
  const { addProductToCart, products, removeProductFromCart } =
    useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);

  const isInCart = products.some((p) => p.id === product.id);

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAnimating(true);

    if (isInCart) {
      removeProductFromCart(product.id);
    } else {
      addProductToCart({ ...product, quantity: 1 });
    }

    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <Link href={`/product/${product.slug}`} className="w-full">
      <div className="flex w-full flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
            alt={`Uma imagem ilustrativa de um ${product.name}`}
          />

          {product.discountPercent > 0 && (
            <Badge className="absolute left-4 top-2 px-2 py-[2px]">
              <ArrowDownIcon size={12} /> {product.discountPercent}%
            </Badge>
          )}

          <button
            onClick={handleCartClick}
            className={`absolute right-2 top-2 flex items-center justify-center rounded-full p-1.5 transition-all duration-300 ${
              isInCart
                ? "bg-[#2f9734ff]/20"
                : "bg-primary/10 text-white hover:bg-primary/20"
            } ${isAnimating ? "scale-125" : "scale-100"}`}
            aria-label={
              isInCart ? "Remover do carrinho" : "Adicionar ao carrinho"
            }
          >
            {isInCart ? <CartSuccessIcon /> : <CartAddIcon />}
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercent > 0 ? (
              <>
                <p className="font-semibold">
                  R$ {formatPrice(product.totalPrice)}
                </p>
                <p className="text-xs line-through opacity-75">
                  R$ {formatPrice(Number(product.basePrice))}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold">
                R$ {formatPrice(product.totalPrice)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
