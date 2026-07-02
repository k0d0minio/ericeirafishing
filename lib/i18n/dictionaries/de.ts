import type { Dictionary } from "./types";

export const de: Dictionary = {
  meta: {
    home: {
      title: "Ericeira Fishing — Boots- und Küstenangeln in Ericeira, Portugal",
      description:
        "Erleben Sie das echte Ericeira: Lernen Sie die lokalen Fischer kennen und angeln Sie vom Boot oder von der Küste aus. Kleine Gruppen, alle Ausrüstung und Lizenzen inklusive.",
    },
    fishermen: {
      title: "Die Fischer von Ericeira",
      description:
        "Die Geschichte der Männer, die aus dem Meer ein Dorf erschufen — das Fischereierbe Ericeiras, der Praia dos Pescadores, und die Traditionen, die auf jeder Tour weitergetragen werden.",
    },
    gallery: {
      title: "Galerie",
      description:
        "Fotos von Boots- und Küstenangeltouren entlang der Küste Ericeiras — das Wasser, der Fang und das Leben im Hafen.",
    },
    getAboard: {
      title: "An Bord gehen",
      description:
        "Tragen Sie sich in die Warteliste für eine Boots- oder Küstenangeltour in Ericeira ein. Tourzeiten, Leistungen, WhatsApp und das Buchungsformular — alles an einem Ort.",
    },
    faq: {
      title: "FAQ",
      description:
        "Alles, was Sie vor einer Angeltour in Ericeira wissen müssen — Erfahrung, Ausrüstung, Lizenzen, Wetter, Fischarten und Buchung.",
    },
  },

  nav: {
    home: "Startseite",
    fishermen: "Die Fischer",
    gallery: "Galerie",
    faq: "FAQ",
    getAboard: "An Bord gehen",
  },

  header: {
    homeAriaLabel: "Ericeira Fishing — Startseite",
    openMenu: "Menü öffnen",
    mobileNavLabel: "Mobil",
    primaryNavLabel: "Hauptnavigation",
  },

  languageSwitcher: {
    label: "Sprache",
  },

  footer: {
    explore: "Entdecken",
    dropLine: "Nehmen Sie Kontakt auf",
    getAboard: "An Bord gehen",
    whatsappPrefix: "WhatsApp",
    rightsSuffix: "Ericeira, Portugal",
  },

  home: {
    hero: {
      locationLine: "Ericeira · Portugal ·",
      titleMain: "Verbinden Sie sich mit den Wurzeln Ericeiras — ",
      titleEmphasis: "und bringen Sie Ihr Abendessen mit nach Hause",
      body: "Erleben Sie das echte Ericeira. Lernen Sie die lokalen Fischer kennen und angeln Sie vom Boot oder von der Küste aus, an einer der ikonischsten Küsten Portugals.",
      ctaPrimary: "An Bord gehen",
      ctaSecondary: "Die Fischer kennenlernen",
      photoAlt: "Fischerboot vor der Küste Ericeiras bei Sonnenaufgang",
      photoCaption: "Praia dos Pescadores, eine gewachsene Tradition",
    },
    glance: {
      kicker: "Kurz und knapp",
      title: "Ein Tag auf See, so wie Ericeira es schon immer getan hat",
      items: [
        {
          title: "Für jedes Alter geeignet",
          body: "Anfänger, Familien mit Kindern und erfahrene Angler — jede Tour wird vom ersten Wurf an begleitet.",
        },
        {
          title: "Alles inklusive",
          body: "Angelruten, Köder, Tageslizenz und Weste sind im Preis enthalten. Bringen Sie einfach Sonnencreme, Wasser und eine Kamera mit.",
        },
        {
          title: "Wirklich lokal",
          body: "Sie angeln mit Crews, die auf diesem Hafen aufgewachsen sind — sie tragen Traditionen weiter, die das Dorf über Generationen geprägt haben.",
        },
      ],
    },
    story: {
      kicker: "Die Fischer von Ericeira",
      photoAlt: "Fischerboote an Land am Praia dos Pescadores",
      photoCaption: "Praia dos Pescadores",
      quote: "„Das Fischen war nie nur ein Beruf. Es war eine Lebensweise.“",
      body: "Bevor Ericeira für seine weltklasse Wellen und die Surfkultur bekannt wurde, war es für etwas ganz anderes bekannt: seine Fischer. Ericeira Fishing entstand aus einer tiefen Verbindung zum Meer und den Fischereitraditionen dieses Dorfes — und jede Tour trägt diese Geschichte weiter.",
      cta: "Die ganze Geschichte lesen",
    },
    services: {
      kicker: "Zwei Wege aufs Wasser",
      title: "Wählen Sie Ihr Revier: vom Boot oder von der Küste aus",
      cta: "Platz reservieren",
      items: [
        {
          id: "boat",
          imageAlt: "Gäste angeln vom Boot aus mit dem Skipper",
          kicker: "Tour Nr. 01 · Vom Boot aus",
          title: "Die Fischer kennenlernen — Bootsangeln",
          body: "Eine geführte Tour mit einer Besichtigung des Hafens und Zeit mit den lokalen Fischern. Sie angeln mit einem erfahrenen Skipper und seiner Crew, alle Ausrüstung und erforderlichen Angellizenzen sind inbegriffen. Die Gruppen bleiben klein, für persönliche Betreuung und Sicherheit.",
          details: [
            "Meist 6 bis 13 Uhr",
            "Nur kleine Gruppen",
            "Ausrüstung, Lizenz & Weste inklusive",
          ],
        },
        {
          id: "shore",
          imageAlt: "Küstenangeln von den Felsen entlang der Küste Ericeiras",
          kicker: "Tour Nr. 02 · Von der Küste aus",
          title: "Küstenangeln",
          body: "Ein halbtägiges Küstenerlebnis für alle — jedes Können und jedes Alter. Lokale Fischer zeigen Ihnen die Techniken, um regionale Fischarten von Ericeiras wunderschöner Küste aus zu fangen. Kleine Gruppen sorgen für eine entspannte und einladende Atmosphäre. Küstensessions richten sich nach Gezeiten, Wind und anderen Wetterfaktoren.",
          details: [
            "Halbtägige Session",
            "Ideal für Anfänger & Familien",
            "Abhängig von Gezeiten & Wetter",
          ],
        },
      ],
    },
    team: {
      kicker: "Die Crew",
      title: "Begleitet von Menschen, die diese Gewässer wie ihre Westentasche kennen",
    },
    gallery: {
      kicker: "Aus dem Logbuch",
      title: "Galerie",
      cta: "Alle Fotos ansehen",
      photos: [
        { src: "/images/gallery-01.jpg", alt: "Gruppe beim Angeln auf dem Boot" },
        { src: "/images/gallery-02.jpg", alt: "Filmfoto — draußen auf dem Wasser" },
        { src: "/images/gallery-04.jpg", alt: "Filmfoto — Leinen einholen" },
        { src: "/images/gallery-06.jpg", alt: "Filmfoto — der Fang des Tages" },
      ],
    },
    faq: {
      kicker: "Bevor Sie ablegen",
      title: "Häufige Fragen",
      body: "Keine Erfahrung nötig, die Ausrüstung ist inklusive, und ja — Sie behalten den Fisch. Die vollständige Liste beantwortet alles Weitere.",
      ctaPrefix: "Alle",
      ctaSuffix: "Fragen",
    },
    cta: {
      kicker: "Begrenzte Plätze · Kleine Gruppen",
      title: "Unsere Touren sind sorgfältig für eine begrenzte Teilnehmerzahl geplant",
      bodyPrefix:
        "Tragen Sie sich in die Warteliste ein, um vom nächsten freien Platz zu erfahren — bei jeder Tour inbegriffen: ",
      bodySuffix: ", und Ihren eigenen Fang mit nach Hause zu nehmen.",
      ctaPrimary: "In die Warteliste eintragen",
      ctaSecondary: "WhatsApp schreiben",
    },
  },

  fishermenPage: {
    hero: {
      kicker: "Hintergrund · Die Geschichte hinter den Touren",
      title:
        "Die Fischer von Ericeira: die Männer, die aus dem Meer ein Dorf erschufen",
      lede: "Bevor Ericeira für seine weltklasse Wellen und die Surfkultur bekannt wurde, war es für etwas ganz anderes bekannt: seine Fischer. Lange bevor Besucher mit Surfbrettern unterm Arm ankamen, fuhren Generationen lokaler Männer vor Sonnenaufgang in den Atlantik hinaus und kehrten erst zurück, wenn das Meer es zuließ.",
    },
    intro:
      "Die Geschichte Ericeiras ist in vielerlei Hinsicht die Geschichte dieser Fischer und ihrer Familien.",
    chapters: [
      {
        title: "Ein Dorf, das rund um den Ozean entstand",
        paragraphs: [
          "Jahrhundertelang war das Meer die Lebensgrundlage der Menschen von Ericeira.",
          "Jeden Morgen verließen hölzerne Boote das Ufer mit Männern an Bord, deren Leben von ihrem Wissen über den Ozean abhing. Es gab keine Wetter-Apps, GPS-Systeme oder moderne Elektronik. Erfahrung, Instinkt und Respekt vor dem Meer waren oft der Unterschied zwischen einer sicheren Heimkehr und dem Nichtwiederkehren.",
          "Das Fischen war nie nur ein Beruf. Es war eine Lebensweise.",
          "Kinder wuchsen auf, während sie ihren Vätern beim Vorbereiten von Netzen und Leinen zusahen. Geschichten von Stürmen, riesigen Fängen und schwierigen Tagen auf See wurden von einer Generation an die nächste weitergegeben. Der Rhythmus des täglichen Lebens in Ericeira wurde von den Gezeiten, den Winden und dem Atlantik selbst bestimmt.",
        ],
      },
      {
        title: "Das Leben war hart, aber ehrlich",
        paragraphs: [
          "Das Fischen in Ericeira war nie einfach.",
          "Der Atlantik entlang dieses Küstenabschnitts ist wunderschön, kann aber auch unerbittlich sein. Starke Strömungen, raue See und unberechenbares Wetter machten jede Ausfahrt zu einem Abenteuer.",
          "Viele Fischer verließen ihr Zuhause vor Tagesanbruch und kehrten erst nach vielen Stunden auf See zurück. Manche Tage brachten reiche Fänge. Andere Tage brachten kaum mehr als Erschöpfung und die Hoffnung auf morgen.",
          "Doch trotz aller Härten würden viele lokale Fischer sagen, dass sie kein anderes Leben gewählt hätten.",
          "Es gab Stolz darin, für die Familie zu sorgen. Stolz darin, das Meer zu verstehen. Stolz darin, eine Tradition fortzuführen, die Generationen zurückreichte.",
        ],
      },
      {
        title: "Praia dos Pescadores: das Herz von Ericeira",
        image: {
          src: "/images/praia-dos-pescadores.jpg",
          alt: "Fischerboote im Sand am Praia dos Pescadores",
          caption: "Praia dos Pescadores — das schlagende Herz des Dorflebens",
        },
        paragraphs: [
          "Heute ist der Praia dos Pescadores einer der meistfotografierten Orte in Ericeira.",
          "Besucher sehen einen wunderschönen Strand, umrahmt von weiß getünchten Häusern und dem Atlantik. Doch für die Einheimischen hat dieser Strand schon immer etwas viel Tieferes bedeutet.",
          "Jahrzehntelang liefen die Boote direkt vom Sand aus. Familien versammelten sich, um beim Entladen des Tagesfangs zu helfen. Netze wurden am Strand ausgebessert, während Kinder zwischen den Booten spielten und dabei die Traditionen lernten, die ihre Gemeinschaft prägten.",
          "Der Strand war nicht einfach nur ein Ort, an dem gefischt wurde. Er war das schlagende Herz des Dorflebens.",
        ],
      },
      {
        title: "Wissen, weitergegeben über Generationen",
        paragraphs: [
          "Eines der bemerkenswertesten Dinge an der traditionellen Fischerei ist, dass ein Großteil ihres Wissens nie aufgeschrieben wurde.",
          "Fischer lernten durch Beobachten.",
          "Sie lernten, den Ozean zu lesen, ergiebige Fanggründe zu erkennen, Wetterumschwünge vorherzusagen und wie sich verschiedene Fischarten im Laufe der Jahreszeiten verhalten. Das Meer wurde zu ihrem Klassenzimmer.",
          "Dieses Wissen wurde von Vätern an Söhne, von Großeltern an Enkelkinder weitergegeben und bewahrt Techniken und Traditionen, die bis heute überleben.",
          "Selbst mit moderner Ausrüstung verlassen sich viele lokale Fischer noch immer auf Instinkte, die sich über Jahre der Erfahrung auf dem Wasser entwickelt haben.",
        ],
      },
      {
        title: "Das sich wandelnde Gesicht von Ericeira",
        paragraphs: [
          "In den letzten Jahrzehnten hat sich Ericeira dramatisch verändert.",
          "Der Tourismus ist gewachsen. Das Surfen hat internationale Anerkennung gebracht. Neue Geschäfte, Restaurants und Besucher haben das Lebenstempo im Dorf verändert.",
          "Doch das Fischereierbe bleibt tief in die Identität Ericeiras eingewoben.",
          "Die Boote sind noch da. Die Geschichten sind noch da.",
          "Und jeden Morgen fahren lokale Fischer weiterhin aufs Meer hinaus und tragen Traditionen fort, die das Dorf geprägt haben, lange bevor es weltberühmt wurde.",
        ],
      },
      {
        title: "Das echte Ericeira erleben",
        paragraphs: [
          "Um Ericeira wirklich zu verstehen, muss man seine Verbindung zum Ozean verstehen.",
          "Jenseits der Surfschulen, Cafés und Aussichtspunkte liegt eine viel ältere Geschichte. Eine Geschichte von Widerstandskraft, harter Arbeit, Familie und Respekt vor der Natur. Es ist die Geschichte der Fischer, die dieses Dorf erschufen.",
          "Wenn Sie heute in Ericeira angeln, genießen Sie nicht einfach nur einen Tag auf dem Wasser. Sie verbinden sich mit einer Tradition, die diese Küste seit Generationen geprägt hat.",
          "Sie erleben einen kleinen Teil dessen, was Ericeira schon immer besonders gemacht hat. Und für ein paar Stunden werden Sie Teil dieser Geschichte.",
        ],
      },
    ],
    closing: {
      kicker: "Traditionelles Angeln in Ericeira entdecken",
      body1:
        "Bei Ericeira Fishing teilen wir mehr als Techniken und Angelplätze. Wir teilen lokales Wissen, Traditionen und eine echte Verbundenheit mit dem Meer, das dieses Dorf seit Jahrhunderten geprägt hat.",
      body2:
        "Ob Sie ein erfahrener Angler sind oder das Angeln zum ersten Mal ausprobieren — unser Ziel ist einfach: Ihnen zu helfen, die authentische Seite Ericeiras zu erleben, einen Wurf nach dem anderen.",
      cta: "Werden Sie Teil der Geschichte",
    },
  },

  galleryPage: {
    hero: {
      kicker: "Aus dem Logbuch",
      title: "Galerie",
      lede: "Momente von Bootstagen, Küstensessions und unseren Skippern entlang der Küste Ericeiras — das Wasser, der Fang und das Leben im Hafen.",
    },
    photos: [
      { src: "/images/gallery-01.jpg", alt: "Gruppe beim Angeln auf dem Boot", orientation: "portrait" },
      { src: "/images/gallery-02.jpg", alt: "Filmfoto — draußen auf dem Wasser", orientation: "landscape" },
      { src: "/images/gallery-03.jpg", alt: "Filmfoto — der Hafen", orientation: "landscape" },
      { src: "/images/gallery-04.jpg", alt: "Filmfoto — Leinen einholen", orientation: "portrait" },
      { src: "/images/gallery-05.jpg", alt: "Filmfoto — die Crew", orientation: "portrait" },
      { src: "/images/gallery-06.jpg", alt: "Filmfoto — der Fang des Tages", orientation: "portrait" },
      { src: "/images/gallery-07.jpg", alt: "Filmfoto — Küste von Ericeira", orientation: "landscape" },
      { src: "/images/gallery-08.jpg", alt: "Filmfoto — Ablegen", orientation: "portrait" },
      { src: "/images/gallery-09.jpg", alt: "Filmfoto — zurück im Hafen", orientation: "portrait" },
    ],
    instagramPrefix: "Weitere Fotos und Tour-Reels auf",
    cta: {
      title: "Möchten Sie auf dem nächsten Foto zu sehen sein?",
      body: "Touren in kleinen Gruppen sind schnell ausgebucht. Tragen Sie sich in die Warteliste ein, und wir informieren Sie, sobald die nächsten Termine frei sind.",
      buttonLabel: "In die Warteliste eintragen",
    },
  },

  getAboardPage: {
    hero: {
      kicker: "An Bord gehen · Warteliste",
      title: "Bereit, das Abendessen mit nach Hause zu bringen?",
      lede: "Unsere Touren sind sorgfältig geplant und für eine begrenzte Teilnehmerzahl ausgelegt. Tragen Sie sich in die Warteliste ein, um vom nächsten freien Platz zu erfahren.",
    },
    schedule: {
      kicker: "Zeitplan",
      bodyPrefix: "Unsere Bootstouren starten in der Regel gegen",
      time1: "6 Uhr",
      bodyMid: "und enden gegen",
      time2: "13 Uhr",
      bodySuffix: ".",
      note: "Das Küstenangeln richtet sich nach Gezeiten, Wind und anderen Wetterfaktoren — wir stimmen den genauen Zeitpunkt mit Ihnen ab.",
    },
    included: {
      kicker: "Leistungen",
    },
    whatsapp: {
      kicker: "Schneller per WhatsApp?",
      body: "Schreiben Sie uns direkt, und wir antworten Ihnen mit dem passenden Angebot — Boot oder Küste, und dem nächsten freien Termin.",
    },
    form: {
      kicker: "Über das Formular anmelden",
      title: "In die Warteliste eintragen",
      body: "Teilen Sie uns mit, ob Sie Boot oder Küste bevorzugen und wann Sie Zeit haben. Wir melden uns mit dem passenden Angebot und setzen Sie auf die Liste für den nächsten freien Termin — oder stellen Sie uns einfach eine allgemeine Frage.",
    },
  },

  faqPage: {
    hero: {
      kicker: "Bevor Sie ablegen",
      title: "Häufig gestellte Fragen",
      lede: "Alles, was Sie vor der Ausfahrt wissen müssen — Erfahrung, Ausrüstung, Wetter, was Sie fangen können, und wie Sie buchen.",
    },
    cta: {
      kicker: "Noch etwas unklar?",
      title: "Fragen Sie uns direkt — wir antworten schnell auf WhatsApp",
      body: "Oder tragen Sie sich in die Warteliste ein, und wir melden uns mit den nächsten verfügbaren Plätzen.",
      buttonLabel: "In die Warteliste eintragen",
    },
  },

  notFound: {
    kicker: "404 · Vom Kurs abgekommen",
    title: "Diese Seite ist aufs Meer hinausgetrieben",
    body: "Die gesuchte Seite existiert nicht. Wir bringen Sie zurück in den Hafen.",
    cta: "Zurück zur Startseite",
  },

  bookingForm: {
    tripOptions: [
      { value: "boat", label: "Bootsangeln", hint: "6 bis 13 Uhr" },
      { value: "shore", label: "Küstenangeln", hint: "Halbtags" },
      { value: "either", label: "Beides möglich", hint: "Noch nicht sicher" },
    ],
    fields: {
      name: { label: "Name", placeholder: "Ihr Name" },
      email: { label: "E-Mail", placeholder: "sie@beispiel.com" },
      phone: { label: "WhatsApp / Telefon", placeholder: "+351 …" },
      trip: { label: "Boot oder Küste?" },
      groupSize: { label: "Wie viele Personen sind Sie?" },
      availability: {
        label: "Wann haben Sie Zeit?",
        placeholder: "z. B. Wochenenden im August oder bestimmte Termine",
      },
      message: {
        label: "Nachricht",
        placeholder: "Alles, was wir wissen sollten — Fragen, Anlässe, Kinder an Bord…",
      },
    },
    optional: "(optional)",
    submit: "In die Warteliste eintragen",
    submitting: "Wird gesendet…",
    errorGeneral:
      "Beim Senden Ihrer Anfrage ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns auf WhatsApp.",
    success: {
      title: "Sie stehen auf der Liste",
      body: "Vielen Dank — wir melden uns bei Ihnen wegen des nächsten freien Platzes. Behalten Sie Ihr Postfach im Auge (und WhatsApp, falls Sie eine Nummer hinterlassen haben).",
      tagline: "Petri Heil",
    },
    validation: {
      name: "Bitte teilen Sie uns Ihren Namen mit",
      email: "Geben Sie eine gültige E-Mail-Adresse ein",
      trip: "Wählen Sie Boot, Küste oder beides",
      groupSize: "Wie viele Personen kommen mit?",
      availability: "Teilen Sie uns mit, wann Sie Zeit haben",
      formInvalid: "Bitte überprüfen Sie das Formular und versuchen Sie es erneut.",
    },
  },

  siteData: {
    species: [
      "Wolfsbarsch",
      "Goldbrasse",
      "Zweibindenbrasse",
      "Rotbrasse",
      "Makrele",
      "Bastardmakrele",
    ],
    included: [
      "Angelrute",
      "Köder",
      "Tageslizenz",
      "Weste",
      "Viel Spaß",
      "Den eigenen Fang mit nach Hause nehmen",
    ],
    team: [
      {
        name: "Mestre Dariu",
        role: "Bootskapitän",
        bio: "Mit über 50 Jahren Erfahrung ist Kapitän Dariu eine der bekanntesten historischen Persönlichkeiten Ericeiras und nennt die Küste Ericeiras sein Zuhause.",
        image: "/images/mestre-dariu.jpg",
      },
      {
        name: "João Pedro",
        role: "Skipper",
        bio: "Organisator und begeisterter Angler — João bringt die Gemeinschaft zusammen, um die Kunst zu erlernen, das Abendessen mit nach Hause zu bringen.",
        image: "/images/joao-pedro.jpg",
      },
    ],
    faqs: [
      {
        q: "Brauche ich Angelerfahrung, um teilzunehmen?",
        a: "Nein. Unsere Angelerlebnisse eignen sich sowohl für absolute Anfänger als auch für erfahrene Angler. Unsere Guides geben während des gesamten Erlebnisses Anleitung und Unterstützung.",
      },
      {
        q: "Ist die Angelausrüstung inbegriffen?",
        a: "Ja. Wir stellen die gesamte notwendige Angelausrüstung zur Verfügung, einschließlich Ruten, Rollen, Angelzubehör, Haken und Köder, je nach gebuchtem Erlebnis.",
      },
      {
        q: "Können Kinder teilnehmen?",
        a: "Auf jeden Fall. Wir heißen regelmäßig Familien mit Kindern willkommen — Angeln ist eine wunderbare Möglichkeit, junge Menschen an die Natur und lokale Traditionen heranzuführen.",
      },
      {
        q: "Was ist das Mindestalter?",
        a: "Die Altersempfehlungen variieren je nach Art des Erlebnisses und den Seebedingungen. Kontaktieren Sie uns, und wir helfen Ihnen, das Richtige für Ihre Familie zu finden.",
      },
      {
        q: "Benötige ich eine Angellizenz?",
        a: "Die Anforderungen an eine Angellizenz hängen von der Art der Aktivität und den örtlichen Vorschriften ab. Für unsere Touren ist die Tageslizenz inbegriffen — wir kümmern uns darum.",
      },
      {
        q: "Welche Fischarten kann ich in Ericeira fangen?",
        a: "Je nach Saison können Sie Wolfsbarsch, Goldbrasse, Zweibindenbrasse, Rotbrasse, Makrele, Bastardmakrele und weitere Arten fangen.",
      },
      {
        q: "Welche Jahreszeit eignet sich am besten zum Angeln in Ericeira?",
        a: "Angeln ist das ganze Jahr über möglich. Verschiedene Jahreszeiten bieten unterschiedliche Möglichkeiten, Fischarten und Angeltechniken.",
      },
      {
        q: "Darf ich den gefangenen Fisch behalten?",
        a: "Ja — sofern der Fisch die gesetzlichen Mindestgrößen erfüllt und die Fischereivorschriften eingehalten werden, nehmen Sie Ihren eigenen Fang mit nach Hause.",
      },
      {
        q: "Was sollte ich mitbringen?",
        a: "Bequeme Kleidung, geeignetes Schuhwerk, Sonnencreme, einen Hut, Wasser sowie eine Kamera oder ein Handy, um das Erlebnis festzuhalten.",
      },
      {
        q: "Was passiert, wenn die Seebedingungen unsicher sind?",
        a: "Sicherheit steht immer an erster Stelle. Wenn Wetter oder Seebedingungen nicht geeignet sind, bieten wir einen alternativen Termin oder eine passende Lösung an.",
      },
      {
        q: "Finden Touren auch bei Regen statt?",
        a: "Leichter Regen hält uns nicht von der Ausfahrt ab, aber starker Wind, Stürme oder unsichere Bedingungen können zu einer Verschiebung führen. Wir halten Sie stets auf dem Laufenden.",
      },
      {
        q: "Wie lange dauern die Angelerlebnisse?",
        a: "Die Dauer variiert je nach gewähltem Erlebnis — wir bieten sowohl Küsten- als auch Bootsangeln an. Bootstouren dauern in der Regel von etwa 6 bis 13 Uhr.",
      },
      {
        q: "Kann ich eine private Angeltour buchen?",
        a: "Ja. Wir bieten private Angelerlebnisse für Familien, Freundesgruppen, Firmenevents und besondere Anlässe an.",
      },
      {
        q: "Eignet sich das Bootsangeln für Anfänger?",
        a: "Ja. Beim Bootsangeln erreichen Sie ergiebige Fanggründe, und unsere Guides unterstützen Sie während der gesamten Tour.",
      },
      {
        q: "Kann ich alleine teilnehmen?",
        a: "Selbstverständlich. Viele unserer Gäste kommen alleine, sei es, um Angeln zu lernen, ihre Fähigkeiten zu verbessern oder einfach ein einzigartiges Erlebnis zu genießen.",
      },
      {
        q: "Kann ich ein Angelerlebnis verschenken?",
        a: "Ja — ein Angelerlebnis ist ein großartiges Geschenk für Geburtstage und besondere Anlässe. Kontaktieren Sie uns, und wir organisieren es für Sie.",
      },
      {
        q: "Wo finden die Erlebnisse statt?",
        a: "Unsere Aktivitäten finden entlang der wunderschönen Küste Ericeiras statt, einem der ikonischsten Fischerei- und Surfziele Portugals.",
      },
      {
        q: "Was macht Ericeira Fishing besonders?",
        a: "Ericeira Fishing wurde von Menschen mit einer echten Verbindung zum Meer und den lokalen Fischereitraditionen ins Leben gerufen. Wir nehmen Sie nicht einfach nur mit zum Angeln — wir teilen das maritime Erbe, das dieses Dorf geprägt hat.",
      },
      {
        q: "Eignet sich das Angeln in Ericeira für Touristen?",
        a: "Ja. Unsere Erlebnisse sind so gestaltet, dass sie für internationale Besucher zugänglich, unterhaltsam und lehrreich sind.",
      },
      {
        q: "Wie weit ist Ericeira von Lissabon entfernt?",
        a: "Ericeira liegt etwa 45 Minuten von Lissabon entfernt und ist damit eines der am besten erreichbaren Angelziele Portugals.",
      },
      {
        q: "Wie kann ich ein Angelerlebnis buchen?",
        a: "Kontaktieren Sie uns über das Formular auf dieser Website, per WhatsApp, E-Mail oder unsere sozialen Netzwerke — wir helfen Ihnen, das richtige Erlebnis auszuwählen.",
      },
    ],
  },
} as const;

