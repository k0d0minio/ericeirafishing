export const site = {
  name: "Ericeira Fishing",
  tagline: "Connect with Ericeira's roots — and bring dinner home",
  description:
    "Experience the real Ericeira: get to know the local fishermen and learn to fish by boat or shore. Small groups, all equipment and licences included.",
  whatsappNumber: "+351 910 645 600",
  whatsappUrl: "https://wa.me/351910645600",
  instagramHandle: "@ericeirafishing",
  instagramUrl: "https://www.instagram.com/ericeirafishing",
  coordinates: "38°57′48″N · 9°25′07″W",
  location: "Ericeira, Portugal",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/fishermen", label: "The Fishermen" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
] as const;

export const species = [
  "Seabass",
  "Sea bream",
  "Black seabream",
  "Red porgy",
  "Mackerel",
  "Horse mackerel",
] as const;

export const included = [
  "Fishing rod",
  "Bait",
  "Daily licence",
  "Vest",
  "Good fun",
  "Bringing your own fish home",
] as const;

export const team = [
  {
    name: "Mestre Dariu",
    role: "Boat captain",
    bio: "With over 50 years of experience, Captain Dariu is one of the most famous historical figures of Ericeira and calls Ericeira's coastline his home.",
    image: "/images/mestre-dariu.jpg",
  },
  {
    name: "João Pedro",
    role: "Skipper",
    bio: "Organizer and fishing enthusiast, João brings the community together to learn the art of bringing dinner home.",
    image: "/images/joao-pedro.jpg",
  },
] as const;

export const faqs = [
  {
    q: "Do I need fishing experience to join?",
    a: "No. Our fishing experiences are suitable for both complete beginners and experienced anglers. Our guides offer instruction and support throughout the whole experience.",
  },
  {
    q: "Is fishing equipment included?",
    a: "Yes. We can provide all the necessary fishing equipment, including rods, reels, tackle, hooks, and bait, depending on the experience booked.",
  },
  {
    q: "Can children participate?",
    a: "Absolutely. We regularly welcome families with children — fishing is a wonderful way to introduce young people to nature and local traditions.",
  },
  {
    q: "What is the minimum age?",
    a: "Age recommendations vary depending on the type of experience and sea conditions. Contact us and we'll help you find the right fit for your family.",
  },
  {
    q: "Do I need a fishing licence?",
    a: "Fishing licence requirements depend on the type of activity and local regulations. For our trips, the daily licence is included — we take care of it for you.",
  },
  {
    q: "What fish species can I catch in Ericeira?",
    a: "Depending on the season you can catch seabass, sea bream, black seabream, red porgy, mackerel, horse mackerel, and more.",
  },
  {
    q: "What is the best time of year for fishing in Ericeira?",
    a: "Fishing is possible all year round. Different seasons offer different opportunities, species, and fishing techniques.",
  },
  {
    q: "Can I keep the fish I catch?",
    a: "Yes — provided the fish meet legal size requirements and fishing regulations are followed, you bring your own catch home.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable clothing, suitable footwear, sunscreen, a hat, water, and a camera or phone to capture the experience.",
  },
  {
    q: "What happens if sea conditions are unsafe?",
    a: "Safety always comes first. If weather or sea conditions are not suitable, we will offer an alternative date or an appropriate solution.",
  },
  {
    q: "Do trips operate in rainy weather?",
    a: "Light rain doesn't prevent trips, but strong winds, storms, or unsafe conditions may cause postponement. We always keep you informed.",
  },
  {
    q: "How long do the fishing experiences last?",
    a: "Duration varies by the selected experience — we offer both shore and boat fishing options. Boat trips usually run from around 6 AM to 1 PM.",
  },
  {
    q: "Can I book a private fishing trip?",
    a: "Yes. We offer private fishing experiences for families, groups of friends, corporate events, and special occasions.",
  },
  {
    q: "Is boat fishing suitable for beginners?",
    a: "Yes. Boat fishing gives you access to productive fishing grounds, and our guides assist you throughout the trip.",
  },
  {
    q: "Can I join on my own?",
    a: "Of course. Many of our guests join individually, whether they want to learn fishing, improve their skills, or simply enjoy a unique experience.",
  },
  {
    q: "Can I buy a fishing experience as a gift?",
    a: "Yes — a fishing experience makes a great gift for birthdays and special occasions. Get in touch and we'll arrange it.",
  },
  {
    q: "Where do the experiences take place?",
    a: "Our activities take place along the beautiful coastline of Ericeira, one of Portugal's most iconic fishing and surfing destinations.",
  },
  {
    q: "What makes Ericeira Fishing different?",
    a: "Ericeira Fishing was created by people with a genuine connection to the sea and local fishing traditions. We don't just take you fishing — we share the maritime heritage that shaped this village.",
  },
  {
    q: "Is fishing in Ericeira suitable for tourists?",
    a: "Yes. Our experiences are designed to be accessible, enjoyable, and informative for international visitors.",
  },
  {
    q: "How far is Ericeira from Lisbon?",
    a: "Ericeira is located approximately 45 minutes from Lisbon, making it one of the most accessible fishing destinations in Portugal.",
  },
  {
    q: "How can I book a fishing experience?",
    a: "Contact us through the form on this website, WhatsApp, email, or our social media channels — we'll help you choose the right experience.",
  },
] as const;

/**
 * Gallery slots mirror the live site's photo set (one group shot plus a
 * black-and-white film series). Drop the real files into public/images/
 * with these names and they appear automatically.
 */
export const gallerySlots = [
  { src: "/images/gallery-01.jpg", alt: "Group fishing on the boat", orientation: "portrait" },
  { src: "/images/gallery-02.jpg", alt: "Film photo — out on the water", orientation: "landscape" },
  { src: "/images/gallery-03.jpg", alt: "Film photo — the harbour", orientation: "landscape" },
  { src: "/images/gallery-04.jpg", alt: "Film photo — hauling the lines", orientation: "portrait" },
  { src: "/images/gallery-05.jpg", alt: "Film photo — the crew", orientation: "portrait" },
  { src: "/images/gallery-06.jpg", alt: "Film photo — the day's catch", orientation: "portrait" },
  { src: "/images/gallery-07.jpg", alt: "Film photo — Ericeira coastline", orientation: "landscape" },
  { src: "/images/gallery-08.jpg", alt: "Film photo — casting off", orientation: "portrait" },
  { src: "/images/gallery-09.jpg", alt: "Film photo — back to port", orientation: "portrait" },
] as const;
