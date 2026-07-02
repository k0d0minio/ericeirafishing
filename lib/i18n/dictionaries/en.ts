import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    home: {
      title: "Ericeira Fishing — Boat & shore fishing in Ericeira, Portugal",
      description:
        "Experience the real Ericeira: get to know the local fishermen and learn to fish by boat or shore. Small groups, all equipment and licences included.",
    },
    fishermen: {
      title: "The Fishermen of Ericeira",
      description:
        "The story of the men who built a village from the sea — Ericeira's fishing heritage, Praia dos Pescadores, and the traditions carried forward on every trip.",
    },
    gallery: {
      title: "Gallery",
      description:
        "Photos from boat and shore fishing trips along the Ericeira coast — the water, the catch, and life in the harbour.",
    },
    getAboard: {
      title: "Get Aboard",
      description:
        "Join the waiting list for a boat or shore fishing trip in Ericeira. Trip times, what's included, WhatsApp, and the booking form — all in one place.",
    },
    faq: {
      title: "FAQ",
      description:
        "Everything you need to know before a fishing trip in Ericeira — experience, equipment, licences, weather, species, and how to book.",
    },
  },

  nav: {
    home: "Home",
    fishermen: "The Fishermen",
    gallery: "Gallery",
    faq: "FAQ",
    getAboard: "Get aboard",
  },

  header: {
    homeAriaLabel: "Ericeira Fishing — home",
    openMenu: "Open menu",
    mobileNavLabel: "Mobile",
    primaryNavLabel: "Primary",
  },

  languageSwitcher: {
    label: "Language",
  },

  footer: {
    explore: "Explore",
    dropLine: "Drop a line",
    getAboard: "Get Aboard",
    whatsappPrefix: "WhatsApp",
    rightsSuffix: "Ericeira, Portugal",
  },

  home: {
    hero: {
      locationLine: "Ericeira · Portugal ·",
      titleMain: "Connect with Ericeira's roots — ",
      titleEmphasis: "and bring dinner home",
      body: "Experience the real Ericeira. Get to know the local fishermen and learn to fish by boat or shore, on one of Portugal's most iconic coastlines.",
      ctaPrimary: "Get aboard",
      ctaSecondary: "Meet the fishermen",
      photoAlt: "Fishing boat off the Ericeira coast at sunrise",
      photoCaption: "Praia dos Pescadores, est. tradition",
    },
    glance: {
      kicker: "The short of it",
      title: "A day at sea, the way Ericeira has always done it",
      items: [
        {
          title: "All ages welcome",
          body: "Beginners, families with children, and seasoned anglers — every trip is guided from the first cast.",
        },
        {
          title: "Everything included",
          body: "Rods, bait, daily licence, and vest are all provided. Just bring sunscreen, water, and a camera.",
        },
        {
          title: "Truly local",
          body: "You fish with crews who grew up on this harbour — carrying traditions that shaped the village for generations.",
        },
      ],
    },
    story: {
      kicker: "The fishermen of Ericeira",
      photoAlt: "Fishing boats pulled up on Praia dos Pescadores",
      photoCaption: "Praia dos Pescadores",
      quote: "“Fishing was never just a profession. It was a way of life.”",
      body: "Before Ericeira became known for world-class waves and surf culture, it was known for something else entirely: its fishermen. Ericeira Fishing was born from a deep connection to the sea and the fishing traditions of this village — and every trip carries that story forward.",
      cta: "Read the whole story",
    },
    services: {
      kicker: "Two ways out",
      title: "Choose your water: by boat or from the shore",
      cta: "Reserve a spot",
      items: [
        {
          id: "boat",
          imageAlt: "Guests fishing from the boat with the skipper",
          kicker: "Trip Nº 01 · By boat",
          title: "Meet the fishermen — boat fishing",
          body: "A guided excursion with a tour of the port and time with the local fishermen. You'll fish with an experienced skipper and crew, with all equipment and required fishing licences included. Groups are kept small for personal attention and safety.",
          details: [
            "Usually 6 AM – 1 PM",
            "Small groups only",
            "Gear, licence & vest included",
          ],
        },
        {
          id: "shore",
          imageAlt: "Shore fishing from the rocks along the Ericeira coastline",
          kicker: "Trip Nº 02 · From shore",
          title: "Shore fishing",
          body: "A half-day coastal experience designed for everyone — all skill levels and ages. Local fishermen teach you the techniques for catching regional species from Ericeira's beautiful coastline. Small groups keep it welcoming and relaxed. Shore sessions depend on tide, wind, and other meteorological factors.",
          details: [
            "Half-day session",
            "Great for beginners & families",
            "Runs with tide & weather",
          ],
        },
      ],
    },
    team: {
      kicker: "The crew",
      title: "Guided by people who know these waters inside out",
    },
    gallery: {
      kicker: "From the logbook",
      title: "Gallery",
      cta: "View all photos",
      photos: [
        { src: "/images/gallery-01.jpg", alt: "Group fishing on the boat" },
        { src: "/images/gallery-02.jpg", alt: "Film photo — out on the water" },
        { src: "/images/gallery-04.jpg", alt: "Film photo — hauling the lines" },
        { src: "/images/gallery-06.jpg", alt: "Film photo — the day's catch" },
      ],
    },
    faq: {
      kicker: "Before you cast off",
      title: "Common questions",
      body: "No experience needed, gear is included, and yes — you keep the fish. The full list covers everything else.",
      ctaPrefix: "All",
      ctaSuffix: "questions",
    },
    cta: {
      kicker: "Limited spots · Small groups",
      title: "Our trips are carefully planned for a limited number of people",
      bodyPrefix:
        "Join the waiting list to know the next spot available — included on every trip: ",
      bodySuffix: ", and bringing your own fish home.",
      ctaPrimary: "Join the waiting list",
      ctaSecondary: "WhatsApp us",
    },
  },

  fishermenPage: {
    hero: {
      kicker: "Context · The story behind the trips",
      title:
        "The Fishermen of Ericeira: the men who built a village from the sea",
      lede: "Before Ericeira became known for world-class waves and surf culture, it was known for something else entirely: its fishermen. Long before visitors arrived with surfboards under their arms, generations of local men headed into the Atlantic before sunrise, returning only when the sea allowed them to.",
    },
    intro:
      "The story of Ericeira is, in many ways, the story of these fishermen and their families.",
    chapters: [
      {
        title: "A village built around the ocean",
        paragraphs: [
          "For centuries, the sea was the livelihood of the people of Ericeira.",
          "Every morning, wooden boats would leave the shore carrying men whose lives depended on their knowledge of the ocean. There were no weather apps, GPS systems, or modern electronics. Experience, instinct, and respect for the sea were often the difference between returning home safely or not returning at all.",
          "Fishing was never just a profession. It was a way of life.",
          "Children grew up watching their fathers prepare nets and lines. Stories of storms, giant catches, and difficult days at sea were passed down from one generation to the next. The rhythm of daily life in Ericeira was dictated by the tides, the winds, and the Atlantic itself.",
        ],
      },
      {
        title: "Life was hard, but it was honest",
        paragraphs: [
          "Fishing in Ericeira was never easy.",
          "The Atlantic Ocean along this stretch of coast is beautiful, but it can also be unforgiving. Strong currents, rough seas, and unpredictable weather made every trip an adventure.",
          "Many fishermen left home before dawn and returned after long hours at sea. Some days brought abundant catches. Other days brought little more than fatigue and hope for tomorrow.",
          "Yet despite the hardships, many local fishermen would tell you they would not have chosen another life.",
          "There was pride in providing for their families. Pride in understanding the sea. Pride in continuing a tradition that stretched back generations.",
        ],
      },
      {
        title: "Praia dos Pescadores: the heart of Ericeira",
        image: {
          src: "/images/praia-dos-pescadores.jpg",
          alt: "Fishing boats on the sand at Praia dos Pescadores",
          caption: "Praia dos Pescadores — the beating heart of village life",
        },
        paragraphs: [
          "Today, Praia dos Pescadores is one of the most photographed places in Ericeira.",
          "Visitors see a beautiful beach framed by whitewashed houses and the Atlantic Ocean. But for locals, this beach has always represented something much deeper.",
          "For decades, boats were launched directly from the sand. Families gathered to help unload the day's catch. Nets were repaired on the beach, and children played among the boats while learning the traditions that defined their community.",
          "The beach wasn't simply a place where fishing happened. It was the beating heart of village life.",
        ],
      },
      {
        title: "Knowledge passed through generations",
        paragraphs: [
          "One of the most remarkable things about traditional fishing is that much of its knowledge was never written down.",
          "Fishermen learned by watching.",
          "They learned how to read the ocean, how to identify productive fishing grounds, how to predict weather changes, and how different species behaved throughout the seasons. The sea became their classroom.",
          "This knowledge was passed from fathers to sons, from grandparents to grandchildren, preserving techniques and traditions that continue to survive today.",
          "Even with modern equipment, many local fishermen still rely on instincts developed through years of experience on the water.",
        ],
      },
      {
        title: "The changing face of Ericeira",
        paragraphs: [
          "Over the last few decades, Ericeira has transformed dramatically.",
          "Tourism has grown. Surfing has brought international recognition. New businesses, restaurants, and visitors have changed the pace of life in the village.",
          "Yet the fishing heritage remains deeply woven into Ericeira's identity.",
          "The boats are still there. The stories are still there.",
          "And every morning, local fishermen continue to head out to sea, carrying forward traditions that helped shape the village long before it became famous around the world.",
        ],
      },
      {
        title: "Experiencing the real Ericeira",
        paragraphs: [
          "To truly understand Ericeira, you have to understand its connection to the ocean.",
          "Beyond the surf schools, cafés, and viewpoints lies a much older story. A story of resilience, hard work, family, and respect for nature. It is the story of the fishermen who built this village.",
          "When you fish in Ericeira today, you are not simply enjoying a day on the water. You are connecting with a tradition that has defined this coastline for generations.",
          "You are experiencing a small part of what has always made Ericeira special. And for a few hours, you become part of that story.",
        ],
      },
    ],
    closing: {
      kicker: "Discover traditional fishing in Ericeira",
      body1:
        "At Ericeira Fishing, we share more than techniques and fishing spots. We share local knowledge, traditions, and a genuine connection to the sea that has shaped this village for centuries.",
      body2:
        "Whether you're an experienced angler or trying fishing for the first time, our goal is simple: to help you experience the authentic side of Ericeira, one cast at a time.",
      cta: "Become part of the story",
    },
  },

  galleryPage: {
    hero: {
      kicker: "From the logbook",
      title: "Gallery",
      lede: "Moments from boat days, shore sessions, and our skippers along the Ericeira coast — the water, the catch, and life in the harbour.",
    },
    photos: [
      { src: "/images/gallery-01.jpg", alt: "Group fishing on the boat", orientation: "portrait" },
      { src: "/images/gallery-02.jpg", alt: "Film photo — out on the water", orientation: "landscape" },
      { src: "/images/gallery-03.jpg", alt: "Film photo — the harbour", orientation: "landscape" },
      { src: "/images/gallery-04.jpg", alt: "Film photo — hauling the lines", orientation: "portrait" },
      { src: "/images/gallery-05.jpg", alt: "Film photo — the crew", orientation: "portrait" },
      { src: "/images/gallery-06.jpg", alt: "Film photo — the day's catch", orientation: "portrait" },
      { src: "/images/gallery-07.jpg", alt: "Film photo — Ericeira coastline", orientation: "landscape" },
      { src: "/images/gallery-08.jpg", alt: "Film photo — casting off", orientation: "portrait" },
      { src: "/images/gallery-09.jpg", alt: "Film photo — back to port", orientation: "portrait" },
    ],
    instagramPrefix: "More photos and trip reels on",
    cta: {
      title: "Want to be in the next photo?",
      body: "Small-group trips fill up quickly. Join the waiting list and we'll let you know as soon as the next dates open.",
      buttonLabel: "Join the waiting list",
    },
  },

  getAboardPage: {
    hero: {
      kicker: "Get aboard · Waiting list",
      title: "Ready to bring dinner home?",
      lede: "Our trips are carefully planned and for a limited number of people. Join the waiting list to know the next spot available.",
    },
    schedule: {
      kicker: "Schedule",
      bodyPrefix: "Our boat trips usually start around",
      time1: "6 AM",
      bodyMid: "and finish around",
      time2: "1 PM",
      bodySuffix: ".",
      note: "Shore fishing depends on tide, wind, and other meteorological factors — we'll confirm timing with you.",
    },
    included: {
      kicker: "What's included",
    },
    whatsapp: {
      kicker: "Faster on WhatsApp?",
      body: "Message us directly and we'll reply with what fits — boat or shore, and the next opening.",
    },
    form: {
      kicker: "Join via the form",
      title: "Join the waiting list",
      body: "Tell us boat or shore and when you're free. We'll reply with what fits and add you to the list for the next opening — or just ask us a general question.",
    },
  },

  faqPage: {
    hero: {
      kicker: "Before you cast off",
      title: "Frequently asked questions",
      lede: "Everything you need to know before heading out — experience, gear, weather, what you can catch, and how to book.",
    },
    cta: {
      kicker: "Still wondering something?",
      title: "Ask us directly — we're quick on WhatsApp",
      body: "Or join the waiting list and we'll get back to you with the next available spots.",
      buttonLabel: "Join the waiting list",
    },
  },

  notFound: {
    kicker: "404 · Off the chart",
    title: "This page drifted out to sea",
    body: "The page you are looking for does not exist. Let's get you back to the harbour.",
    cta: "Back to home",
  },

  bookingForm: {
    tripOptions: [
      { value: "boat", label: "Boat fishing", hint: "6 AM – 1 PM" },
      { value: "shore", label: "Shore fishing", hint: "Half-day" },
      { value: "either", label: "Either", hint: "Not sure yet" },
    ],
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@example.com" },
      phone: { label: "WhatsApp / phone", placeholder: "+351 …" },
      trip: { label: "Boat or shore?" },
      groupSize: { label: "How many of you?" },
      availability: {
        label: "When are you free?",
        placeholder: "e.g. weekends in August, or specific dates",
      },
      message: {
        label: "Message",
        placeholder: "Anything we should know — questions, occasions, kids aboard…",
      },
    },
    optional: "(optional)",
    submit: "Join the waiting list",
    submitting: "Sending…",
    errorGeneral:
      "Something went wrong sending your request. Please try again, or message us on WhatsApp.",
    success: {
      title: "You're on the list",
      body: "Thank you — we'll be in touch about the next available spot. Keep an eye on your inbox (and WhatsApp, if you left a number).",
      tagline: "Tight lines",
    },
    validation: {
      name: "Please tell us your name",
      email: "Enter a valid email address",
      trip: "Choose boat, shore, or either",
      groupSize: "How many of you are coming?",
      availability: "Tell us when you're free",
      formInvalid: "Please check the form and try again.",
    },
  },

  siteData: {
    species: [
      "Seabass",
      "Sea bream",
      "Black seabream",
      "Red porgy",
      "Mackerel",
      "Horse mackerel",
    ],
    included: [
      "Fishing rod",
      "Bait",
      "Daily licence",
      "Vest",
      "Good fun",
      "Bringing your own fish home",
    ],
    team: [
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
    ],
    faqs: [
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
    ],
  },
} as const;

