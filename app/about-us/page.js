import Achievements from "@/components/AboutUs/Achievements";
import CompanyStory from "@/components/AboutUs/CompanyStory/CompanyStory";
import MissionVission from "@/components/AboutUs/MissionVission";
import CommonHeroSection from "@/components/Common/CommonHeroSection";
import React from "react";

export const metadata = {
  title: "About WinZone — Premium Aluminium Windows & Doors",
  description:
    "Learn about WinZone — 15+ years delivering premium aluminium windows, doors, facades and bespoke architectural solutions. Meet our team, mission, vision, values, company story, achievements, and industry certifications including ISO 9001 and Energy Star.",
  keywords: [
    "WinZone",
    "about WinZone",
    "aluminium windows",
    "aluminium doors",
    "facades",
    "architectural solutions",
    "company story",
    "mission and vision",
    "certifications",
    "ISO 9001",
    "Energy Star",
    "green building",
    "innovation award",
    "customer excellence",
    "safety first",
    "company timeline",
    "achievements",
    "team",
    "values",
    "quality management",
    "sustainable construction",
    "energy efficient",
    "premium materials",
    "craftsmanship",
    "industry excellence",
    "company founded 2016",
    "1000+ projects",
    "1000+ happy clients",
  ],
  authors: [
    {
      name: "WinZone",
      url: "https://winzonsystem.com",
    },
  ],
  creator: "WinZone",
  publisher: "WinZone",
  category: "Company Information",
  classification: "About Us Page",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://winzonsystem.com"),
  alternates: {
    canonical: "https://winzonsystem.com/about-us",
    languages: {
      "en-US": "https://winzonsystem.com/about-us",
      "en-GB": "https://winzonsystem.com/about-us",
    },
  },
  images: [
    {
      url: "https://winzonsystem.com/img/about-us-herosection.webp",
      width: 1200,
      height: 630,
      alt: "About WinZone — premium aluminium windows, doors and facades",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/mission-vission-about-us.webp",
      width: 469,
      height: 422,
      alt: "WinZone mission, vision, values and team",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/our-journey-1.webp",
      width: 389,
      height: 317,
      alt: "WinZone company journey and milestones",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/our-journey-2.webp",
      width: 218,
      height: 317,
      alt: "WinZone company growth and achievements",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/about-us",
    siteName: "WinZone",
    title: "About WinZone — Premium Aluminium Windows & Doors",
    description:
      "Learn about WinZone — 15+ years delivering premium aluminium windows, doors, facades and bespoke architectural solutions. Discover our mission, vision, values, team, and industry certifications.",
    images: [
      {
        url: "https://winzonsystem.com/img/about-us-herosection.webp",
        width: 1200,
        height: 630,
        alt: "WinZone — About hero image",
        type: "image/webp",
      },
    ],
    countryName: "India",
    emails: ["info@winzonsystem.com"],
    phoneNumbers: ["9909992145", "9909992140"],
    streetAddress:
      "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360024",
    addressCountry: "IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@winzone",
    creator: "@winzone",
    title: "About WinZone | Premium Aluminium Windows & Doors",
    description:
      "About WinZone — mission, team, certifications and company story behind our premium aluminium systems. Founded 2016, 1000+ projects completed.",
    images: ["https://winzonsystem.com/img/about-us-herosection.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#29485F",
      },
    ],
  },
  applicationName: "WinZone",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    title: "About WinZone",
    statusBarStyle: "default",
    capable: true,
  },
};

