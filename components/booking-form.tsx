"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Anchor, CheckCircle2, LoaderCircle, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { submitBooking } from "@/lib/actions";
import { bookingSchema, type BookingValues } from "@/lib/booking-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const tripOptions = [
  { value: "boat", label: "Boat fishing", hint: "6 AM – 1 PM" },
  { value: "shore", label: "Shore fishing", hint: "Half-day" },
  { value: "either", label: "Either", hint: "Not sure yet" },
] as const;

const groupOptions = ["1", "2", "3-4", "5+"] as const;

export function BookingForm() {
  const [status, setStatus] = React.useState<"idle" | "sent" | "error">("idle");
  const [pending, startTransition] = React.useTransition();

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      availability: "",
      message: "",
    },
  });

  const trip = form.watch("trip");
  const groupSize = form.watch("groupSize");
  const errors = form.formState.errors;

  const onSubmit = form.handleSubmit((values) => {
    startTransition(async () => {
      const result = await submitBooking(values);
      setStatus(result.ok ? "sent" : "error");
    });
  });

  if (status === "sent") {
    return (
      <div className="rounded-lg border-2 border-dashed border-buoy/50 bg-card p-10 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-foam text-buoy-deep">
          <CheckCircle2 className="size-7" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold">
          You&apos;re on the list
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you — we&apos;ll be in touch about the next available spot.
          Keep an eye on your inbox (and WhatsApp, if you left a number).
        </p>
        <p className="kicker mt-6 flex items-center justify-center gap-2 text-buoy-deep">
          <Anchor className="size-3.5" />
          Tight lines
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <FieldBlock label="Name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            {...form.register("name")}
          />
        </FieldBlock>
        <FieldBlock label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...form.register("email")}
          />
        </FieldBlock>
      </div>

      <FieldBlock
        label="WhatsApp / phone"
        htmlFor="phone"
        optional
        error={errors.phone?.message}
      >
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+351 …"
          {...form.register("phone")}
        />
      </FieldBlock>

      <FieldBlock label="Boat or shore?" error={errors.trip?.message}>
        <div
          role="radiogroup"
          aria-label="Boat or shore?"
          className="grid gap-3 sm:grid-cols-3"
        >
          {tripOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={trip === option.value}
              onClick={() =>
                form.setValue("trip", option.value, { shouldValidate: true })
              }
              className={cn(
                "rounded-md border px-4 py-3 text-left transition-colors",
                trip === option.value
                  ? "border-buoy bg-foam"
                  : "border-input bg-card hover:border-buoy/50"
              )}
            >
              <span className="block text-sm font-semibold">{option.label}</span>
              <span className="kicker mt-1 block text-[0.6rem] text-muted-foreground">
                {option.hint}
              </span>
            </button>
          ))}
        </div>
      </FieldBlock>

      <FieldBlock label="How many of you?" error={errors.groupSize?.message}>
        <div
          role="radiogroup"
          aria-label="How many of you?"
          className="flex flex-wrap gap-3"
        >
          {groupOptions.map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={groupSize === option}
              onClick={() =>
                form.setValue("groupSize", option, { shouldValidate: true })
              }
              className={cn(
                "min-w-14 rounded-full border px-4 py-2 font-mono text-xs tracking-widest transition-colors",
                groupSize === option
                  ? "border-buoy bg-foam"
                  : "border-input bg-card hover:border-buoy/50"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </FieldBlock>

      <FieldBlock
        label="When are you free?"
        htmlFor="availability"
        error={errors.availability?.message}
      >
        <Input
          id="availability"
          placeholder="e.g. weekends in August, or specific dates"
          aria-invalid={!!errors.availability}
          {...form.register("availability")}
        />
      </FieldBlock>

      <FieldBlock
        label="Message"
        htmlFor="message"
        optional
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          rows={4}
          placeholder="Anything we should know — questions, occasions, kids aboard…"
          {...form.register("message")}
        />
      </FieldBlock>

      {status === "error" ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          Something went wrong sending your request. Please try again, or
          message us on WhatsApp.
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={pending}
        className="h-12 w-full rounded-full bg-buoy font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-buoy-deep sm:w-auto sm:px-10"
      >
        {pending ? (
          <>
            <LoaderCircle data-icon="inline-start" className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send data-icon="inline-start" className="size-4" />
            Join the waiting list
          </>
        )}
      </Button>
    </form>
  );
}

function FieldBlock({
  label,
  htmlFor,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor?: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5">
      <Label htmlFor={htmlFor} className="kicker text-[0.66rem] text-ink-soft">
        {label}
        {optional ? (
          <span className="ml-1 normal-case tracking-normal text-muted-foreground">
            (optional)
          </span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
