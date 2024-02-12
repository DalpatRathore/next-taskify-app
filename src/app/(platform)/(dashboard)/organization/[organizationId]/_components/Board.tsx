import { deleteBoard } from "@/actions/deleteBoard";
import { Button } from "@/components/ui/button";
import FormDelete from "./FormDelete";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const deletedBoard = deleteBoard.bind(null, id);
  return (
    <form action={deletedBoard} className="flex gap-5 mt-5">
      <p className="text-2xl font-normal">Board Title: {title}</p>
      <FormDelete></FormDelete>
    </form>
  );
};
export default Board;
