"use server";

import { getBookingSchema, type BookingValues } from "@/lib/booking-schema";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export type BookingResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Receives waiting-list / contact requests. There is no mail backend wired
 * up yet, so submissions are logged server-side; swap the console.log for an
 * email or WhatsApp API call when credentials are available.
 */
export async function submitBooking(
  values: BookingValues,
  validation: Dictionary["bookingForm"]["validation"]
): Promise<BookingResult> {
  const parsed = getBookingSchema(validation).safeParse(values);
  if (!parsed.success) {
    return { ok: false, error: validation.formInvalid };
  }

  console.log("[booking] new request", JSON.stringify(parsed.data));

  return { ok: true };
}
