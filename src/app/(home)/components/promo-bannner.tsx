import Image from "next/image";
import { ImageProps } from "next/image";

const PromoBanner = ({alt,...props}: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
