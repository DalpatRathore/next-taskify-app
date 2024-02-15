"use client";

import { Card } from "@prisma/client";

interface CardItemProps {
  data: Card;
  index: number;
}
const CardItem = ({ data, index }: CardItemProps) => {
  return (
    <div
      className="truncate border-2 border-transparent hover:border-black oy-2 px-3 text-sm bg-white rounded-md shadow-sm"
      role="button"
    >
      {data.title}
    </div>
  );
};
export default CardItem;
