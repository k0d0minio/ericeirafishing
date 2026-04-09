"use server";

import { contactServerSchema } from "@/lib/contact-schema";

export type ContactActionState =
  | { ok: true }
  | { ok: false; error: "validation" | "server" }
  | null;

export async function submitContactAction(
  data: unknown,
): Promise<ContactActionState> {
  const parsed = contactServerSchema.safeParse(data);

  if (!parsed.success) {
    return { ok: false, error: "validation" };
  }

  console.info("[contact]", parsed.data);

  return { ok: true };
}
