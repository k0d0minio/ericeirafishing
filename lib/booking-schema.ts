import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Please tell us your name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  trip: z.enum(["boat", "shore", "either"], {
    error: "Choose boat, shore, or either",
  }),
  groupSize: z.enum(["1", "2", "3-4", "5+"], {
    error: "How many of you are coming?",
  }),
  availability: z.string().min(3, "Tell us when you're free"),
  message: z.string().optional(),
});

export type BookingValues = z.infer<typeof bookingSchema>;
