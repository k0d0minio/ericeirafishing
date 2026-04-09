"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { submitContactAction } from "@/lib/actions/contact";
import { tripPreferenceValues } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const selectClassName = cn(
  "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
);

function buildContactSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().trim().min(1, t("validation.nameRequired")).max(200),
    email: z
      .string()
      .trim()
      .min(1, t("validation.emailInvalid"))
      .email(t("validation.emailInvalid"))
      .max(320),
    tripPreference: z
      .string()
      .min(1, t("validation.tripPreferenceRequired"))
      .pipe(
        z.enum(tripPreferenceValues, {
          error: t("validation.tripPreferenceRequired"),
        }),
      ),
    availability: z
      .string()
      .trim()
      .min(1, t("validation.availabilityRequired"))
      .max(2000),
    message: z
      .string()
      .trim()
      .min(1, t("validation.messageRequired"))
      .max(10_000),
  });
}

type ContactFormValues = z.input<ReturnType<typeof buildContactSchema>>;

type ContactFormProps = {
  intent?: "join" | "contact";
};

export function ContactForm({ intent = "join" }: ContactFormProps) {
  const t = useTranslations("Contact");
  const schema = buildContactSchema(t);
  const [serverError, setServerError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      tripPreference: "",
      availability: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    setServerError(false);
    setSuccess(false);
    startTransition(async () => {
      const result = await submitContactAction(values);
      if (result?.ok) {
        setSuccess(true);
        form.reset();
        return;
      }
      if (result?.error === "validation" || result?.error === "server") {
        setServerError(true);
      }
    });
  }

  const cardTitle = intent === "contact" ? t("titleContact") : t("title");
  const cardDescription =
    intent === "contact" ? t("descriptionContact") : t("description");

  if (success) {
    return (
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{t("success")}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
          noValidate
        >
          <div className="space-y-2">
            <Label htmlFor="contact-name">{t("name")}</Label>
            <Input
              id="contact-name"
              autoComplete="name"
              aria-invalid={!!form.formState.errors.name}
              {...form.register("name")}
            />
            {form.formState.errors.name ? (
              <p className="text-destructive text-sm" role="alert">
                {form.formState.errors.name.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">{t("email")}</Label>
            <Input
              id="contact-email"
              type="email"
              autoComplete="email"
              aria-invalid={!!form.formState.errors.email}
              {...form.register("email")}
            />
            {form.formState.errors.email ? (
              <p className="text-destructive text-sm" role="alert">
                {form.formState.errors.email.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-trip">{t("tripPreference")}</Label>
            <select
              id="contact-trip"
              aria-invalid={!!form.formState.errors.tripPreference}
              className={selectClassName}
              {...form.register("tripPreference")}
            >
              <option value="">{t("tripPreferencePlaceholder")}</option>
              <option value="boat">{t("tripBoat")}</option>
              <option value="shore">{t("tripShore")}</option>
              <option value="either">{t("tripEither")}</option>
            </select>
            {form.formState.errors.tripPreference ? (
              <p className="text-destructive text-sm" role="alert">
                {form.formState.errors.tripPreference.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-availability">{t("availability")}</Label>
            <Input
              id="contact-availability"
              autoComplete="off"
              aria-invalid={!!form.formState.errors.availability}
              placeholder={t("availabilityPlaceholder")}
              {...form.register("availability")}
            />
            {form.formState.errors.availability ? (
              <p className="text-destructive text-sm" role="alert">
                {form.formState.errors.availability.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message">{t("message")}</Label>
            <Textarea
              id="contact-message"
              rows={5}
              aria-invalid={!!form.formState.errors.message}
              {...form.register("message")}
            />
            {form.formState.errors.message ? (
              <p className="text-destructive text-sm" role="alert">
                {form.formState.errors.message.message}
              </p>
            ) : null}
          </div>
          {serverError ? (
            <p className="text-destructive text-sm" role="alert">
              {t("serverError")}
            </p>
          ) : null}
          <Button type="submit" disabled={isPending}>
            {isPending ? t("sending") : t("submit")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
