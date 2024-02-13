import { Board } from "@prisma/client";
import BoardTitleForm from "./BoardTitleForm";

interface BoardNavbarProps {
  data: Board;
}

const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-24 flex items-center px-6 gap-x-4 text-white">
      <BoardTitleForm data={data}></BoardTitleForm>
    </div>
  );
};
export default BoardNavbar;
