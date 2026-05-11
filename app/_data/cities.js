// Central source of truth for all city / location pages.
// Add a new city: append an entry here, drop a one-line page.js into app/<slug>/,
// and the sitemap, header, footer pick it up automatically.

const baseHero = "/img/product-herosection.webp";

const sharedKeyFeatures = (cityName) => [
  {
    icon: "energy",
    title: "Local Presence",
    description: `On-ground team in ${cityName} for personalised consultation, fast site visits, and end-to-end project handling.`,
  },
  {
    icon: "safety",
    title: "Climate Engineered",
    description: `Profiles, gaskets, and hardware tuned for ${cityName}'s weather so windows hold their seal year after year.`,
  },
  {
    icon: "greenBuilding",
    title: "Timely Service",
    description: `Predictable manufacturing slots and dedicated installers keep ${cityName} projects on schedule from order to handover.`,
  },
  {
    icon: "innovative",
    title: "Full-Stack Solutions",
    description: `Residential, commercial, and large-format facade work — one partner for every aluminium window and door requirement in ${cityName}.`,
  },
  {
    icon: "safety",
    title: "Premium Hardware",
    description: `German-grade hinges, multi-point locks, and EPDM seals on every WinZone window delivered into ${cityName}.`,
  },
  {
    icon: "rocket",
    title: "Lifetime Support",
    description: `Post-installation service, replacement parts, and annual maintenance available across ${cityName} and nearby areas.`,
  },
];

