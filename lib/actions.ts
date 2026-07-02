"use server";

import { bookingSchema, type BookingValues } from "@/lib/booking-schema";

export type BookingResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Receives waiting-list / contact requests. There is no mail backend wired
 * up yet, so submissions are logged server-side; swap the console.log for an
 * email or WhatsApp API call when credentials are available.
 */
export async function submitBooking(values: BookingValues): Promise<BookingResult> {
  const parsed = bookingSchema.safeParse(values);
  if (!parsed.success) {
    return { ok: false, error: "Please check the form and try again." };
  }

  console.log("[booking] new request", JSON.stringify(parsed.data));

  return { ok: true };
}
