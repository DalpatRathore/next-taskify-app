import { db } from "@/lib/db";
import Board from "./_components/Board";
import Form from "./_components/Form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div>
      <Form></Form>
      <div className="space-y-2">
        {boards.map(board => {
          return (
            <Board key={board.id} title={board.title} id={board.id}></Board>
          );
        })}
      </div>
    </div>
  );
};
export default OrganizationIdPage;
