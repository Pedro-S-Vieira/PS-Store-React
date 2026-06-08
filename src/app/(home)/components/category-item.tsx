import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CATEGORY_ICON } from "@/constants/category-icon";

interface CategoryItemProps {
  category: Category;
}

const CatagoryItem = ({ category }: CategoryItemProps) => {
 
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        className="flex items-center justify-center gap-2 rounded-md py-3 px-14 max-[1200px]:border-[1px] min-[1200px]:border-gray-600"
        variant={"outline"}
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CatagoryItem;
