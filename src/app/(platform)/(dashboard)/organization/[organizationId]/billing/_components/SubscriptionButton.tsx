"use client";

import { stripeRedirect } from "@/actions/stripeRedirect";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/useAction";
import { useProModal } from "@/hooks/useProModal";
import { toast } from "sonner";

interface SubscriptionButtonProps {
  isPro: boolean;
}
const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const proModal = useProModal();
  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: data => {
      window.location.href = data;
    },
    OnError: error => {
      toast.error(error);
    },
  });
  const onClick = () => {
    if (isPro) {
      execute({});
    } else {
      proModal.onOpen();
    }
  };

  return (
    <Button variant="primary" disabled={isLoading} onClick={onClick}>
      {isPro ? "Manage subscription" : "Upgrade to Pro"}
    </Button>
  );
};
export default SubscriptionButton;
