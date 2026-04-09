import { z } from "zod";

export const tripPreferenceValues = ["boat", "shore", "either"] as const;

export const contactServerSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  tripPreference: z.enum(tripPreferenceValues),
  availability: z.string().trim().min(1).max(2000),
  message: z.string().trim().min(1).max(10_000),
});

export type ContactInput = z.infer<typeof contactServerSchema>;
