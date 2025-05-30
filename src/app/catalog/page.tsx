import { Badge } from "@/components/ui/badge";
import { LayoutGrid } from "lucide-react";
import { prismaClient } from "@/lib/prisma";
import CatagoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="p-5">
      <Badge
        variant="heading"
      >
        <LayoutGrid size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8 pt-5">
        {categories.map((category) => (
          <CatagoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
