"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";

interface InfoProps {
  isPro: boolean;
}

const Info = ({ isPro }: InfoProps) => {
  const { organization, isLoaded } = useOrganization();
  if (!isLoaded) {
    return <Info.Skeleton></Info.Skeleton>;
  }
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          src={organization?.imageUrl!}
          alt="Organization"
          className="rounded-md object-cover"
        ></Image>
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization?.name}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CreditCard className="w-3 h-3 mr-1"></CreditCard>
          {isPro ? "Pro" : "Free"}
        </div>
      </div>
    </div>
  );
};
export default Info;

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="w-full h-full absolute"></Skeleton>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-[200px]"></Skeleton>
        <div className="flex items-center">
          <Skeleton className="h-4 w-4 mr-2"></Skeleton>
          <Skeleton className="h-4 w-[100px]"></Skeleton>
        </div>
      </div>
    </div>
  );
};
