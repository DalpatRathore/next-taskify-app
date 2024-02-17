import { Separator } from "@/components/ui/separator";
import Info from "../_components/Info";
import { Suspense } from "react";
import ActivityList from "./_components/ActivityList";
import { checkSubscription } from "@/lib/subscription";

const ActivityPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro}></Info>
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
