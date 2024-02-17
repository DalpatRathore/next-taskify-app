import { z } from "zod";

import { ActionState } from "@/lib/createSafeAction";

import { StripeRedirect } from "./schema";
export type InputType = z.infer<typeof StripeRedirect>;
export type ReturnTypeType = ActionState<InputType, string>;
