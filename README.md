# Ericeira Fishing

Marketing and booking site for [Ericeira Fishing](https://ericeirafishing.com) — boat and shore
fishing trips with local fishermen in Ericeira, Portugal.

Built with Next.js (App Router), Tailwind CSS v4, shadcn/ui, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route         | Content                                                          |
| ------------- | ---------------------------------------------------------------- |
| `/`           | Hero, services (boat & shore), team, gallery and FAQ teasers, CTA |
| `/fishermen`  | "The Fishermen of Ericeira" story (the site's Context page)       |
| `/gallery`    | Photo grid                                                        |
| `/faq`        | All frequently asked questions                                    |
| `/get-aboard` | Schedule, what's included, WhatsApp links, waiting-list form      |

## Adding the real photos

Every image renders through `components/smart-image.tsx`, which shows a styled placeholder
(labelled with the expected file path) until the real file exists. Drop photos into
`public/images/` with these names and they appear automatically — no code changes needed:

- `hero.jpg` — home hero (portrait, 4:5)
- `praia-dos-pescadores.jpg` — story teaser + article (square / 16:10)
- `boat-fishing.jpg`, `shore-fishing.jpg` — service cards (3:2)
- `mestre-dariu.jpg`, `joao-pedro.jpg` — team portraits (4:5)
- `gallery-01.jpg` … `gallery-09.jpg` — gallery grid

## Booking form

The waiting-list form (`components/booking-form.tsx`) validates with zod + react-hook-form and
submits to the `submitBooking` server action in `lib/actions.ts`. Submissions are currently
logged server-side — wire the action to an email or WhatsApp API when credentials are available.

## Content

All site copy (navigation, team, FAQs, included items, gallery slots, contact details) lives in
`lib/site.ts`.
