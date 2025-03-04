import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";
import { link } from "fs";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CatagoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    mouses: <MouseIcon size={16} />,
    keyboards: <KeyboardIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
  };
  return (
    <Link href={`/catalog/${category.slug}`}>
      <Badge
        className="flex items-center justify-center gap-2 rounded-lg py-3"
        variant={"outline"}
      >
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CatagoryItem;
