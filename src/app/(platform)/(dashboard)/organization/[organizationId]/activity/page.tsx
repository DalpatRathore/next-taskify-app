import { Separator } from "@/components/ui/separator";
import Info from "../_components/Info";
import { Suspense } from "react";
import ActivityList from "./_components/ActivityList";

const ActivityPage = () => {
  return (
    <div className="w-full">
      <Info></Info>
      <Separator></Separator>
      <div className="my-2">
        <Suspense fallback={<ActivityList.Skeleton></ActivityList.Skeleton>}>
          <ActivityList></ActivityList>
        </Suspense>
        <></>
      </div>
    </div>
  );
};
export default ActivityPage;
