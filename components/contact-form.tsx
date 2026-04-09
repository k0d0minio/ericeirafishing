"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { submitContactAction } from "@/lib/actions/contact";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function buildContactSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().trim().min(1, t("validation.nameRequired")).max(200),
    email: z
      .string()
      .trim()
      .min(1, t("validation.emailInvalid"))
      .email(t("validation.emailInvalid"))
      .max(320),
    message: z
      .string()
      .trim()
      .min(1, t("validation.messageRequired"))
      .max(10_000),
  });
}

type ContactFormValues = z.infer<ReturnType<typeof buildContactSchema>>;

export function ContactForm() {
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

  if (success) {
    return (
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("success")}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
          noValidate
        >
          <FieldGroup>
            <Field data-invalid={!!form.formState.errors.name}>
              <FieldLabel htmlFor="contact-name">{t("name")}</FieldLabel>
              <FieldContent>
                <Input
                  id="contact-name"
                  autoComplete="name"
                  aria-invalid={!!form.formState.errors.name}
                  {...form.register("name")}
                />
                <FieldError errors={[form.formState.errors.name]} />
              </FieldContent>
            </Field>
            <Field data-invalid={!!form.formState.errors.email}>
              <FieldLabel htmlFor="contact-email">{t("email")}</FieldLabel>
              <FieldContent>
                <Input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!form.formState.errors.email}
                  {...form.register("email")}
                />
                <FieldError errors={[form.formState.errors.email]} />
              </FieldContent>
            </Field>
            <Field data-invalid={!!form.formState.errors.message}>
              <FieldLabel htmlFor="contact-message">{t("message")}</FieldLabel>
              <FieldContent>
                <Textarea
                  id="contact-message"
                  rows={5}
                  aria-invalid={!!form.formState.errors.message}
                  {...form.register("message")}
                />
                <FieldError errors={[form.formState.errors.message]} />
              </FieldContent>
            </Field>
          </FieldGroup>
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