export const cities = [
  // ────────────────────────────────────────────────────────────── RAJKOT
  {
    slug: "rajkot",
    name: "Rajkot",
    state: "Gujarat",
    region: "Saurashtra",
    heroImage: baseHero,
    benefitsImage: "/img/city-img/rajkot.webp",
    metadata: {
      title: "Aluminium Windows & Doors in Rajkot | WinZone",
      description:
        "WinZone supplies premium aluminium windows and doors in Rajkot. Energy-efficient, weatherproof systems for homes, offices, and industrial sites across Saurashtra.",
      keywords: [
        "aluminium windows rajkot",
        "aluminium doors rajkot",
        "windows rajkot",
        "doors rajkot",
        "rajkot windows",
        "rajkot doors",
        "aluminium windows gujarat",
        "casement windows rajkot",
        "sliding windows rajkot",
        "window dealer rajkot",
      ],
    },
    hero: {
      title: "Aluminium Windows & Doors in Rajkot",
      description:
        "Premium aluminium windows and doors for Rajkot homes and projects. Local manufacturing reach, climate-tuned systems, and full installation by WinZone.",
    },
    information: [
      "WinZone delivers premium aluminium windows and doors across Rajkot, with a complete range covering residential, commercial, and industrial projects throughout Saurashtra.",
      "Our Rajkot team understands the dry heat, dust, and seasonal monsoon swings of the region. Every system we ship into the city is specified for thermal performance, dust sealing, and long-term durability against Gujarat's climate.",
      "From bungalows on University Road to commercial buildings on 150 ft Ring Road and projects in Kalavad Road and Aji GIDC, WinZone has supplied and installed across the city's growth corridors.",
      "Whether you are building new, renovating, or upgrading a single elevation, our Rajkot team handles consultation, fabrication, delivery, and professional installation under one accountability.",
    ],
    advantages: [
      "Local Rajkot presence for fast site visits and quick decisions",
      "Profiles tuned for Rajkot's dry summers and humid monsoon weeks",
      "Reliable delivery and installation timelines for Saurashtra projects",
      "Solutions for villas, apartments, offices, retail, and industrial sheds",
      "Aluminium frames and hardware engineered for long service life",
      "Energy-efficient glazing options that reduce indoor heat gain",
      "Dedicated post-installation support across Rajkot",
      "Custom sizing and finishes to fit every elevation and architectural style",
    ],
    faqs: [
      {
        question: "Do you supply aluminium windows and doors in Rajkot?",
        answer:
          "Yes. WinZone supplies and installs the full range of premium aluminium windows and doors across Rajkot, including residential, commercial, and industrial projects throughout Saurashtra. A local team handles consultation, fabrication, and on-site installation.",
      },
      {
        question: "Which window and door systems do you offer in Rajkot?",
        answer:
          "Rajkot customers can choose from our Duraslim, Duraslim Edge, and Essential ranges — including casement windows, tilt and turn windows, sliding windows, lift and slide doors, and slide and fold doors.",
      },
      {
        question: "Do you handle installation in Rajkot?",
        answer:
          "Yes. End-to-end installation in Rajkot is part of every order — from site measurement and design to fabrication, delivery, and on-site fitting by trained technicians.",
      },
      {
        question: "Are your windows suitable for Rajkot's climate?",
        answer:
          "WinZone systems use thermal break profiles, multi-chamber design, EPDM gaskets, and weather-grade hardware so they handle Rajkot's dry heat, monsoon humidity, and seasonal dust without losing their seal.",
      },
      {
        question: "How long does a Rajkot order take?",
        answer:
          "Lead times depend on quantity, customisation, and finishing. Because the Rajkot team is local, response, delivery, and installation are noticeably faster than ordering from a distant fabricator. Confirmed timelines are shared during consultation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────── AHMEDABAD
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    region: "Central Gujarat",
    heroImage: baseHero,
    benefitsImage: "/img/city-img/rajkot.webp",
    metadata: {
      title: "Aluminium Windows & Doors in Ahmedabad | WinZone",
      description:
        "WinZone delivers premium aluminium windows and doors in Ahmedabad. Heat-resistant, durable, and stylish systems for villas, apartments, and commercial towers.",
      keywords: [
        "aluminium windows ahmedabad",
        "aluminium doors ahmedabad",
        "windows ahmedabad",
        "doors ahmedabad",
        "ahmedabad windows",
        "ahmedabad doors",
        "casement windows ahmedabad",
        "sliding windows ahmedabad",
        "window dealer ahmedabad",
        "aluminium windows gujarat",
      ],
    },
    hero: {
      title: "Aluminium Windows & Doors in Ahmedabad",
      description:
        "Premium aluminium windows and doors for Ahmedabad homes, towers, and commercial spaces. Heat-tuned profiles, refined finishes, and full installation by WinZone.",
    },
    information: [
      "WinZone supplies premium aluminium windows and doors across Ahmedabad, serving residential bungalows, high-rise towers, and commercial projects from Sarkhej to Sabarmati.",
      "Ahmedabad runs on long, intense summers, dust-heavy winds, and a sharp monsoon window. Our systems use thermal break profiles, dust-sealed gaskets, and high-grade glass options that hold up across the city's full weather range.",
      "Active corridors like SG Highway, Prahladnagar, Bopal, Gota, Shela, Thaltej, and the riverfront precinct now demand windows that match modern facade design. WinZone delivers slim sightlines, large-format slides, and minimal frames that pair with that architecture.",
      "Whether the project is a single villa renovation or a multi-tower residential development, the Ahmedabad team handles measurement, design, fabrication, and on-site installation with a single point of accountability.",
    ],
    advantages: [
      "Direct service across Ahmedabad and the surrounding Gandhinagar belt",
      "Heat-tuned aluminium systems built for long, harsh summers",
      "Dust-sealed designs suited to Ahmedabad's wind and air quality",
      "Reliable delivery for villa, apartment, and commercial projects",
      "Slim sightlines and minimal frames for modern Ahmedabad facades",
      "Sound-insulating glass options for properties on busy roads",
      "Coordinated handover with architects, contractors, and interior teams",
      "Custom sizes, finishes, and configurations on every order",
    ],
    faqs: [
      {
        question: "Do you supply aluminium windows and doors in Ahmedabad?",
        answer:
          "Yes. WinZone supplies and installs aluminium windows and doors across Ahmedabad — including villas, high-rise apartments, offices, and commercial properties throughout the city and surrounding Gandhinagar region.",
      },
      {
        question: "Which window and door systems do you offer in Ahmedabad?",
        answer:
          "Ahmedabad customers can specify from our Duraslim, Duraslim Edge, and Essential ranges — covering casement windows, tilt and turn windows, sliding windows, lift and slide doors, slide and fold doors, and minimal-frame systems.",
      },
      {
        question: "Do you handle installation in Ahmedabad?",
        answer:
          "Yes. Installation is included in every Ahmedabad order. The team manages site measurement, design sign-off, fabrication, delivery, and on-site fitting.",
      },
      {
        question: "Are your windows suitable for Ahmedabad's heat?",
        answer:
          "WinZone systems use thermal break profiles, multi-chamber designs, EPDM gaskets, and energy-rated glass options so they reduce indoor heat gain and stay sealed through Ahmedabad's hottest months.",
      },
      {
        question: "How long does an Ahmedabad order take?",
        answer:
          "Lead times depend on quantity, configuration, and finish. Because the Ahmedabad team is local, response, delivery, and installation are noticeably faster than ordering from a distant fabricator. Confirmed timelines are shared during consultation.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────── VADODARA
  {
    slug: "vadodara",
    name: "Vadodara",
    state: "Gujarat",
    region: "Central Gujarat",
    heroImage: baseHero,
    benefitsImage: "/img/city-img/vadodara.webp",
    metadata: {
      title: "Aluminium Windows & Doors in Vadodara | WinZone",
      description:
        "WinZone supplies premium aluminium windows and doors in Vadodara. Energy-efficient, weatherproof systems for residential, commercial, and industrial projects.",
      keywords: [
        "aluminium windows vadodara",
        "aluminium doors vadodara",
        "windows vadodara",
        "doors vadodara",
        "vadodara windows",
        "vadodara doors",
        "casement windows vadodara",
        "sliding windows vadodara",
        "window dealer vadodara",
        "aluminium windows gujarat",
      ],
    },
    hero: {
      title: "Aluminium Windows & Doors in Vadodara",
      description:
        "Premium aluminium windows and doors for Vadodara homes, apartments, and commercial spaces. Local team, climate-ready systems, and full installation by WinZone.",
    },
    information: [
      "WinZone supplies premium aluminium windows and doors across Vadodara, serving residential, commercial, and industrial projects throughout the city and the wider central Gujarat belt.",
      "Vadodara's climate moves from hot dry summers into a sharp monsoon, with humidity rising on the eastern industrial corridor. Our systems use thermal break profiles, weather-grade gaskets, and corrosion-resistant hardware to handle that full range.",
      "Active areas like Alkapuri, Akota, Gotri, Sama, Vasna, and Waghodia Road continue to add new residential and commercial stock. WinZone has supplied projects across these corridors with consistent quality and finishing.",
      "From a single villa renovation to large multi-tower projects, the Vadodara team manages consultation, fabrication, delivery, and on-site installation under one point of accountability.",
    ],
    advantages: [
      "Local Vadodara reach for site visits, surveys, and quick coordination",
      "Profiles built for Vadodara's heat, monsoon humidity, and industrial belt air",
      "Reliable delivery and installation timelines for central Gujarat projects",
      "Solutions for villas, apartments, offices, retail, and factory units",
      "Thermal break aluminium with multi-chamber design for energy efficiency",
      "Sound-insulating glass options for properties near busy junctions",
      "Coordinated handover with architects, builders, and interior teams",
      "Custom sizes, finishes, and configurations on every order",
    ],
    faqs: [
      {
        question: "Do you supply aluminium windows and doors in Vadodara?",
        answer:
          "Yes. WinZone supplies and installs the full range of aluminium windows and doors across Vadodara — including residential, commercial, and industrial projects throughout the city and the wider central Gujarat region.",
      },
      {
        question: "Which window and door systems do you offer in Vadodara?",
        answer:
          "Vadodara customers can specify from our Duraslim, Duraslim Edge, and Essential ranges — including casement windows, tilt and turn windows, sliding windows, lift and slide doors, and slide and fold doors.",
      },
      {
        question: "Do you handle installation in Vadodara?",
        answer:
          "Yes. Installation is included in every Vadodara order. The team manages site measurement, design sign-off, fabrication, delivery, and on-site fitting by trained technicians.",
      },
      {
        question: "Are your windows suitable for Vadodara's climate?",
        answer:
          "WinZone systems use thermal break profiles, EPDM gaskets, multi-chamber design, and corrosion-resistant hardware so they handle Vadodara's heat, monsoon humidity, and industrial-belt air without losing their seal.",
      },
      {
        question: "How long does a Vadodara order take?",
        answer:
          "Lead times depend on quantity, configuration, and finish. Because the Vadodara team is local, response, delivery, and installation are noticeably faster than ordering from a distant fabricator. Confirmed timelines are shared during consultation.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────── MUMBAI
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "Konkan",
    heroImage: baseHero,
    benefitsImage: "/img/city-img/mumbai.webp",
    metadata: {
      title: "Aluminium Windows & Doors in Mumbai | WinZone",
      description:
        "WinZone supplies premium aluminium windows and doors in Mumbai. Coastal-grade, monsoon-tested systems for high-rise apartments, villas, and commercial towers.",
      keywords: [
        "aluminium windows mumbai",
        "aluminium doors mumbai",
        "windows mumbai",
        "doors mumbai",
        "mumbai windows",
        "mumbai doors",
        "casement windows mumbai",
        "sliding windows mumbai",
        "window dealer mumbai",
        "aluminium windows maharashtra",
      ],
    },
    hero: {
      title: "Aluminium Windows & Doors in Mumbai",
      description:
        "Premium aluminium windows and doors for Mumbai apartments, villas, and commercial towers. Coastal-grade hardware and full installation by WinZone.",
    },
    information: [
      "WinZone supplies premium aluminium windows and doors across Mumbai, serving high-rise apartments, sea-facing residences, villas, and commercial towers throughout the metropolitan region.",
      "Mumbai sits on the coast, which means salt-laden air, heavy monsoon, and high year-round humidity. Every WinZone system shipped into the city uses corrosion-resistant aluminium, marine-grade hardware, and weather-tested gaskets for long service life.",
      "From Bandra and Andheri to Powai, Worli, Lower Parel, Thane, and Navi Mumbai, our installations sit across the city's most demanding facades — including towers exposed directly to sea breeze and monsoon rain.",
      "Whether the project is a single flat upgrade in a co-operative society or a full residential tower, the Mumbai team handles measurement, fabrication, society approvals coordination, delivery, and on-site installation.",
    ],
    advantages: [
      "Service coverage across Mumbai, Thane, and Navi Mumbai",
      "Corrosion-resistant aluminium and hardware for coastal exposure",
      "Monsoon-tested seals and drainage paths on every system",
      "Solutions for high-rise apartments, villas, offices, and retail",
      "Slim sightlines and large openable spans for sea-facing elevations",
      "Sound-insulating glass options for properties near busy roads",
      "Co-ordination with society committees and building managers",
      "Custom sizes, finishes, and configurations on every order",
    ],
    faqs: [
      {
        question: "Do you supply aluminium windows and doors in Mumbai?",
        answer:
          "Yes. WinZone supplies and installs aluminium windows and doors across Mumbai, Thane, and Navi Mumbai — covering high-rise apartments, villas, offices, and commercial spaces.",
      },
      {
        question: "Which window and door systems do you offer in Mumbai?",
        answer:
          "Mumbai customers can specify from our Duraslim, Duraslim Edge, and Essential ranges — including casement windows, tilt and turn windows, sliding windows, lift and slide doors, slide and fold doors, and minimal-frame systems for sea-facing elevations.",
      },
      {
        question: "Do you handle installation in Mumbai?",
        answer:
          "Yes. Installation is included in every Mumbai order. The team manages site measurement, design sign-off, society approval support, fabrication, delivery, and on-site fitting.",
      },
      {
        question: "Are your windows suitable for Mumbai's coastal climate?",
        answer:
          "WinZone systems use corrosion-resistant aluminium, marine-grade hardware, EPDM gaskets, and tested drainage paths so they handle Mumbai's salt-laden air, year-round humidity, and heavy monsoon without losing performance.",
      },
      {
        question: "How long does a Mumbai order take?",
        answer:
          "Lead times depend on quantity, configuration, and finish. Because the Mumbai team is local, response, delivery, and installation are noticeably faster than ordering from a distant fabricator. Confirmed timelines are shared during consultation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────── HYDERABAD
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    region: "Deccan Plateau",
    heroImage: baseHero,
    benefitsImage: "/img/city-img/hyderabad.webp",
    metadata: {
      title: "Aluminium Windows & Doors in Hyderabad | WinZone",
      description:
        "WinZone supplies premium aluminium windows and doors in Hyderabad. Modern systems for villas, gated communities, IT offices, and high-rise developments.",
      keywords: [
        "aluminium windows hyderabad",
        "aluminium doors hyderabad",
        "windows hyderabad",
        "doors hyderabad",
        "hyderabad windows",
        "hyderabad doors",
        "casement windows hyderabad",
        "sliding windows hyderabad",
        "window dealer hyderabad",
        "aluminium windows telangana",
      ],
    },
    hero: {
      title: "Aluminium Windows & Doors in Hyderabad",
      description:
        "Premium aluminium windows and doors for Hyderabad villas, gated communities, and IT corridor towers. Local team and full installation by WinZone.",
    },
    information: [
      "WinZone supplies premium aluminium windows and doors across Hyderabad, serving residential villas, gated communities, IT offices, and commercial towers from the IT corridor to the old city.",
      "Hyderabad sits on the Deccan Plateau with hot dry summers, a strong monsoon, and a comfortable winter. Our systems use thermal break profiles and weather-grade hardware that hold up across this full seasonal swing.",
      "From HITEC City, Gachibowli, and Kondapur to Jubilee Hills, Banjara Hills, Kokapet, and the Outer Ring Road belt, WinZone has supplied projects across the city's most active growth corridors.",
      "Whether the project is a single villa or a multi-tower commercial development, the Hyderabad team handles consultation, fabrication, delivery, and on-site installation under one point of accountability.",
    ],
    advantages: [
      "Direct service across Hyderabad and the Outer Ring Road belt",
      "Thermal break profiles for the city's hot summers and dry winters",
      "Reliable delivery for villas, apartments, and IT corridor towers",
      "Slim sightlines for modern gated community architecture",
      "Sound-insulating glass options for properties near IT highways",
      "Solutions for residential, commercial, and large facade projects",
      "Co-ordination with builders, architects, and interior teams",
      "Custom sizes, finishes, and configurations on every order",
    ],
    faqs: [
      {
        question: "Do you supply aluminium windows and doors in Hyderabad?",
        answer:
          "Yes. WinZone supplies and installs aluminium windows and doors across Hyderabad — covering villas, apartments, IT corridor offices, and commercial properties throughout the city and ORR belt.",
      },
      {
        question: "Which window and door systems do you offer in Hyderabad?",
        answer:
          "Hyderabad customers can specify from our Duraslim, Duraslim Edge, and Essential ranges — including casement windows, tilt and turn windows, sliding windows, lift and slide doors, and slide and fold doors.",
      },
      {
        question: "Do you handle installation in Hyderabad?",
        answer:
          "Yes. Installation is included in every Hyderabad order. The team handles measurement, design sign-off, fabrication, delivery, and on-site fitting.",
      },
      {
        question: "Are your windows suitable for Hyderabad's climate?",
        answer:
          "WinZone systems use thermal break profiles, EPDM gaskets, and energy-rated glass options so they reduce indoor heat gain through Hyderabad's summers and stay sealed through the monsoon.",
      },
      {
        question: "How long does a Hyderabad order take?",
        answer:
          "Lead times depend on quantity, configuration, and finish. Because the Hyderabad team is local, response, delivery, and installation are noticeably faster than ordering from a distant fabricator. Confirmed timelines are shared during consultation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────── BANGALORE
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    region: "South India",
    heroImage: baseHero,
    benefitsImage: "/img/city-img/bangalore.webp",
    metadata: {
      title: "Aluminium Windows & Doors in Bangalore | WinZone",
      description:
        "WinZone supplies premium aluminium windows and doors in Bangalore. Slim-frame, weather-ready systems for villas, apartments, and tech parks across the city.",
      keywords: [
        "aluminium windows bangalore",
        "aluminium doors bangalore",
        "windows bangalore",
        "doors bangalore",
        "bangalore windows",
        "bangalore doors",
        "casement windows bangalore",
        "sliding windows bangalore",
        "window dealer bangalore",
        "aluminium windows karnataka",
      ],
    },
    hero: {
      title: "Aluminium Windows & Doors in Bangalore",
      description:
        "Premium aluminium windows and doors for Bangalore villas, apartments, and tech parks. Local team, modern profiles, and full installation by WinZone.",
    },
    information: [
      "WinZone supplies premium aluminium windows and doors across Bangalore, serving residential villas, apartments, gated communities, tech parks, and commercial spaces throughout the city.",
      "Bangalore's mild year-round weather still brings strong monsoon spells, dust from active construction zones, and rising air pollution along arterial roads. Our systems use weather-grade gaskets, sound-insulating glass options, and dust-sealed designs that handle this profile.",
      "From Whitefield, Sarjapur, and Electronic City to Indiranagar, Koramangala, Hebbal, and Yelahanka, WinZone has supplied projects across Bangalore's most active residential and commercial corridors.",
      "Whether the project is a single villa or a multi-tower development, the Bangalore team handles consultation, fabrication, delivery, and on-site installation under one point of accountability.",
    ],
    advantages: [
      "Direct service across Bangalore and the surrounding tech corridor",
      "Slim-frame profiles for modern villa and apartment architecture",
      "Sound-insulating glass options for properties near busy junctions",
      "Weather-grade gaskets for monsoon and dust resistance",
      "Reliable delivery for villas, apartments, and commercial projects",
      "Solutions for residential, tech park, and large facade work",
      "Co-ordination with builders, architects, and interior teams",
      "Custom sizes, finishes, and configurations on every order",
    ],
    faqs: [
      {
        question: "Do you supply aluminium windows and doors in Bangalore?",
        answer:
          "Yes. WinZone supplies and installs aluminium windows and doors across Bangalore — covering villas, apartments, gated communities, and commercial properties throughout the city and surrounding belt.",
      },
      {
        question: "Which window and door systems do you offer in Bangalore?",
        answer:
          "Bangalore customers can specify from our Duraslim, Duraslim Edge, and Essential ranges — including casement windows, tilt and turn windows, sliding windows, lift and slide doors, slide and fold doors, and minimal-frame systems.",
      },
      {
        question: "Do you handle installation in Bangalore?",
        answer:
          "Yes. Installation is included in every Bangalore order. The team handles measurement, design sign-off, fabrication, delivery, and on-site fitting.",
      },
      {
        question: "Are your windows suitable for Bangalore's climate?",
        answer:
          "WinZone systems use weather-grade gaskets, EPDM seals, and sound-insulating glass options so they handle Bangalore's monsoon, dust, and traffic noise without losing performance.",
      },
      {
        question: "How long does a Bangalore order take?",
        answer:
          "Lead times depend on quantity, configuration, and finish. Because the Bangalore team is local, response, delivery, and installation are noticeably faster than ordering from a distant fabricator. Confirmed timelines are shared during consultation.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────── CHENNAI
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    region: "Coromandel Coast",
    heroImage: baseHero,
    benefitsImage: "/img/city-img/chennai.webp",
    metadata: {
      title: "Aluminium Windows & Doors in Chennai | WinZone",
      description:
        "WinZone supplies premium aluminium windows and doors in Chennai. Coastal-grade, cyclone-tested systems for villas, apartments, and IT corridor projects.",
      keywords: [
        "aluminium windows chennai",
        "aluminium doors chennai",
        "windows chennai",
        "doors chennai",
        "chennai windows",
        "chennai doors",
        "casement windows chennai",
        "sliding windows chennai",
        "window dealer chennai",
        "aluminium windows tamil nadu",
      ],
    },
    hero: {
      title: "Aluminium Windows & Doors in Chennai",
      description:
        "Premium aluminium windows and doors for Chennai villas, apartments, and OMR corridor projects. Coastal-grade hardware and full installation by WinZone.",
    },
    information: [
      "WinZone supplies premium aluminium windows and doors across Chennai, serving residential villas, apartments, IT corridor offices, and commercial buildings throughout the city.",
      "Chennai sits on the Coromandel coast — that means salt air, high humidity year-round, the north-east monsoon, and occasional cyclonic spells. Our systems use corrosion-resistant aluminium, marine-grade hardware, and tested drainage paths to hold up under that load.",
      "From OMR and Anna Nagar to Adyar, Nungambakkam, T. Nagar, ECR, and Porur, WinZone has supplied projects across Chennai's residential, IT, and commercial corridors.",
      "Whether the project is a single villa or a multi-tower commercial development, the Chennai team handles consultation, fabrication, delivery, and on-site installation under one point of accountability.",
    ],
    advantages: [
      "Direct service across Chennai and the OMR / ECR corridors",
      "Corrosion-resistant aluminium and marine-grade hardware for the coast",
      "Cyclone-tested seals and drainage paths on every system",
      "Sound-insulating glass options for properties near busy roads",
      "Solutions for villas, apartments, IT offices, and commercial spaces",
      "Reliable delivery for residential and commercial projects",
      "Co-ordination with builders, architects, and interior teams",
      "Custom sizes, finishes, and configurations on every order",
    ],
    faqs: [
      {
        question: "Do you supply aluminium windows and doors in Chennai?",
        answer:
          "Yes. WinZone supplies and installs aluminium windows and doors across Chennai — covering villas, apartments, IT corridor offices, and commercial properties throughout the city.",
      },
      {
        question: "Which window and door systems do you offer in Chennai?",
        answer:
          "Chennai customers can specify from our Duraslim, Duraslim Edge, and Essential ranges — including casement windows, tilt and turn windows, sliding windows, lift and slide doors, slide and fold doors, and minimal-frame systems.",
      },
      {
        question: "Do you handle installation in Chennai?",
        answer:
          "Yes. Installation is included in every Chennai order. The team handles measurement, design sign-off, fabrication, delivery, and on-site fitting.",
      },
      {
        question: "Are your windows suitable for Chennai's coastal climate?",
        answer:
          "WinZone systems use corrosion-resistant aluminium, marine-grade hardware, EPDM gaskets, and tested drainage paths so they handle Chennai's salt-laden air, high humidity, and north-east monsoon spells.",
      },
      {
        question: "How long does a Chennai order take?",
        answer:
          "Lead times depend on quantity, configuration, and finish. Because the Chennai team is local, response, delivery, and installation are noticeably faster than ordering from a distant fabricator. Confirmed timelines are shared during consultation.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────── PUNE
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    region: "Western Ghats",
    heroImage: baseHero,
    benefitsImage: "/img/city-img/mumbai.webp",
    metadata: {
      title: "Aluminium Windows & Doors in Pune | WinZone",
      description:
        "WinZone supplies premium aluminium windows and doors in Pune. Modern systems for villas, gated communities, IT offices, and apartment projects across the city.",
      keywords: [
        "aluminium windows pune",
        "aluminium doors pune",
        "windows pune",
        "doors pune",
        "pune windows",
        "pune doors",
        "casement windows pune",
        "sliding windows pune",
        "window dealer pune",
        "aluminium windows maharashtra",
      ],
    },
    hero: {
      title: "Aluminium Windows & Doors in Pune",
      description:
        "Premium aluminium windows and doors for Pune villas, IT corridor offices, and apartment projects. Local team and full installation by WinZone.",
    },
    information: [
      "WinZone supplies premium aluminium windows and doors across Pune, serving residential villas, gated communities, IT corridor offices, and commercial projects throughout the city.",
      "Pune's pleasant base climate still moves through a heavy monsoon, occasional dry summers, and cool winter mornings on the Western Ghats side. Our systems use weather-grade gaskets and energy-rated glass options that hold up across all three.",
      "From Hinjewadi, Baner, and Wakad to Kharadi, Magarpatta, Koregaon Park, Viman Nagar, Hadapsar, and Wagholi, WinZone has supplied projects across Pune's most active residential and commercial corridors.",
      "Whether the project is a single villa or a multi-tower development, the Pune team handles consultation, fabrication, delivery, and on-site installation under one point of accountability.",
    ],
    advantages: [
      "Direct service across Pune and the Pimpri-Chinchwad belt",
      "Weather-grade gaskets for Pune's monsoon and seasonal swings",
      "Slim-frame profiles for modern villa and apartment architecture",
      "Sound-insulating glass options for properties near IT corridors",
      "Reliable delivery for villas, apartments, and commercial projects",
      "Solutions for residential, IT corridor, and large facade work",
      "Co-ordination with builders, architects, and interior teams",
      "Custom sizes, finishes, and configurations on every order",
    ],
    faqs: [
      {
        question: "Do you supply aluminium windows and doors in Pune?",
        answer:
          "Yes. WinZone supplies and installs aluminium windows and doors across Pune — covering villas, apartments, gated communities, IT corridor offices, and commercial properties throughout the city and the Pimpri-Chinchwad belt.",
      },
      {
        question: "Which window and door systems do you offer in Pune?",
        answer:
          "Pune customers can specify from our Duraslim, Duraslim Edge, and Essential ranges — including casement windows, tilt and turn windows, sliding windows, lift and slide doors, slide and fold doors, and minimal-frame systems.",
      },
      {
        question: "Do you handle installation in Pune?",
        answer:
          "Yes. Installation is included in every Pune order. The team handles measurement, design sign-off, fabrication, delivery, and on-site fitting.",
      },
      {
        question: "Are your windows suitable for Pune's climate?",
        answer:
          "WinZone systems use weather-grade gaskets, EPDM seals, and energy-rated glass options so they handle Pune's monsoon, dry summers, and cool winter mornings without losing performance.",
      },
      {
        question: "How long does a Pune order take?",
        answer:
          "Lead times depend on quantity, configuration, and finish. Because the Pune team is local, response, delivery, and installation are noticeably faster than ordering from a distant fabricator. Confirmed timelines are shared during consultation.",
      },
    ],
  },
];

// Inject the standardised key features into every city after the fact
// so all 8 cities share identical hierarchy + a city-flavoured description.
cities.forEach((c) => {
  c.keyFeatures = sharedKeyFeatures(c.name);
});

export const citiesBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));

export const citySlugs = cities.map((c) => c.slug);

export const getCity = (slug) => citiesBySlug[slug];
