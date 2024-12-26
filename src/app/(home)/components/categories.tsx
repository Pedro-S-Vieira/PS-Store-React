import { prismaClient } from "@/app/lib/prisma";
import CatagoryItem from "./category-item";

const Catagories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="gab-x-4 grid grid-cols-2 gap-y-2">
      {categories.map((category) => (
        <CatagoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Catagories;
