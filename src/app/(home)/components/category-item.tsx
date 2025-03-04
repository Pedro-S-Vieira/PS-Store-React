import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CATEGORY_ICON } from "@/constants/category-icon";

interface CategoryItemProps {
  category: Category;
}

const CatagoryItem = ({ category }: CategoryItemProps) => {
 
  return (
    <Link href={`/catalog/${category.slug}`}>
      <Badge
        className="flex items-center justify-center gap-2 rounded-lg py-3"
        variant={"outline"}
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CatagoryItem;
