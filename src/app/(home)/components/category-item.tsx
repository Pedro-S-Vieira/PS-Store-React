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

interface CategoryyItemProps {
  category: Category;
}

const CatagoryItem = ({ category }: CategoryyItemProps) => {
  const categoryIcon = {
    mouses: <MouseIcon size={16}/>,
    keyboards: <KeyboardIcon size={16}/>,
    headphones: <HeadphonesIcon size={16}/>,
    mousepads: <SquareIcon size={16}/>,
    monitors: <MonitorIcon size={16}/>,
    speakers: <SpeakerIcon size={16}/>,
  };
  return (
    <Badge
      className="flex items-center justify-center gap-2 rounded-lg py-3"
      variant={"outline"}
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CatagoryItem;
