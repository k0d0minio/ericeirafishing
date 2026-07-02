import Link from "next/link";
import { Anchor, MessageCircle } from "lucide-react";

import { nav, site } from "@/lib/site";
import { InstagramIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="relative">
      <div className="theme-ink bg-chart-grid-dark border-t border-sand/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="flex items-center gap-2.5 font-display text-xl font-semibold text-sand">
              <Anchor className="size-5 text-buoy" strokeWidth={1.75} />
              {site.name}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-sand/70">
              {site.description}
            </p>
            <p className="kicker text-sand/50">{site.coordinates}</p>
          </div>

          <div>
            <p className="kicker mb-4 text-buoy">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sand/75 transition-colors hover:text-sand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/get-aboard"
                  className="text-sand/75 transition-colors hover:text-sand"
                >
                  Get Aboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="kicker mb-4 text-buoy">Drop a line</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sand/75 transition-colors hover:text-sand"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp {site.whatsappNumber}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sand/75 transition-colors hover:text-sand"
                >
                  <InstagramIcon className="size-4" />
                  {site.instagramHandle}
                </a>
              </li>
              <li className="pt-1 text-sand/50">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand/10">
          <p className="mx-auto max-w-6xl px-4 py-5 font-mono text-[0.68rem] tracking-[0.14em] text-sand/45 uppercase sm:px-6">
            © {new Date().getFullYear()} {site.name} · Ericeira, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
