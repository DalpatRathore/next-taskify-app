import { Separator } from "@/components/ui/separator";
import Info from "./_components/Info";
import BoardList from "./_components/BoardList";

const OrganizationIdPage = async () => {
  return (
    <div className="w-full mb-20">
      <Info></Info>
      <Separator className="my-4"></Separator>
      <div className="px-2md:px-4">
        <BoardList></BoardList>
      </div>
    </div>
  );
};
export default OrganizationIdPage;
