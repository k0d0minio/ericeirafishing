import type { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    home: {
      title: "Ericeira Fishing — Pesca de barco e de terra na Ericeira, Portugal",
      description:
        "Viva a verdadeira Ericeira: conheça os pescadores locais e aprenda a pescar de barco ou de terra. Grupos pequenos, com todo o equipamento e licenças incluídos.",
    },
    fishermen: {
      title: "Os Pescadores da Ericeira",
      description:
        "A história dos homens que construíram uma vila a partir do mar — a herança piscatória da Ericeira, a Praia dos Pescadores, e as tradições que continuam presentes em cada saída.",
    },
    gallery: {
      title: "Galeria",
      description:
        "Fotografias de saídas de pesca, de barco e de terra, ao longo da costa da Ericeira — o mar, a pesca e a vida no porto.",
    },
    getAboard: {
      title: "Embarque Connosco",
      description:
        "Inscreva-se na lista de espera para uma saída de pesca na Ericeira, de barco ou de terra. Horários, o que está incluído, WhatsApp e o formulário de reserva — tudo num só lugar.",
    },
    faq: {
      title: "Perguntas Frequentes",
      description:
        "Tudo o que precisa de saber antes de uma saída de pesca na Ericeira — experiência, equipamento, licenças, condições meteorológicas, espécies e como reservar.",
    },
  },

  nav: {
    home: "Início",
    fishermen: "Os Pescadores",
    gallery: "Galeria",
    faq: "Perguntas Frequentes",
    getAboard: "Embarque connosco",
  },

  header: {
    homeAriaLabel: "Ericeira Fishing — página inicial",
    openMenu: "Abrir menu",
    mobileNavLabel: "Móvel",
    primaryNavLabel: "Principal",
  },

  languageSwitcher: {
    label: "Idioma",
  },

  footer: {
    explore: "Explorar",
    dropLine: "Fale connosco",
    getAboard: "Embarque Connosco",
    whatsappPrefix: "WhatsApp",
    rightsSuffix: "Ericeira, Portugal",
  },

  home: {
    hero: {
      locationLine: "Ericeira · Portugal ·",
      titleMain: "Ligue-se às raízes da Ericeira — ",
      titleEmphasis: "e leve o jantar para casa",
      body: "Viva a verdadeira Ericeira. Conheça os pescadores locais e aprenda a pescar de barco ou de terra, numa das costas mais emblemáticas de Portugal.",
      ctaPrimary: "Embarque connosco",
      ctaSecondary: "Conheça os pescadores",
      photoAlt: "Barco de pesca ao largo da costa da Ericeira ao nascer do sol",
      photoCaption: "Praia dos Pescadores, tradição desde sempre",
    },
    glance: {
      kicker: "Em poucas palavras",
      title: "Um dia no mar, como a Ericeira sempre fez",
      items: [
        {
          title: "Para todas as idades",
          body: "Iniciantes, famílias com crianças e pescadores experientes — cada saída é acompanhada desde o primeiro lançamento.",
        },
        {
          title: "Tudo incluído",
          body: "Canas, isco, licença diária e colete são todos fornecidos. Basta trazer protetor solar, água e uma máquina fotográfica.",
        },
        {
          title: "Verdadeiramente local",
          body: "Pesca com tripulações que cresceram neste porto — dando continuidade a tradições que moldaram a vila durante gerações.",
        },
      ],
    },
    story: {
      kicker: "Os pescadores da Ericeira",
      photoAlt: "Barcos de pesca na Praia dos Pescadores",
      photoCaption: "Praia dos Pescadores",
      quote: "“A pesca nunca foi apenas uma profissão. Era um modo de vida.”",
      body: "Antes de a Ericeira ficar conhecida pelas ondas de nível mundial e pela cultura do surf, era conhecida por algo completamente diferente: os seus pescadores. A Ericeira Fishing nasceu de uma ligação profunda ao mar e às tradições piscatórias desta vila — e cada saída dá continuidade a essa história.",
      cta: "Ler a história completa",
    },
    services: {
      kicker: "Duas formas de sair",
      title: "Escolha a sua água: de barco ou a partir da terra",
      cta: "Reservar um lugar",
      items: [
        {
          id: "boat",
          imageAlt: "Convidados a pescar do barco com o mestre",
          kicker: "Saída Nº 01 · De barco",
          title: "Conheça os pescadores — pesca de barco",
          body: "Uma excursão acompanhada com um passeio pelo porto e tempo junto dos pescadores locais. Vai pescar com um mestre e uma tripulação experientes, com todo o equipamento e as licenças de pesca necessárias incluídos. Os grupos são mantidos pequenos para garantir atenção pessoal e segurança.",
          details: [
            "Normalmente das 6h às 13h",
            "Apenas grupos pequenos",
            "Equipamento, licença e colete incluídos",
          ],
        },
        {
          id: "shore",
          imageAlt: "Pesca de terra a partir das rochas ao longo da costa da Ericeira",
          kicker: "Saída Nº 02 · De terra",
          title: "Pesca de terra",
          body: "Uma experiência costeira de meio dia pensada para todos — todos os níveis de experiência e idades. Os pescadores locais ensinam as técnicas para apanhar espécies regionais a partir da bela costa da Ericeira. Os grupos pequenos tornam a experiência acolhedora e descontraída. As saídas de terra dependem da maré, do vento e de outros fatores meteorológicos.",
          details: [
            "Sessão de meio dia",
            "Ótimo para iniciantes e famílias",
            "Sujeito a maré e condições meteorológicas",
          ],
        },
      ],
    },
    team: {
      kicker: "A tripulação",
      title: "Guiado por quem conhece estas águas como ninguém",
    },
    gallery: {
      kicker: "Do diário de bordo",
      title: "Galeria",
      cta: "Ver todas as fotografias",
      photos: [
        { src: "/images/gallery-01.jpg", alt: "Grupo a pescar no barco" },
        { src: "/images/gallery-02.jpg", alt: "Foto em filme — no mar" },
        { src: "/images/gallery-04.jpg", alt: "Foto em filme — a puxar as linhas" },
        { src: "/images/gallery-06.jpg", alt: "Foto em filme — a pesca do dia" },
      ],
    },
    faq: {
      kicker: "Antes de zarpar",
      title: "Perguntas frequentes",
      body: "Não é preciso experiência, o equipamento está incluído e sim — o peixe é seu. A lista completa esclarece tudo o resto.",
      ctaPrefix: "Todas as",
      ctaSuffix: "perguntas",
    },
    cta: {
      kicker: "Lugares limitados · Grupos pequenos",
      title: "As nossas saídas são cuidadosamente planeadas para um número limitado de pessoas",
      bodyPrefix:
        "Inscreva-se na lista de espera para saber a próxima vaga disponível — incluído em todas as saídas: ",
      bodySuffix: ", e levar o seu próprio peixe para casa.",
      ctaPrimary: "Inscrever na lista de espera",
      ctaSecondary: "Fale connosco no WhatsApp",
    },
  },

  fishermenPage: {
    hero: {
      kicker: "Contexto · A história por trás das saídas",
      title:
        "Os Pescadores da Ericeira: os homens que construíram uma vila a partir do mar",
      lede: "Antes de a Ericeira ficar conhecida pelas ondas de nível mundial e pela cultura do surf, era conhecida por algo completamente diferente: os seus pescadores. Muito antes de os visitantes chegarem com pranchas debaixo do braço, gerações de homens locais partiam para o Atlântico antes do nascer do sol, só regressando quando o mar o permitia.",
    },
    intro:
      "A história da Ericeira é, em muitos aspetos, a história destes pescadores e das suas famílias.",
    chapters: [
      {
        title: "Uma vila construída à volta do oceano",
        paragraphs: [
          "Durante séculos, o mar foi o sustento do povo da Ericeira.",
          "Todas as manhãs, barcos de madeira partiam da costa levando homens cuja vida dependia do seu conhecimento do oceano. Não havia aplicações meteorológicas, GPS ou eletrónica moderna. A experiência, o instinto e o respeito pelo mar eram, muitas vezes, a diferença entre voltar a casa em segurança ou não voltar de todo.",
          "A pesca nunca foi apenas uma profissão. Era um modo de vida.",
          "As crianças cresciam a ver os pais a preparar redes e linhas. Histórias de temporais, capturas gigantescas e dias difíceis no mar passavam de geração em geração. O ritmo do dia a dia na Ericeira era ditado pelas marés, pelos ventos e pelo próprio Atlântico.",
        ],
      },
      {
        title: "A vida era dura, mas era honesta",
        paragraphs: [
          "A pesca na Ericeira nunca foi fácil.",
          "O Oceano Atlântico ao longo deste troço de costa é belo, mas também pode ser implacável. Correntes fortes, mar agitado e um tempo imprevisível faziam de cada saída uma aventura.",
          "Muitos pescadores saíam de casa antes do amanhecer e regressavam depois de longas horas no mar. Alguns dias traziam pescas abundantes. Outros pouco mais traziam do que cansaço e esperança para o dia seguinte.",
          "Ainda assim, apesar das dificuldades, muitos pescadores locais diriam que não teriam escolhido outra vida.",
          "Havia orgulho em sustentar a família. Orgulho em compreender o mar. Orgulho em continuar uma tradição que remontava a gerações passadas.",
        ],
      },
      {
        title: "Praia dos Pescadores: o coração da Ericeira",
        image: {
          src: "/images/praia-dos-pescadores.jpg",
          alt: "Barcos de pesca na areia da Praia dos Pescadores",
          caption: "Praia dos Pescadores — o coração pulsante da vida da vila",
        },
        paragraphs: [
          "Hoje, a Praia dos Pescadores é um dos locais mais fotografados da Ericeira.",
          "Os visitantes veem uma bela praia emoldurada por casas caiadas de branco e pelo Oceano Atlântico. Mas para os locais, esta praia sempre representou algo muito mais profundo.",
          "Durante décadas, os barcos eram lançados diretamente a partir da areia. As famílias reuniam-se para ajudar a descarregar a pesca do dia. As redes eram reparadas na praia, e as crianças brincavam entre os barcos enquanto aprendiam as tradições que definiam a sua comunidade.",
          "A praia não era simplesmente um local onde se pescava. Era o coração pulsante da vida da vila.",
        ],
      },
      {
        title: "Conhecimento transmitido entre gerações",
        paragraphs: [
          "Uma das coisas mais notáveis sobre a pesca tradicional é que muito do seu conhecimento nunca foi escrito.",
          "Os pescadores aprendiam a observar.",
          "Aprendiam a ler o oceano, a identificar zonas de pesca produtivas, a prever mudanças de tempo e a perceber como as diferentes espécies se comportavam ao longo das estações. O mar tornou-se a sua sala de aula.",
          "Este conhecimento era transmitido de pais para filhos, de avós para netos, preservando técnicas e tradições que continuam a sobreviver até hoje.",
          "Mesmo com equipamento moderno, muitos pescadores locais continuam a confiar em instintos desenvolvidos ao longo de anos de experiência no mar.",
        ],
      },
      {
        title: "O rosto em mudança da Ericeira",
        paragraphs: [
          "Ao longo das últimas décadas, a Ericeira transformou-se drasticamente.",
          "O turismo cresceu. O surf trouxe reconhecimento internacional. Novos negócios, restaurantes e visitantes mudaram o ritmo de vida na vila.",
          "No entanto, a herança piscatória continua profundamente enraizada na identidade da Ericeira.",
          "Os barcos continuam lá. As histórias continuam lá.",
          "E todas as manhãs, os pescadores locais continuam a partir para o mar, dando continuidade a tradições que ajudaram a moldar a vila muito antes de esta se tornar famosa em todo o mundo.",
        ],
      },
      {
        title: "Viver a verdadeira Ericeira",
        paragraphs: [
          "Para verdadeiramente compreender a Ericeira, é preciso compreender a sua ligação ao oceano.",
          "Para além das escolas de surf, dos cafés e dos miradouros, existe uma história muito mais antiga. Uma história de resiliência, trabalho árduo, família e respeito pela natureza. É a história dos pescadores que construíram esta vila.",
          "Quando pesca na Ericeira hoje, não está simplesmente a desfrutar de um dia no mar. Está a ligar-se a uma tradição que definiu esta costa durante gerações.",
          "Está a viver uma pequena parte daquilo que sempre tornou a Ericeira especial. E, por umas horas, torna-se parte dessa história.",
        ],
      },
    ],
    closing: {
      kicker: "Descubra a pesca tradicional na Ericeira",
      body1:
        "Na Ericeira Fishing, partilhamos mais do que técnicas e locais de pesca. Partilhamos conhecimento local, tradições e uma ligação genuína ao mar que moldou esta vila durante séculos.",
      body2:
        "Quer seja um pescador experiente ou esteja a experimentar a pesca pela primeira vez, o nosso objetivo é simples: ajudá-lo a viver o lado autêntico da Ericeira, um lançamento de cada vez.",
      cta: "Faça parte da história",
    },
  },

  galleryPage: {
    hero: {
      kicker: "Do diário de bordo",
      title: "Galeria",
      lede: "Momentos de dias de barco, sessões de terra e dos nossos mestres ao longo da costa da Ericeira — o mar, a pesca e a vida no porto.",
    },
    photos: [
      { src: "/images/gallery-01.jpg", alt: "Grupo a pescar no barco", orientation: "portrait" },
      { src: "/images/gallery-02.jpg", alt: "Foto em filme — no mar", orientation: "landscape" },
      { src: "/images/gallery-03.jpg", alt: "Foto em filme — o porto", orientation: "landscape" },
      { src: "/images/gallery-04.jpg", alt: "Foto em filme — a puxar as linhas", orientation: "portrait" },
      { src: "/images/gallery-05.jpg", alt: "Foto em filme — a tripulação", orientation: "portrait" },
      { src: "/images/gallery-06.jpg", alt: "Foto em filme — a pesca do dia", orientation: "portrait" },
      { src: "/images/gallery-07.jpg", alt: "Foto em filme — costa da Ericeira", orientation: "landscape" },
      { src: "/images/gallery-08.jpg", alt: "Foto em filme — a largar amarras", orientation: "portrait" },
      { src: "/images/gallery-09.jpg", alt: "Foto em filme — de volta ao porto", orientation: "portrait" },
    ],
    instagramPrefix: "Mais fotografias e vídeos das saídas no",
    cta: {
      title: "Quer estar na próxima fotografia?",
      body: "As saídas em grupos pequenos esgotam rapidamente. Inscreva-se na lista de espera e avisamo-lo assim que as próximas datas abrirem.",
      buttonLabel: "Inscrever na lista de espera",
    },
  },

  getAboardPage: {
    hero: {
      kicker: "Embarque connosco · Lista de espera",
      title: "Pronto para levar o jantar para casa?",
      lede: "As nossas saídas são cuidadosamente planeadas e para um número limitado de pessoas. Inscreva-se na lista de espera para saber a próxima vaga disponível.",
    },
    schedule: {
      kicker: "Horário",
      bodyPrefix: "As nossas saídas de barco começam normalmente por volta das",
      time1: "6h",
      bodyMid: "e terminam por volta das",
      time2: "13h",
      bodySuffix: ".",
      note: "A pesca de terra depende da maré, do vento e de outros fatores meteorológicos — confirmaremos o horário consigo.",
    },
    included: {
      kicker: "O que está incluído",
    },
    whatsapp: {
      kicker: "Prefere ser mais rápido pelo WhatsApp?",
      body: "Envie-nos uma mensagem diretamente e responderemos com o que melhor se adequa — barco ou terra, e a próxima vaga disponível.",
    },
    form: {
      kicker: "Inscreva-se através do formulário",
      title: "Inscrever na lista de espera",
      body: "Diga-nos se prefere barco ou terra e quando está disponível. Responderemos com o que melhor se adequa e adicionamo-lo à lista para a próxima vaga — ou faça-nos apenas uma pergunta geral.",
    },
  },

  faqPage: {
    hero: {
      kicker: "Antes de zarpar",
      title: "Perguntas frequentes",
      lede: "Tudo o que precisa de saber antes de sair — experiência, equipamento, condições meteorológicas, o que pode apanhar e como reservar.",
    },
    cta: {
      kicker: "Ainda tem alguma dúvida?",
      title: "Pergunte-nos diretamente — somos rápidos no WhatsApp",
      body: "Ou inscreva-se na lista de espera e entraremos em contacto com as próximas vagas disponíveis.",
      buttonLabel: "Inscrever na lista de espera",
    },
  },

  notFound: {
    kicker: "404 · Fora da rota",
    title: "Esta página foi arrastada para o mar",
    body: "A página que procura não existe. Vamos levá-lo de volta ao porto.",
    cta: "Voltar ao início",
  },

  bookingForm: {
    tripOptions: [
      { value: "boat", label: "Pesca de barco", hint: "6h – 13h" },
      { value: "shore", label: "Pesca de terra", hint: "Meio dia" },
      { value: "either", label: "Tanto faz", hint: "Ainda não sei" },
    ],
    fields: {
      name: { label: "Nome", placeholder: "O seu nome" },
      email: { label: "Email", placeholder: "voce@exemplo.com" },
      phone: { label: "WhatsApp / telemóvel", placeholder: "+351 …" },
      trip: { label: "Barco ou terra?" },
      groupSize: { label: "Quantos são?" },
      availability: {
        label: "Quando está disponível?",
        placeholder: "ex.: fins de semana em agosto, ou datas específicas",
      },
      message: {
        label: "Mensagem",
        placeholder: "Algo que devamos saber — perguntas, ocasiões especiais, crianças a bordo…",
      },
    },
    optional: "(opcional)",
    submit: "Inscrever na lista de espera",
    submitting: "A enviar…",
    errorGeneral:
      "Algo correu mal ao enviar o seu pedido. Por favor, tente novamente, ou envie-nos uma mensagem pelo WhatsApp.",
    success: {
      title: "Está na lista",
      body: "Obrigado — entraremos em contacto sobre a próxima vaga disponível. Fique atento à sua caixa de entrada (e ao WhatsApp, caso tenha deixado um número).",
      tagline: "Boas pescas",
    },
    validation: {
      name: "Por favor, diga-nos o seu nome",
      email: "Introduza um endereço de email válido",
      trip: "Escolha barco, terra, ou tanto faz",
      groupSize: "Quantos são no total?",
      availability: "Diga-nos quando está disponível",
      formInvalid: "Por favor, verifique o formulário e tente novamente.",
    },
  },

  siteData: {
    species: [
      "Robalo",
      "Dourada",
      "Choupa",
      "Pargo",
      "Sarda",
      "Carapau",
    ],
    included: [
      "Cana de pesca",
      "Isco",
      "Licença diária",
      "Colete",
      "Boa disposição",
      "Levar o seu próprio peixe para casa",
    ],
    team: [
      {
        name: "Mestre Dariu",
        role: "Mestre do barco",
        bio: "Com mais de 50 anos de experiência, o Mestre Dariu é uma das figuras históricas mais conhecidas da Ericeira e considera a costa da Ericeira a sua casa.",
        image: "/images/mestre-dariu.jpg",
      },
      {
        name: "João Pedro",
        role: "Mestre",
        bio: "Organizador e entusiasta da pesca, João reúne a comunidade para aprender a arte de levar o jantar para casa.",
        image: "/images/joao-pedro.jpg",
      },
    ],
    faqs: [
      {
        q: "Preciso de ter experiência de pesca para participar?",
        a: "Não. As nossas experiências de pesca são adequadas tanto para principiantes totais como para pescadores experientes. Os nossos guias oferecem instrução e apoio durante toda a experiência.",
      },
      {
        q: "O equipamento de pesca está incluído?",
        a: "Sim. Podemos fornecer todo o equipamento de pesca necessário, incluindo canas, carretos, aparelhos, anzóis e isco, consoante a experiência reservada.",
      },
      {
        q: "As crianças podem participar?",
        a: "Sem dúvida. Recebemos regularmente famílias com crianças — a pesca é uma forma maravilhosa de introduzir os mais novos à natureza e às tradições locais.",
      },
      {
        q: "Qual é a idade mínima?",
        a: "As recomendações de idade variam consoante o tipo de experiência e as condições do mar. Contacte-nos e ajudamo-lo a encontrar a opção mais adequada para a sua família.",
      },
      {
        q: "Preciso de licença de pesca?",
        a: "Os requisitos de licença de pesca dependem do tipo de atividade e da regulamentação local. Nas nossas saídas, a licença diária está incluída — nós tratamos disso por si.",
      },
      {
        q: "Que espécies de peixe posso apanhar na Ericeira?",
        a: "Consoante a época, pode apanhar robalo, dourada, choupa, pargo, sarda, carapau, e outras espécies.",
      },
      {
        q: "Qual é a melhor época do ano para pescar na Ericeira?",
        a: "É possível pescar durante todo o ano. As diferentes estações oferecem diferentes oportunidades, espécies e técnicas de pesca.",
      },
      {
        q: "Posso ficar com o peixe que apanhar?",
        a: "Sim — desde que o peixe cumpra os requisitos legais de tamanho e sejam respeitadas as regras de pesca, leva a sua própria pesca para casa.",
      },
      {
        q: "O que devo levar?",
        a: "Roupa confortável, calçado adequado, protetor solar, um chapéu, água e uma máquina fotográfica ou telemóvel para registar a experiência.",
      },
      {
        q: "O que acontece se as condições do mar não forem seguras?",
        a: "A segurança vem sempre em primeiro lugar. Se as condições meteorológicas ou do mar não forem adequadas, propomos uma data alternativa ou uma solução apropriada.",
      },
      {
        q: "As saídas realizam-se com chuva?",
        a: "Chuva fraca não impede as saídas, mas ventos fortes, temporais ou condições inseguras podem levar ao adiamento. Manteremos sempre o cliente informado.",
      },
      {
        q: "Quanto tempo duram as experiências de pesca?",
        a: "A duração varia consoante a experiência escolhida — oferecemos opções de pesca de terra e de barco. As saídas de barco costumam decorrer entre as 6h e as 13h.",
      },
      {
        q: "Posso reservar uma saída de pesca privada?",
        a: "Sim. Oferecemos experiências de pesca privadas para famílias, grupos de amigos, eventos empresariais e ocasiões especiais.",
      },
      {
        q: "A pesca de barco é adequada para principiantes?",
        a: "Sim. A pesca de barco dá-lhe acesso a zonas de pesca produtivas, e os nossos guias acompanham-no durante toda a saída.",
      },
      {
        q: "Posso participar sozinho?",
        a: "Claro que sim. Muitos dos nossos convidados participam individualmente, quer queiram aprender a pescar, aperfeiçoar as suas técnicas, ou simplesmente desfrutar de uma experiência única.",
      },
      {
        q: "Posso oferecer uma experiência de pesca como presente?",
        a: "Sim — uma experiência de pesca é uma excelente ideia de presente para aniversários e ocasiões especiais. Entre em contacto connosco e tratamos de tudo.",
      },
      {
        q: "Onde se realizam as experiências?",
        a: "As nossas atividades decorrem ao longo da bela costa da Ericeira, um dos destinos de pesca e surf mais emblemáticos de Portugal.",
      },
      {
        q: "O que torna a Ericeira Fishing diferente?",
        a: "A Ericeira Fishing foi criada por pessoas com uma ligação genuína ao mar e às tradições piscatórias locais. Não nos limitamos a levá-lo a pescar — partilhamos a herança marítima que moldou esta vila.",
      },
      {
        q: "A pesca na Ericeira é adequada para turistas?",
        a: "Sim. As nossas experiências são pensadas para serem acessíveis, agradáveis e informativas para visitantes internacionais.",
      },
      {
        q: "A que distância fica a Ericeira de Lisboa?",
        a: "A Ericeira fica a aproximadamente 45 minutos de Lisboa, sendo um dos destinos de pesca mais acessíveis de Portugal.",
      },
      {
        q: "Como posso reservar uma experiência de pesca?",
        a: "Contacte-nos através do formulário neste site, WhatsApp, email, ou das nossas redes sociais — ajudamo-lo a escolher a experiência certa.",
      },
    ],
  },
} as const;
