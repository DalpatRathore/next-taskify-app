"use client";

import { stripeRedirect } from "@/actions/stripeRedirect";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAction } from "@/hooks/useAction";
import { useProModal } from "@/hooks/useProModal";
import Image from "next/image";
import { toast } from "sonner";

const ProModal = () => {
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
    execute({});
  };
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="aspect-video relative flex items-center justify-center">
          <Image
            src="/hero.svg"
            alt="hero"
            fill
            className="object-cover"
          ></Image>
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 p-6">
          <h2 className="font-semibold text-xl">
            Upgrade to Taskify Pro Today!
          </h2>
          <p className="text-xs font-semibold text-neutral-600">
            Explore the best of Taskify
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc">
              <li>Unlimited boards</li>
              <li>Lorem Ipsum </li>
              <li>Advanced cheklists</li>
              <li>Unlimited boards</li>
              <li>And many more!</li>
            </ul>
          </div>
          <Button
            variant="primary"
            className="w-full"
            onClick={onClick}
            disabled={isLoading}
          >
            Upgrade
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ProModal;