export const optimizedSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://winzonsystem.com/#organization",
      name: "WinZone",
      alternateName: "WinZone Aluminium Systems",
      url: "https://winzonsystem.com",
      description:
        "WinZone supplies premium aluminium windows, doors, sliding systems, facades and partitions engineered for energy efficiency, durability and contemporary architecture.",
      logo: {
        "@type": "ImageObject",
        "@id": "https://winzonsystem.com/#logo",
        url: "https://winzonsystem.com/logo/meta-logo.png",
        contentUrl: "https://winzonsystem.com/logo/meta-logo.png",
        width: 64,
        height: 68,
        caption: "WinZone Logo",
      },
      image: [
        "https://winzonsystem.com/img/about-us-herosection.webp",
        "https://winzonsystem.com/img/mission-vission-about-us.webp",
        "https://winzonsystem.com/img/our-journey-1.webp",
        "https://winzonsystem.com/img/our-journey-2.webp",
      ],
      foundingDate: "2016-12-01",

      industry: "Construction & Building Materials",
      slogan: "Redefining Modern Living with Windows & Doors that Inspire",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          telephone: "9909992145",
          email: "info@winzonsystem.com",
          availableLanguage: ["English"],
          areaServed: "Worldwide",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        postalCode: "360024",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/winzone",
        "https://www.facebook.com/winzone",
        "https://www.instagram.com/winzone",
      ],
      award: [
        "ISO 9001",
        "Energy Star",
        "Green Building",
        "Innovation Award",
        "Customer Excellence",
        "Safety First",
      ],
      knowsAbout: [
        "Aluminium Windows",
        "Aluminium Doors",
        "Glass Facades",
        "Folding Systems",
        "Architectural Solutions",
        "Energy Efficiency",
        "Sustainable Construction",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "ISO 9001:2015",
          description: "International Quality Management Standard",
          credentialCategory: "Quality Management",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Energy Star Certification",
          description:
            "Recognized for energy-efficient and sustainable performance",
          credentialCategory: "Energy Efficiency",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Green Building Certification",
          description: "Committed to eco-friendly and sustainable construction",
          credentialCategory: "Sustainability",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://winzonsystem.com/#website",
      url: "https://winzonsystem.com",
      name: "WinZone",
      description:
        "Premium aluminium windows, doors, sliding systems, facades and partitions — engineered for energy efficiency and contemporary design.",
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://winzonsystem.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "AboutPage",
      "@id": "https://winzonsystem.com/about-us#aboutpage",
      url: "https://winzonsystem.com/about-us",
      name: "About WinZone — Premium Aluminium Windows & Doors",
      description:
        "Learn about WinZone — 15+ years delivering premium aluminium windows, doors, facades and bespoke architectural solutions. Meet our team, mission, vision, values, company story, achievements, and industry certifications.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": "https://winzonsystem.com/about-us#primaryimage",
        url: "https://winzonsystem.com/img/about-us-herosection.webp",
        contentUrl: "https://winzonsystem.com/img/about-us-herosection.webp",
        width: 1200,
        height: 630,
        caption:
          "WinZone About hero image showcasing company story and achievements",
      },
      datePublished: "2016-12-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id": "https://winzonsystem.com/about-us#breadcrumb",
      },
      mainEntity: [
        {
          "@type": "Thing",
          name: "Mission",
          description:
            "To revolutionize modern living through innovative window and door solutions that combine superior quality, cutting-edge design, and exceptional service.",
        },
        {
          "@type": "Thing",
          name: "Vision",
          description:
            "To be the leading provider of premium architectural solutions, setting new standards for quality, innovation, and customer satisfaction in the industry.",
        },
        {
          "@type": "Thing",
          name: "Values",
          description:
            "Excellence, integrity, innovation, and customer-centricity drive everything we do. We are committed to delivering outstanding results and building lasting relationships.",
        },
        {
          "@type": "Thing",
          name: "Team",
          description:
            "A passionate team of designers, engineers, and craftspeople dedicated to bringing your architectural vision to life with precision and expertise.",
        },
      ],
      significantLink: [
        "https://winzonsystem.com/product",
        "https://winzonsystem.com/project",
        "https://winzonsystem.com/contact-us",
        "https://winzonsystem.com/blog",
        "https://winzonsystem.com/career",
        "https://winzonsystem.com/e-catalogue",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/about-us#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://winzonsystem.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://winzonsystem.com/about-us",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://winzonsystem.com/about-us#timeline",
      name: "WinZone Company Timeline",
      description: "Key milestones and achievements in WinZone's journey",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "Event",
          name: "Company Founded",
          startDate: "2016-12-01",
          endDate: "2016-12-01",
          description:
            "Started with a vision to revolutionize windows and doors industry",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Mumbai, India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
          organizer: { "@id": "https://winzonsystem.com/#organization" },
          performer: {
            "@type": "Organization",
            name: "WinZone Founders",
            "@id": "https://winzonsystem.com/#winzone-founders",
          },
          image: [
            "https://winzonsystem.com/img/about-us-herosection.webp",
            "https://winzonsystem.com/img/mission-vission-about-us.webp",
            "https://winzonsystem.com/img/our-journey-1.webp",
            "https://winzonsystem.com/img/our-journey-2.webp",
          ],
          offers: {
            "@type": "Offer",
            name: "Company Launch",
            description: "Founding of WinZone Aluminium Systems",
            url: "https://winzonsystem.com/about-us",
            validFrom: "2016-12-01T00:00:00+00:00",
            availability: "https://schema.org/InStock",
            price: "0",
            priceCurrency: "INR",
          },
        },
        {
          "@type": "Event",
          name: "First Major Contract",
          startDate: "2018-08-01",
          endDate: "2018-08-01",
          description: "Secured our first large commercial project",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Mumbai, India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
          organizer: { "@id": "https://winzonsystem.com/#organization" },
          performer: { "@id": "https://winzonsystem.com/#organization" },
          image: [
            "https://winzonsystem.com/img/about-us-herosection.webp",
            "https://winzonsystem.com/img/mission-vission-about-us.webp",
          ],
          offers: {
            "@type": "Offer",
            name: "Commercial Project Services",
            description: "First major commercial project delivery",
            availability: "https://schema.org/InStock",
            price: "0",
            priceCurrency: "INR",
          },
        },
        {
          "@type": "Event",
          name: "500+ Projects Completed",
          startDate: "2020-01-01",
          endDate: "2020-01-01",
          description: "Reached a significant milestone in project delivery",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Mumbai, India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
          organizer: { "@id": "https://winzonsystem.com/#organization" },
          performer: { "@id": "https://winzonsystem.com/#organization" },
          image: [
            "https://winzonsystem.com/img/about-us-herosection.webp",
            "https://winzonsystem.com/img/mission-vission-about-us.webp",
          ],
          offers: {
            "@type": "Offer",
            name: "Project Milestone Achievement",
            description: "Celebrating 500+ successful project deliveries",
            availability: "https://schema.org/InStock",
            price: "0",
            priceCurrency: "INR",
          },
        },
        {
          "@type": "Event",
          name: "Innovation Award",
          startDate: "2022-05-01",
          endDate: "2022-05-01",
          description: "Received industry recognition for innovative designs",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Mumbai, India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
          organizer: { "@id": "https://winzonsystem.com/#organization" },
          performer: { "@id": "https://winzonsystem.com/#organization" },
          image: [
            "https://winzonsystem.com/img/about-us-herosection.webp",
            "https://winzonsystem.com/img/mission-vission-about-us.webp",
          ],
          offers: {
            "@type": "Offer",
            name: "Innovation Recognition",
            description: "Industry award for innovative design solutions",
            availability: "https://schema.org/InStock",
            price: "0",
            priceCurrency: "INR",
          },
        },
        {
          "@type": "Event",
          name: "1000+ Happy Clients",
          startDate: "2024-12-01",
          endDate: "2024-12-01",
          description: "Celebrated serving over 1000 satisfied customers",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Mumbai, India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          },
          organizer: { "@id": "https://winzonsystem.com/#organization" },
          performer: { "@id": "https://winzonsystem.com/#organization" },
          image: [
            "https://winzonsystem.com/img/about-us-herosection.webp",
            "https://winzonsystem.com/img/mission-vission-about-us.webp",
          ],
          offers: {
            "@type": "Offer",
            name: "Customer Milestone Celebration",
            description: "Celebrating 1000+ satisfied customers",
            availability: "https://schema.org/InStock",
            price: "0",
            priceCurrency: "INR",
          },
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://winzonsystem.com/about-us#achievements",
      name: "WinZone Achievements & Certifications",
      description:
        "Recognition of our commitment to quality, safety, and industry excellence",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "Achievement",
          name: "ISO 9001",
          description: "International Quality Management Standard",
          achievementCategory: "Quality Management",
          recognizedBy: {
            "@type": "Organization",
            name: "International Organization for Standardization",
          },
        },
        {
          "@type": "Achievement",
          name: "Energy Star",
          description:
            "Recognized for energy-efficient and sustainable performance",
          achievementCategory: "Energy Efficiency",
          recognizedBy: {
            "@type": "Organization",
            name: "Energy Star Program",
          },
        },
        {
          "@type": "Achievement",
          name: "Green Building",
          description: "Committed to eco-friendly and sustainable construction",
          achievementCategory: "Sustainability",
          recognizedBy: {
            "@type": "Organization",
            name: "Green Building Council",
          },
        },
        {
          "@type": "Achievement",
          name: "Safety First",
          description: "Ensuring a safe and secure workplace for everyone",
          achievementCategory: "Workplace Safety",
          recognizedBy: {
            "@type": "Organization",
            name: "Safety Standards Board",
          },
        },
        {
          "@type": "Achievement",
          name: "Innovation Award",
          description: "Honored for driving innovation and smart solutions",
          achievementCategory: "Innovation",
          recognizedBy: {
            "@type": "Organization",
            name: "Industry Innovation Council",
          },
        },
        {
          "@type": "Achievement",
          name: "Customer Excellence",
          description:
            "Recognized for outstanding customer service and support",
          achievementCategory: "Customer Service",
          recognizedBy: {
            "@type": "Organization",
            name: "Customer Excellence Board",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/about-us#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "When was WinZone founded?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone was founded in December 2016 with a vision to revolutionize the windows and doors industry.",
          },
        },
        {
          "@type": "Question",
          name: "What certifications does WinZone hold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone holds ISO 9001 certification, Energy Star recognition, Green Building certification, and has received Innovation Award and Customer Excellence recognition.",
          },
        },
        {
          "@type": "Question",
          name: "How many projects has WinZone completed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone has completed over 1000+ projects and served 1000+ happy clients since our founding in 2016.",
          },
        },
        {
          "@type": "Question",
          name: "What is WinZone's mission?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our mission is to revolutionize modern living through innovative window and door solutions that combine superior quality, cutting-edge design, and exceptional service.",
          },
        },
        {
          "@type": "Question",
          name: "What are WinZone's core values?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone's core values are excellence, integrity, innovation, and customer-centricity. We are committed to delivering outstanding results and building lasting relationships.",
          },
        },
        {
          "@type": "Question",
          name: "What makes WinZone's team special?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our team consists of passionate designers, engineers, and craftspeople who are dedicated to bringing your architectural vision to life with precision and expertise.",
          },
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://winzonsystem.com/#localbusiness",
      name: "WinZone",
      image: "https://winzonsystem.com/img/about-us-herosection.webp",
      telephone: "9909992145",
      email: "info@winzonsystem.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        postalCode: "360024",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.0760",
        longitude: "72.8777",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      currenciesAccepted: "INR, USD, EUR",
      foundingDate: "2016-12-01",
    },
    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/about-us#service",
      name: "Premium Aluminium Windows & Doors Services",
      description:
        "Professional design, manufacturing, and installation of premium aluminium windows, doors, sliding systems, facades and partitions",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Construction & Building Services",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Aluminium Systems Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Design",
              description:
                "Bespoke architectural solutions tailored to your needs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Professional Installation",
              description: "Expert installation by certified professionals",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Quality Assurance",
              description: "ISO 9001 certified quality management processes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "After-sales Support",
              description: "Comprehensive after-sales service and maintenance",
            },
          },
        ],
      },
    },
  ],
};

const page = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(optimizedSchemaData),
        }}
      />
      <CommonHeroSection
        title="ABOUT WINZONE"
        description="For over 15 years, we've been transforming spaces with innovative designs, premium materials, and unmatched craftsmanship that stands the test of time."
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/about-us-herosection.webp"
      />
      <MissionVission />
      <CompanyStory />
      <Achievements />
    </div>
  );
};

export default page;
