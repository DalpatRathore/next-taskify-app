import { checkSubscription } from "@/lib/subscription";
import Info from "../_components/Info";
import { Separator } from "@/components/ui/separator";
import SubscriptionButton from "./_components/SubscriptionButton";

const BillingPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div className="w-full">
      <Info isPro={isPro}></Info>
      <Separator className="my-2"></Separator>
      <SubscriptionButton isPro={isPro}></SubscriptionButton>
    </div>
  );
};
export default BillingPage;
