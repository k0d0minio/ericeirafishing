export type Dictionary = {
  meta: {
    home: { title: string; description: string };
    fishermen: { title: string; description: string };
    gallery: { title: string; description: string };
    getAboard: { title: string; description: string };
    faq: { title: string; description: string };
  };

  nav: {
    home: string;
    fishermen: string;
    gallery: string;
    faq: string;
    getAboard: string;
  };

  header: {
    homeAriaLabel: string;
    openMenu: string;
    mobileNavLabel: string;
    primaryNavLabel: string;
  };

  languageSwitcher: {
    label: string;
  };

  footer: {
    explore: string;
    dropLine: string;
    getAboard: string;
    whatsappPrefix: string;
    rightsSuffix: string;
  };

  home: {
    hero: {
      locationLine: string;
      titleMain: string;
      titleEmphasis: string;
      body: string;
      ctaPrimary: string;
      ctaSecondary: string;
      photoAlt: string;
      photoCaption: string;
    };
    glance: {
      kicker: string;
      title: string;
      items: readonly { title: string; body: string }[];
    };
    story: {
      kicker: string;
      photoAlt: string;
      photoCaption: string;
      quote: string;
      body: string;
      cta: string;
    };
    services: {
      kicker: string;
      title: string;
      cta: string;
      items: readonly {
        id: "boat" | "shore";
        imageAlt: string;
        kicker: string;
        title: string;
        body: string;
        details: readonly string[];
      }[];
    };
    team: {
      kicker: string;
      title: string;
    };
    gallery: {
      kicker: string;
      title: string;
      cta: string;
      photos: readonly { src: string; alt: string }[];
    };
    faq: {
      kicker: string;
      title: string;
      body: string;
      ctaPrefix: string;
      ctaSuffix: string;
    };
    cta: {
      kicker: string;
      title: string;
      bodyPrefix: string;
      bodySuffix: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };

  fishermenPage: {
    hero: { kicker: string; title: string; lede: string };
    intro: string;
    chapters: readonly {
      title: string;
      image?: { src: string; alt: string; caption: string };
      paragraphs: readonly string[];
    }[];
    closing: {
      kicker: string;
      body1: string;
      body2: string;
      cta: string;
    };
  };

  galleryPage: {
    hero: { kicker: string; title: string; lede: string };
    photos: readonly {
      src: string;
      alt: string;
      orientation: "portrait" | "landscape";
    }[];
    instagramPrefix: string;
    cta: { title: string; body: string; buttonLabel: string };
  };

  getAboardPage: {
    hero: { kicker: string; title: string; lede: string };
    schedule: {
      kicker: string;
      bodyPrefix: string;
      time1: string;
      bodyMid: string;
      time2: string;
      bodySuffix: string;
      note: string;
    };
    included: { kicker: string };
    whatsapp: { kicker: string; body: string };
    form: { kicker: string; title: string; body: string };
  };

  faqPage: {
    hero: { kicker: string; title: string; lede: string };
    cta: { kicker: string; title: string; body: string; buttonLabel: string };
  };

  notFound: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
  };

  bookingForm: {
    tripOptions: readonly {
      value: "boat" | "shore" | "either";
      label: string;
      hint: string;
    }[];
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      trip: { label: string };
      groupSize: { label: string };
      availability: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
    optional: string;
    submit: string;
    submitting: string;
    errorGeneral: string;
    success: { title: string; body: string; tagline: string };
    validation: {
      name: string;
      email: string;
      trip: string;
      groupSize: string;
      availability: string;
      formInvalid: string;
    };
  };

  siteData: {
    species: readonly string[];
    included: readonly string[];
    team: readonly { name: string; role: string; bio: string; image: string }[];
    faqs: readonly { q: string; a: string }[];
  };
};
