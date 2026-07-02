import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    home: {
      title: "Ericeira Fishing — Pêche en mer et depuis la côte à Ericeira, Portugal",
      description:
        "Découvrez la vraie Ericeira : rencontrez les pêcheurs locaux et apprenez à pêcher en bateau ou depuis le rivage. Petits groupes, tout le matériel et les licences inclus.",
    },
    fishermen: {
      title: "Les pêcheurs d'Ericeira",
      description:
        "L'histoire des hommes qui ont bâti un village depuis la mer — le patrimoine halieutique d'Ericeira, Praia dos Pescadores, et les traditions perpétuées à chaque sortie.",
    },
    gallery: {
      title: "Galerie",
      description:
        "Photos des sorties de pêche en mer et depuis le rivage le long de la côte d'Ericeira — l'eau, la prise, et la vie au port.",
    },
    getAboard: {
      title: "Embarquez",
      description:
        "Rejoignez la liste d'attente pour une sortie de pêche en bateau ou depuis le rivage à Ericeira. Horaires, ce qui est inclus, WhatsApp, et le formulaire de réservation — tout au même endroit.",
    },
    faq: {
      title: "FAQ",
      description:
        "Tout ce qu'il faut savoir avant une sortie de pêche à Ericeira — expérience, matériel, licences, météo, espèces, et comment réserver.",
    },
  },

  nav: {
    home: "Accueil",
    fishermen: "Les pêcheurs",
    gallery: "Galerie",
    faq: "FAQ",
    getAboard: "Embarquer",
  },

  header: {
    homeAriaLabel: "Ericeira Fishing — accueil",
    openMenu: "Ouvrir le menu",
    mobileNavLabel: "Mobile",
    primaryNavLabel: "Principal",
  },

  languageSwitcher: {
    label: "Langue",
  },

  footer: {
    explore: "Explorer",
    dropLine: "Envoyez-nous un mot",
    getAboard: "Embarquez",
    whatsappPrefix: "WhatsApp",
    rightsSuffix: "Ericeira, Portugal",
  },

  home: {
    hero: {
      locationLine: "Ericeira · Portugal ·",
      titleMain: "Renouez avec les racines d'Ericeira — ",
      titleEmphasis: "et rapportez le dîner à la maison",
      body: "Découvrez la vraie Ericeira. Rencontrez les pêcheurs locaux et apprenez à pêcher en bateau ou depuis le rivage, sur l'un des littoraux les plus emblématiques du Portugal.",
      ctaPrimary: "Embarquer",
      ctaSecondary: "Rencontrer les pêcheurs",
      photoAlt: "Bateau de pêche au large de la côte d'Ericeira au lever du soleil",
      photoCaption: "Praia dos Pescadores, tradition depuis toujours",
    },
    glance: {
      kicker: "En bref",
      title: "Une journée en mer, comme Ericeira l'a toujours vécue",
      items: [
        {
          title: "Accessible à tous les âges",
          body: "Débutants, familles avec enfants et pêcheurs expérimentés — chaque sortie est encadrée dès le premier lancer.",
        },
        {
          title: "Tout est inclus",
          body: "Cannes, appâts, licence journalière et gilet sont fournis. Apportez simplement de la crème solaire, de l'eau et un appareil photo.",
        },
        {
          title: "Une expérience vraiment locale",
          body: "Vous pêchez avec des équipages qui ont grandi sur ce port — porteurs de traditions qui ont façonné le village pendant des générations.",
        },
      ],
    },
    story: {
      kicker: "Les pêcheurs d'Ericeira",
      photoAlt: "Bateaux de pêche échoués sur Praia dos Pescadores",
      photoCaption: "Praia dos Pescadores",
      quote: "“La pêche n'a jamais été un simple métier. C'était un art de vivre.”",
      body: "Avant qu'Ericeira ne devienne célèbre pour ses vagues de classe mondiale et sa culture du surf, elle était connue pour tout autre chose : ses pêcheurs. Ericeira Fishing est né d'un lien profond avec la mer et des traditions de pêche de ce village — et chaque sortie perpétue cette histoire.",
      cta: "Lire toute l'histoire",
    },
    services: {
      kicker: "Deux façons de prendre le large",
      title: "Choisissez votre eau : en bateau ou depuis le rivage",
      cta: "Réserver une place",
      items: [
        {
          id: "boat",
          imageAlt: "Des invités pêchant depuis le bateau avec le skipper",
          kicker: "Sortie n° 01 · En bateau",
          title: "Rencontrez les pêcheurs — pêche en mer",
          body: "Une excursion guidée avec une visite du port et un moment avec les pêcheurs locaux. Vous pêcherez avec un skipper et un équipage expérimentés, tout le matériel et les licences de pêche requises étant inclus. Les groupes restent petits pour une attention personnalisée et davantage de sécurité.",
          details: [
            "Généralement de 6h à 13h",
            "Petits groupes uniquement",
            "Matériel, licence et gilet inclus",
          ],
        },
        {
          id: "shore",
          imageAlt: "Pêche depuis les rochers le long du littoral d'Ericeira",
          kicker: "Sortie n° 02 · Depuis le rivage",
          title: "Pêche depuis le rivage",
          body: "Une expérience côtière d'une demi-journée conçue pour tous — tous les niveaux et tous les âges. Les pêcheurs locaux vous enseignent les techniques pour capturer les espèces régionales depuis le magnifique littoral d'Ericeira. Les petits groupes garantissent une ambiance conviviale et détendue. Les sessions depuis le rivage dépendent de la marée, du vent et d'autres facteurs météorologiques.",
          details: [
            "Session d'une demi-journée",
            "Idéal pour débutants et familles",
            "Selon la marée et la météo",
          ],
        },
      ],
    },
    team: {
      kicker: "L'équipage",
      title: "Guidés par des personnes qui connaissent ces eaux comme leur poche",
    },
    gallery: {
      kicker: "Extrait du journal de bord",
      title: "Galerie",
      cta: "Voir toutes les photos",
      photos: [
        { src: "/images/gallery-01.jpg", alt: "Groupe pêchant sur le bateau" },
        { src: "/images/gallery-02.jpg", alt: "Photo argentique — en mer" },
        { src: "/images/gallery-04.jpg", alt: "Photo argentique — remontée des lignes" },
        { src: "/images/gallery-06.jpg", alt: "Photo argentique — la prise du jour" },
      ],
    },
    faq: {
      kicker: "Avant de larguer les amarres",
      title: "Questions fréquentes",
      body: "Aucune expérience requise, le matériel est inclus, et oui — vous gardez le poisson. La liste complète répond à tout le reste.",
      ctaPrefix: "Toutes les",
      ctaSuffix: "questions",
    },
    cta: {
      kicker: "Places limitées · Petits groupes",
      title: "Nos sorties sont soigneusement organisées pour un nombre limité de personnes",
      bodyPrefix:
        "Rejoignez la liste d'attente pour connaître la prochaine place disponible — inclus à chaque sortie : ",
      bodySuffix: ", et le plaisir de rapporter votre propre poisson à la maison.",
      ctaPrimary: "Rejoindre la liste d'attente",
      ctaSecondary: "Écrivez-nous sur WhatsApp",
    },
  },

  fishermenPage: {
    hero: {
      kicker: "Contexte · L'histoire derrière les sorties",
      title:
        "Les pêcheurs d'Ericeira : les hommes qui ont bâti un village depuis la mer",
      lede: "Avant qu'Ericeira ne devienne célèbre pour ses vagues de classe mondiale et sa culture du surf, elle était connue pour tout autre chose : ses pêcheurs. Bien avant l'arrivée des visiteurs planche sous le bras, des générations d'hommes du village prenaient la mer avant le lever du soleil, ne rentrant que lorsque l'océan le leur permettait.",
    },
    intro:
      "L'histoire d'Ericeira est, à bien des égards, celle de ces pêcheurs et de leurs familles.",
    chapters: [
      {
        title: "Un village construit autour de l'océan",
        paragraphs: [
          "Pendant des siècles, la mer a été le gagne-pain des habitants d'Ericeira.",
          "Chaque matin, des bateaux en bois quittaient le rivage avec à leur bord des hommes dont la vie dépendait de leur connaissance de l'océan. Il n'y avait ni applications météo, ni GPS, ni électronique moderne. L'expérience, l'instinct et le respect de la mer faisaient souvent la différence entre rentrer sain et sauf ou ne pas rentrer du tout.",
          "La pêche n'a jamais été un simple métier. C'était un art de vivre.",
          "Les enfants grandissaient en regardant leurs pères préparer filets et lignes. Les histoires de tempêtes, de prises gigantesques et de journées difficiles en mer se transmettaient d'une génération à l'autre. Le rythme de la vie quotidienne à Ericeira était dicté par les marées, les vents et l'Atlantique lui-même.",
        ],
      },
      {
        title: "La vie était dure, mais elle était honnête",
        paragraphs: [
          "La pêche à Ericeira n'a jamais été facile.",
          "L'océan Atlantique le long de cette côte est magnifique, mais il peut aussi se montrer impitoyable. Courants forts, mer agitée et météo imprévisible faisaient de chaque sortie une aventure.",
          "Beaucoup de pêcheurs quittaient la maison avant l'aube et rentraient après de longues heures en mer. Certains jours apportaient des prises abondantes. D'autres n'apportaient guère plus que de la fatigue et l'espoir du lendemain.",
          "Pourtant, malgré les épreuves, nombre de pêcheurs locaux vous diraient qu'ils n'auraient choisi aucune autre vie.",
          "Il y avait de la fierté à subvenir aux besoins de sa famille. De la fierté à comprendre la mer. De la fierté à perpétuer une tradition remontant à plusieurs générations.",
        ],
      },
      {
        title: "Praia dos Pescadores : le cœur d'Ericeira",
        image: {
          src: "/images/praia-dos-pescadores.jpg",
          alt: "Bateaux de pêche sur le sable à Praia dos Pescadores",
          caption: "Praia dos Pescadores — le cœur battant de la vie du village",
        },
        paragraphs: [
          "Aujourd'hui, Praia dos Pescadores est l'un des endroits les plus photographiés d'Ericeira.",
          "Les visiteurs y voient une belle plage encadrée de maisons blanchies à la chaux et par l'océan Atlantique. Mais pour les habitants, cette plage a toujours représenté quelque chose de bien plus profond.",
          "Pendant des décennies, les bateaux étaient mis à l'eau directement depuis le sable. Les familles se rassemblaient pour aider à débarquer la pêche du jour. Les filets étaient réparés sur la plage, et les enfants jouaient parmi les bateaux tout en apprenant les traditions qui définissaient leur communauté.",
          "La plage n'était pas simplement un lieu où l'on pêchait. C'était le cœur battant de la vie du village.",
        ],
      },
      {
        title: "Un savoir transmis de génération en génération",
        paragraphs: [
          "L'une des choses les plus remarquables de la pêche traditionnelle est qu'une grande partie de ce savoir n'a jamais été écrite.",
          "Les pêcheurs apprenaient en observant.",
          "Ils apprenaient à lire l'océan, à repérer les zones de pêche productives, à anticiper les changements de temps, et à comprendre le comportement des différentes espèces selon les saisons. La mer était leur salle de classe.",
          "Ce savoir se transmettait des pères aux fils, des grands-parents aux petits-enfants, préservant des techniques et des traditions qui perdurent encore aujourd'hui.",
          "Même avec du matériel moderne, de nombreux pêcheurs locaux s'appuient encore sur des instincts forgés par des années d'expérience sur l'eau.",
        ],
      },
      {
        title: "Le visage changeant d'Ericeira",
        paragraphs: [
          "Au cours des dernières décennies, Ericeira s'est transformée de façon spectaculaire.",
          "Le tourisme s'est développé. Le surf lui a apporté une reconnaissance internationale. De nouveaux commerces, restaurants et visiteurs ont changé le rythme de vie du village.",
          "Pourtant, le patrimoine de la pêche reste profondément ancré dans l'identité d'Ericeira.",
          "Les bateaux sont toujours là. Les histoires sont toujours là.",
          "Et chaque matin, les pêcheurs locaux continuent de prendre la mer, perpétuant des traditions qui ont contribué à façonner le village bien avant qu'il ne devienne célèbre dans le monde entier.",
        ],
      },
      {
        title: "Vivre la vraie Ericeira",
        paragraphs: [
          "Pour vraiment comprendre Ericeira, il faut comprendre son lien avec l'océan.",
          "Au-delà des écoles de surf, des cafés et des points de vue, se cache une histoire bien plus ancienne. Une histoire de résilience, de dur labeur, de famille et de respect de la nature. C'est l'histoire des pêcheurs qui ont bâti ce village.",
          "Lorsque vous pêchez aujourd'hui à Ericeira, vous ne profitez pas simplement d'une journée sur l'eau. Vous renouez avec une tradition qui définit ce littoral depuis des générations.",
          "Vous découvrez une petite partie de ce qui a toujours fait la particularité d'Ericeira. Et le temps de quelques heures, vous faites partie de cette histoire.",
        ],
      },
    ],
    closing: {
      kicker: "Découvrez la pêche traditionnelle à Ericeira",
      body1:
        "Chez Ericeira Fishing, nous partageons bien plus que des techniques et des coins de pêche. Nous partageons un savoir local, des traditions et un lien authentique avec la mer qui façonne ce village depuis des siècles.",
      body2:
        "Que vous soyez un pêcheur expérimenté ou que vous essayiez la pêche pour la première fois, notre objectif est simple : vous faire vivre l'Ericeira authentique, une prise à la fois.",
      cta: "Faites partie de l'histoire",
    },
  },

  galleryPage: {
    hero: {
      kicker: "Extrait du journal de bord",
      title: "Galerie",
      lede: "Instants capturés lors de sorties en mer, de sessions depuis le rivage et avec nos skippers le long de la côte d'Ericeira — l'eau, la prise, et la vie au port.",
    },
    photos: [
      { src: "/images/gallery-01.jpg", alt: "Groupe pêchant sur le bateau", orientation: "portrait" },
      { src: "/images/gallery-02.jpg", alt: "Photo argentique — en mer", orientation: "landscape" },
      { src: "/images/gallery-03.jpg", alt: "Photo argentique — le port", orientation: "landscape" },
      { src: "/images/gallery-04.jpg", alt: "Photo argentique — remontée des lignes", orientation: "portrait" },
      { src: "/images/gallery-05.jpg", alt: "Photo argentique — l'équipage", orientation: "portrait" },
      { src: "/images/gallery-06.jpg", alt: "Photo argentique — la prise du jour", orientation: "portrait" },
      { src: "/images/gallery-07.jpg", alt: "Photo argentique — littoral d'Ericeira", orientation: "landscape" },
      { src: "/images/gallery-08.jpg", alt: "Photo argentique — départ en mer", orientation: "portrait" },
      { src: "/images/gallery-09.jpg", alt: "Photo argentique — retour au port", orientation: "portrait" },
    ],
    instagramPrefix: "Plus de photos et de vidéos de sorties sur",
    cta: {
      title: "Envie d'apparaître sur la prochaine photo ?",
      body: "Les sorties en petit groupe se remplissent vite. Rejoignez la liste d'attente et nous vous préviendrons dès que les prochaines dates s'ouvrent.",
      buttonLabel: "Rejoindre la liste d'attente",
    },
  },

  getAboardPage: {
    hero: {
      kicker: "Embarquer · Liste d'attente",
      title: "Prêt à rapporter le dîner à la maison ?",
      lede: "Nos sorties sont soigneusement organisées pour un nombre limité de personnes. Rejoignez la liste d'attente pour connaître la prochaine place disponible.",
    },
    schedule: {
      kicker: "Horaires",
      bodyPrefix: "Nos sorties en bateau commencent généralement vers",
      time1: "6h",
      bodyMid: "et se terminent vers",
      time2: "13h",
      bodySuffix: ".",
      note: "La pêche depuis le rivage dépend de la marée, du vent et d'autres facteurs météorologiques — nous confirmerons l'horaire avec vous.",
    },
    included: {
      kicker: "Ce qui est inclus",
    },
    whatsapp: {
      kicker: "Plus rapide sur WhatsApp ?",
      body: "Écrivez-nous directement et nous vous répondrons avec ce qui convient — bateau ou rivage, et la prochaine disponibilité.",
    },
    form: {
      kicker: "Inscrivez-vous via le formulaire",
      title: "Rejoindre la liste d'attente",
      body: "Dites-nous si vous préférez le bateau ou le rivage, et vos disponibilités. Nous vous répondrons avec ce qui convient et vous ajouterons à la liste pour la prochaine ouverture — ou posez-nous simplement une question générale.",
    },
  },

  faqPage: {
    hero: {
      kicker: "Avant de larguer les amarres",
      title: "Questions fréquentes",
      lede: "Tout ce qu'il faut savoir avant de prendre le large — expérience, matériel, météo, ce que vous pouvez pêcher, et comment réserver.",
    },
    cta: {
      kicker: "Une question en tête ?",
      title: "Demandez-nous directement — nous répondons vite sur WhatsApp",
      body: "Ou rejoignez la liste d'attente et nous vous recontacterons avec les prochaines places disponibles.",
      buttonLabel: "Rejoindre la liste d'attente",
    },
  },

  notFound: {
    kicker: "404 · Hors carte",
    title: "Cette page a dérivé en mer",
    body: "La page que vous recherchez n'existe pas. Ramenons-vous au port.",
    cta: "Retour à l'accueil",
  },

  bookingForm: {
    tripOptions: [
      { value: "boat", label: "Pêche en bateau", hint: "6h – 13h" },
      { value: "shore", label: "Pêche depuis le rivage", hint: "Demi-journée" },
      { value: "either", label: "Peu importe", hint: "Pas encore sûr" },
    ],
    fields: {
      name: { label: "Nom", placeholder: "Votre nom" },
      email: { label: "E-mail", placeholder: "vous@exemple.com" },
      phone: { label: "WhatsApp / téléphone", placeholder: "+351 …" },
      trip: { label: "Bateau ou rivage ?" },
      groupSize: { label: "Combien serez-vous ?" },
      availability: {
        label: "Quand êtes-vous disponible ?",
        placeholder: "ex. les week-ends d'août, ou des dates précises",
      },
      message: {
        label: "Message",
        placeholder: "Tout ce que nous devrions savoir — questions, occasions particulières, enfants à bord…",
      },
    },
    optional: "(facultatif)",
    submit: "Rejoindre la liste d'attente",
    submitting: "Envoi en cours…",
    errorGeneral:
      "Une erreur s'est produite lors de l'envoi de votre demande. Veuillez réessayer, ou écrivez-nous sur WhatsApp.",
    success: {
      title: "Vous êtes sur la liste",
      body: "Merci — nous vous contacterons dès qu'une place sera disponible. Gardez un œil sur votre boîte mail (et sur WhatsApp, si vous avez laissé un numéro).",
      tagline: "Bonne pêche",
    },
    validation: {
      name: "Merci de nous indiquer votre nom",
      email: "Saisissez une adresse e-mail valide",
      trip: "Choisissez bateau, rivage, ou peu importe",
      groupSize: "Combien serez-vous ?",
      availability: "Indiquez-nous vos disponibilités",
      formInvalid: "Veuillez vérifier le formulaire et réessayer.",
    },
  },

  siteData: {
    species: [
      "Bar",
      "Dorade",
      "Dorade grise",
      "Pageot rouge",
      "Maquereau",
      "Chinchard",
    ],
    included: [
      "Canne à pêche",
      "Appât",
      "Licence journalière",
      "Gilet",
      "Bonne humeur garantie",
      "Rapportez votre propre poisson à la maison",
    ],
    team: [
      {
        name: "Mestre Dariu",
        role: "Capitaine du bateau",
        bio: "Fort de plus de 50 ans d'expérience, le capitaine Dariu est l'une des figures historiques les plus célèbres d'Ericeira et considère le littoral d'Ericeira comme sa maison.",
        image: "/images/mestre-dariu.jpg",
      },
      {
        name: "João Pedro",
        role: "Skipper",
        bio: "Organisateur et passionné de pêche, João rassemble la communauté pour transmettre l'art de rapporter le dîner à la maison.",
        image: "/images/joao-pedro.jpg",
      },
    ],
    faqs: [
      {
        q: "Ai-je besoin d'expérience en pêche pour participer ?",
        a: "Non. Nos expériences de pêche conviennent aussi bien aux débutants complets qu'aux pêcheurs expérimentés. Nos guides offrent instructions et accompagnement tout au long de l'expérience.",
      },
      {
        q: "Le matériel de pêche est-il inclus ?",
        a: "Oui. Nous pouvons fournir tout le matériel de pêche nécessaire, y compris cannes, moulinets, accessoires, hameçons et appâts, selon l'expérience réservée.",
      },
      {
        q: "Les enfants peuvent-ils participer ?",
        a: "Absolument. Nous accueillons régulièrement des familles avec enfants — la pêche est une merveilleuse façon d'initier les plus jeunes à la nature et aux traditions locales.",
      },
      {
        q: "Quel est l'âge minimum ?",
        a: "Les recommandations d'âge varient selon le type d'expérience et les conditions de mer. Contactez-nous et nous vous aiderons à trouver la formule adaptée à votre famille.",
      },
      {
        q: "Ai-je besoin d'une licence de pêche ?",
        a: "Les exigences en matière de licence de pêche dépendent du type d'activité et de la réglementation locale. Pour nos sorties, la licence journalière est incluse — nous nous en occupons pour vous.",
      },
      {
        q: "Quelles espèces de poissons puis-je pêcher à Ericeira ?",
        a: "Selon la saison, vous pouvez pêcher le bar, la dorade, la dorade grise, le pageot rouge, le maquereau, le chinchard, et bien d'autres.",
      },
      {
        q: "Quelle est la meilleure période de l'année pour pêcher à Ericeira ?",
        a: "La pêche est possible toute l'année. Chaque saison offre des opportunités, des espèces et des techniques de pêche différentes.",
      },
      {
        q: "Puis-je garder le poisson que je pêche ?",
        a: "Oui — à condition que le poisson respecte les tailles légales et que la réglementation soit respectée, vous rapportez votre propre prise à la maison.",
      },
      {
        q: "Que dois-je apporter ?",
        a: "Des vêtements confortables, des chaussures adaptées, de la crème solaire, un chapeau, de l'eau, et un appareil photo ou un téléphone pour immortaliser l'expérience.",
      },
      {
        q: "Que se passe-t-il si les conditions de mer sont dangereuses ?",
        a: "La sécurité passe toujours en premier. Si la météo ou les conditions de mer ne sont pas favorables, nous proposerons une autre date ou une solution adaptée.",
      },
      {
        q: "Les sorties ont-elles lieu par temps de pluie ?",
        a: "Une pluie légère n'empêche pas les sorties, mais des vents forts, des tempêtes ou des conditions dangereuses peuvent entraîner un report. Nous vous tenons toujours informés.",
      },
      {
        q: "Combien de temps durent les expériences de pêche ?",
        a: "La durée varie selon l'expérience choisie — nous proposons des options de pêche depuis le rivage et en bateau. Les sorties en bateau se déroulent généralement de 6h à 13h.",
      },
      {
        q: "Puis-je réserver une sortie de pêche privée ?",
        a: "Oui. Nous proposons des expériences de pêche privées pour les familles, les groupes d'amis, les événements d'entreprise et les occasions spéciales.",
      },
      {
        q: "La pêche en bateau convient-elle aux débutants ?",
        a: "Oui. La pêche en bateau vous donne accès à des zones de pêche productives, et nos guides vous assistent tout au long de la sortie.",
      },
      {
        q: "Puis-je venir seul ?",
        a: "Bien sûr. Beaucoup de nos invités viennent individuellement, qu'ils souhaitent apprendre la pêche, perfectionner leurs techniques, ou simplement vivre une expérience unique.",
      },
      {
        q: "Puis-je offrir une expérience de pêche en cadeau ?",
        a: "Oui — une expérience de pêche fait un excellent cadeau pour les anniversaires et occasions spéciales. Contactez-nous et nous nous occuperons de tout.",
      },
      {
        q: "Où se déroulent les expériences ?",
        a: "Nos activités se déroulent le long du magnifique littoral d'Ericeira, l'une des destinations de pêche et de surf les plus emblématiques du Portugal.",
      },
      {
        q: "Qu'est-ce qui rend Ericeira Fishing différent ?",
        a: "Ericeira Fishing a été créé par des personnes ayant un lien authentique avec la mer et les traditions de pêche locales. Nous ne vous emmenons pas simplement pêcher — nous partageons le patrimoine maritime qui a façonné ce village.",
      },
      {
        q: "La pêche à Ericeira convient-elle aux touristes ?",
        a: "Oui. Nos expériences sont conçues pour être accessibles, agréables et instructives pour les visiteurs internationaux.",
      },
      {
        q: "À quelle distance se trouve Ericeira de Lisbonne ?",
        a: "Ericeira se trouve à environ 45 minutes de Lisbonne, ce qui en fait l'une des destinations de pêche les plus accessibles du Portugal.",
      },
      {
        q: "Comment puis-je réserver une expérience de pêche ?",
        a: "Contactez-nous via le formulaire de ce site, WhatsApp, e-mail, ou nos réseaux sociaux — nous vous aiderons à choisir l'expérience qui vous convient.",
      },
    ],
  },
} as const;
