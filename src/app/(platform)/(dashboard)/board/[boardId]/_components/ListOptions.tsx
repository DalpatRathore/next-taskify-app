"use client";

import { copyList } from "@/actions/copyList";
import { deleteList } from "@/actions/deleteList";
import FormButtton from "@/components/form/FormButtton";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useAction } from "@/hooks/useAction";
import { List } from "@prisma/client";
import { MoreHorizontal, X } from "lucide-react";
import { ElementRef, useRef } from "react";
import { toast } from "sonner";

interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}

const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute: executeDelete } = useAction(deleteList, {
    onSuccess: data => {
      toast.success(`List "${data.title}" deleted!`);
      closeRef.current?.click();
    },
    OnError: error => {
      toast.error(error);
    },
  });
  const { execute: executeCopy } = useAction(copyList, {
    onSuccess: data => {
      toast.success(`List "${data.title}" copied!`);
      closeRef.current?.click();
    },
    OnError: error => {
      toast.error(error);
    },
  });

  const onDelete = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeDelete({ id, boardId });
  };
  const onCopy = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeCopy({ id, boardId });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <MoreHorizontal className="h-4 w-4"></MoreHorizontal>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          List actions
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="w-4 h-4"></X>
          </Button>
        </PopoverClose>
        <Button
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          onClick={onAddCard}
          variant="ghost"
        >
          Add Card...
        </Button>
        <form action={onCopy}>
          <input type="hidden" name="id" id="id" value={data.id} />
          <input
            type="hidden"
            name="boardId"
            id="boardId"
            value={data.boardId}
          />
          <FormButtton
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant="ghost"
          >
            Copy list...
          </FormButtton>
        </form>
        <Separator></Separator>
        <form action={onDelete}>
          <input type="hidden" name="id" id="id" value={data.id} />
          <input
            type="hidden"
            name="boardId"
            id="boardId"
            value={data.boardId}
          />
          <FormButtton
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant="ghost"
          >
            Delete list...
          </FormButtton>
        </form>
      </PopoverContent>
    </Popover>
  );
};
export default ListOptions;
