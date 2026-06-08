import { prismaClient } from "@/lib/prisma";
import CatagoryItem from "./category-item";

const Catagories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="gab-x-4 grid min-[1200px]:flex min-[1200px]:justify-between max-[1200px]:grid-cols-2 max-[1200px]:px-2 gap-y-2">
      {categories.map((category) => (
        <CatagoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Catagories;
