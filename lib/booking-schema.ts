import { z } from "zod";

import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function getBookingSchema(validation: Dictionary["bookingForm"]["validation"]) {
  return z.object({
    name: z.string().min(2, validation.name),
    email: z.email(validation.email),
    phone: z.string().optional(),
    trip: z.enum(["boat", "shore", "either"], {
      error: validation.trip,
    }),
    groupSize: z.enum(["1", "2", "3-4", "5+"], {
      error: validation.groupSize,
    }),
    availability: z.string().min(3, validation.availability),
    message: z.string().optional(),
  });
}

export type BookingValues = z.infer<ReturnType<typeof getBookingSchema>>;
