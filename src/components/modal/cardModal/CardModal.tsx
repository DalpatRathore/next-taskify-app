"use client";

import { useCardModal } from "@/hooks/useCardModal";
import { Dialog, DialogContent } from "../../ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { CardWithList } from "@/types";
import { fetcher } from "@/lib/fetcher";
import Header from "./Header";
import Description from "./Description";
import Actions from "./Actions";

const CardModal = () => {
  const id = useCardModal(state => state.id);
  const isOpen = useCardModal(state => state.isOpen);
  const onClose = useCardModal(state => state.onClose);

  const { data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {!cardData ? (
          <Header.Skeleton></Header.Skeleton>
        ) : (
          <Header data={cardData}></Header>
        )}
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
          <div className="col-span-3">
            <div className="w-full space-y-6">
              {!cardData ? (
                <Description.Skeleton></Description.Skeleton>
              ) : (
                <Description data={cardData}></Description>
              )}
            </div>
          </div>
          {!cardData ? <Actions.Skeleton /> : <Actions data={cardData} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CardModal;
