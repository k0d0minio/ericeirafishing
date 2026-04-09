import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-4 px-4 font-sans">
        <h1 className="text-2xl font-semibold">404</h1>
        <p className="text-muted-foreground text-center text-sm">
          Page not found.
        </p>
        <Link
          href="/en"
          className="text-primary text-sm font-medium underline underline-offset-4"
        >
          Home
        </Link>
      </body>
    </html>
  );
}
