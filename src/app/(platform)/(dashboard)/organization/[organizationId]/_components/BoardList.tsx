import HintTooltip from "@/components/HintTooltip";
import FormPopover from "@/components/form/FormPopover";
import { HelpCircle, User2 } from "lucide-react";

const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2"></User2>
        Your Boards
      </div>
      <div className="grid grid-cols2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <FormPopover side="right" sideOffset={10}>
          <div
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition "
            role="button"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">5 remaining</span>
            <HintTooltip
              sideOffset={40}
              description="Free workspace can have up to 5 open boards. For unlimited boards upgrade this workspace"
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]"></HelpCircle>
            </HintTooltip>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};
export default BoardList;
