import * as z from "zod";

export const InputRoutesFormSchema = z.object({
  currentLocation: z
    .string()
    .min(4, { message: "That's not valid location.." })
    .max(26, { message: "That's too long destination name.." }),
  destination: z
    .string()
    .min(4, { message: "That's not valid location.." })
    .max(26, { message: "That's too long destination name.." }),
});
