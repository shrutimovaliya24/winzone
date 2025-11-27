import CommonHeroSection from "@/components/Common/CommonHeroSection";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import ProjectCard from "@/components/Project/ProjectCard";
import React from "react";

export const metadata = {
  title: "WinZone Projects — Architectural Facades & Installations",
  description:
    "Explore WinZone's portfolio of completed projects including residential complexes, corporate headquarters, boutique hotels, medical centers, luxury condominiums, and villa estates. View case studies, project details, and technical specifications for our aluminium windows, doors, facades, and curtain wall installations across California and beyond.",
  keywords: [
    "WinZone projects",
    "aluminium facades",
    "curtain wall projects",
    "window installations",
    "door installations",
    "architectural facades",
    "case studies",
    "commercial projects",
    "residential projects",
    "project portfolio",
    "facade installations",
    "glass facades",
    "energy efficient windows",
    "aluminium doors",
    "project gallery",
    "construction projects",
    "architectural solutions",
    "building facades",
    "modern architecture",
    "project showcase",
  ],
  authors: [{ name: "WinZone", url: "https://winzonsystem.com" }],
  creator: "WinZone",
  publisher: "WinZone",
  robots: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  metadataBase: new URL("https://winzonsystem.com"),
  alternates: {
    canonical: "https://winzonsystem.com/project",
    languages: {
      "en-US": "https://winzonsystem.com/project",
      "en-GB": "https://winzonsystem.com/project",
    },
  },
  images: [
    {
      url: "https://winzonsystem.com/img/project-herosection.webp",
      width: 1200,
      height: 630,
      alt: "WinZone projects — facade and installation gallery",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/project-1.webp",
      width: 362,
      height: 266,
      alt: "Modern Residential Complex - WinZone Project",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/project-2.webp",
      width: 362,
      height: 266,
      alt: "Corporate Headquarters - WinZone Project",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/project-3.webp",
      width: 362,
      height: 266,
      alt: "Boutique Hotel Renovation - WinZone Project",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/project-4.webp",
      width: 362,
      height: 266,
      alt: "Medical Center - WinZone Project",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/project-5.webp",
      width: 362,
      height: 266,
      alt: "Luxury Condominiums - WinZone Project",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/project-6.webp",
      width: 362,
      height: 266,
      alt: "Luxury Villa Estate - WinZone Project",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/project",
    siteName: "WinZone",
    title: "WinZone Projects — Architectural Facades & Installations",
    description:
      "Explore WinZone's portfolio of completed projects including residential complexes, corporate headquarters, boutique hotels, medical centers, luxury condominiums, and villa estates. View case studies and technical specifications.",
    images: [
      {
        url: "https://winzonsystem.com/img/project-herosection.webp",
        width: 1200,
        height: 630,
        alt: "WinZone project hero image showcasing portfolio",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title: "WinZone | Projects: Facades & Installations",
    description:
      "Case studies of WinZone's facade, window and door installations — photos, specs and contact for project quotes.",
    images: ["https://winzonsystem.com/img/project-herosection.webp"],
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
  },
  applicationName: "WinZone",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    title: "WinZone Projects",
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
      alternateName: "WinZone Aluminium Solutions",
      url: "https://winzonsystem.com",
      description:
        "WinZone supplies premium aluminium windows, doors, sliding systems, facades and partitions engineered for energy efficiency, durability and contemporary architecture.",
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/logo/meta-logo.png",
          width: 64,
          height: 68,
          caption: "WinZone Logo",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/project-herosection.webp",
          width: 1200,
          height: 630,
          caption: "WinZone Project Portfolio",
        },
      ],
      logo: {
        "@type": "ImageObject",
        "@id": "https://winzonsystem.com/#logo",
        url: "https://winzonsystem.com/logo/meta-logo.png",
        contentUrl: "https://winzonsystem.com/logo/meta-logo.png",
        width: 64,
        height: 68,
        caption: "WinZone Logo",
      },
      foundingDate: "2008-01-01",

      industry: "Architecture & Construction",
      slogan: "Premium Aluminium Solutions for Modern Architecture",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          telephone: ["9909992145", "9909992140"],
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
        addressCountry: "IN",
        postalCode: "360024",
      },
      sameAs: [
        "https://www.facebook.com/winzone",
        "https://www.twitter.com/winzone",
        "https://www.linkedin.com/company/winzone",
        "https://www.instagram.com/winzone",
      ],
      knowsAbout: [
        "Aluminium Windows",
        "Aluminium Doors",
        "Glass Facades",
        "Curtain Wall Systems",
        "Architectural Solutions",
        "Energy Efficient Design",
        "Project Management",
        "Installation Services",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://winzonsystem.com/#website",
      url: "https://winzonsystem.com",
      name: "WinZone",
      description:
        "Premium aluminium windows, doors, sliding systems and facades for residential and commercial architecture.",
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://winzonsystem.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    {
      "@type": "CollectionPage",
      "@id": "https://winzonsystem.com/project#collection",
      url: "https://winzonsystem.com/project",
      name: "WinZone Projects — Architectural Facades & Installations",
      description:
        "Explore WinZone's portfolio of completed projects including residential complexes, corporate headquarters, boutique hotels, medical centers, luxury condominiums, and villa estates. View case studies, project details, and technical specifications for our aluminium windows, doors, facades, and curtain wall installations.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": "https://winzonsystem.com/project#primaryimage",
        url: "https://winzonsystem.com/img/project-herosection.webp",
        contentUrl: "https://winzonsystem.com/img/project-herosection.webp",
        width: 1200,
        height: 630,
        caption:
          "WinZone project hero image showcasing comprehensive project portfolio",
      },
      datePublished: "2022-01-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: { "@id": "https://winzonsystem.com/project#breadcrumb" },
      hasPart: [
        {
          "@id": "https://winzonsystem.com/project/modern-residential-complex",
        },
        {
          "@id": "https://winzonsystem.com/project/corporate-headquarters",
        },
        {
          "@id": "https://winzonsystem.com/project/boutique-hotel-renovation",
        },
        { "@id": "https://winzonsystem.com/project/medical-center" },
        { "@id": "https://winzonsystem.com/project/luxury-condominiums" },
        { "@id": "https://winzonsystem.com/project/luxury-villa-estate" },
      ],
      significantLink: [
        "https://winzonsystem.com/product",
        "https://winzonsystem.com/contact-us",
        "https://winzonsystem.com/about-us",
        "https://winzonsystem.com/blog",
        "https://winzonsystem.com/career",
        "https://winzonsystem.com/e-catalogue",
      ],
      mainEntity: {
        "@id": "https://winzonsystem.com/project#projectportfolio",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/project#breadcrumb",
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
          name: "Projects",
          item: "https://winzonsystem.com/project",
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id": "https://winzonsystem.com/project#projectportfolio",
      name: "WinZone Project Portfolio",
      description:
        "Comprehensive collection of WinZone's completed architectural projects",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: "https://winzonsystem.com/project/modern-residential-complex",
          item: {
            "@type": "CreativeWork",
            "@id":
              "https://winzonsystem.com/project/modern-residential-complex",
            name: "Modern Residential Complex",
            description:
              "Complete window and door installation for a luxury residential complex featuring energy-efficient aluminum windows and premium folding door systems.",
            image: [
              {
                "@type": "ImageObject",
                url: "https://winzonsystem.com/img/project-1.webp",
                width: 362,
                height: 266,
                caption: "Modern Residential Complex - WinZone Project",
              },
            ],
            author: { "@id": "https://winzonsystem.com/#organization" },
            publisher: { "@id": "https://winzonsystem.com/#organization" },
            datePublished: "2023-01-15T00:00:00+00:00",
            locationCreated: {
              "@type": "Place",
              name: "Mumbai, Maharashtra, India",
            },
            about: [
              {
                "@type": "Thing",
                name: "Residential Construction",
              },
              {
                "@type": "Thing",
                name: "Aluminium Windows",
              },
              {
                "@type": "Thing",
                name: "Folding Door Systems",
              },
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          url: "https://winzonsystem.com/project/corporate-headquarters",
          item: {
            "@type": "CreativeWork",
            "@id": "https://winzonsystem.com/project/corporate-headquarters",
            name: "Corporate Headquarters",
            description:
              "Modern glass facade installation for a 15-story corporate headquarters building, featuring energy-efficient curtain wall systems and integrated shading solutions for optimal thermal performance.",
            image: [
              {
                "@type": "ImageObject",
                url: "https://winzonsystem.com/img/project-2.webp",
                width: 362,
                height: 266,
                caption: "Corporate Headquarters - WinZone Project",
              },
            ],
            author: { "@id": "https://winzonsystem.com/#organization" },
            publisher: { "@id": "https://winzonsystem.com/#organization" },
            datePublished: "2023-03-20T00:00:00+00:00",
            locationCreated: {
              "@type": "Place",
              name: "San Jose, CA",
            },
            about: [
              {
                "@type": "Thing",
                name: "Commercial Construction",
              },
              {
                "@type": "Thing",
                name: "Glass Facades",
              },
              {
                "@type": "Thing",
                name: "Curtain Wall Systems",
              },
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          url: "https://winzonsystem.com/project/boutique-hotel-renovation",
          item: {
            "@type": "CreativeWork",
            "@id": "https://winzonsystem.com/project/boutique-hotel-renovation",
            name: "Boutique Hotel Renovation",
            description:
              "Historic boutique hotel renovation featuring custom WinZone windows that maintain the building's character while providing modern energy efficiency and comfort for guests.",
            image: [
              {
                "@type": "ImageObject",
                url: "https://winzonsystem.com/img/project-3.webp",
                width: 362,
                height: 266,
                caption: "Boutique Hotel Renovation - WinZone Project",
              },
            ],
            author: { "@id": "https://winzonsystem.com/#organization" },
            publisher: { "@id": "https://winzonsystem.com/#organization" },
            datePublished: "2023-05-10T00:00:00+00:00",
            locationCreated: {
              "@type": "Place",
              name: "Napa Valley, CA",
            },
            about: [
              {
                "@type": "Thing",
                name: "Hotel Renovation",
              },
              {
                "@type": "Thing",
                name: "Historic Preservation",
              },
              {
                "@type": "Thing",
                name: "Custom Windows",
              },
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          url: "https://winzonsystem.com/project/medical-center",
          item: {
            "@type": "CreativeWork",
            "@id": "https://winzonsystem.com/project/medical-center",
            name: "Medical Center",
            description:
              "Comprehensive window and door installation for a new medical center, featuring specialized healthcare-grade materials and enhanced security systems for patient safety.",
            image: [
              {
                "@type": "ImageObject",
                url: "https://winzonsystem.com/img/project-4.webp",
                width: 362,
                height: 266,
                caption: "Medical Center - WinZone Project",
              },
            ],
            author: { "@id": "https://winzonsystem.com/#organization" },
            publisher: { "@id": "https://winzonsystem.com/#organization" },
            datePublished: "2023-07-15T00:00:00+00:00",
            locationCreated: {
              "@type": "Place",
              name: "Stanford, CA",
            },
            about: [
              {
                "@type": "Thing",
                name: "Healthcare Construction",
              },
              {
                "@type": "Thing",
                name: "Medical Center",
              },
              {
                "@type": "Thing",
                name: "Security Systems",
              },
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          url: "https://winzonsystem.com/project/luxury-condominiums",
          item: {
            "@type": "CreativeWork",
            "@id": "https://winzonsystem.com/project/luxury-condominiums",
            name: "Luxury Condominiums",
            description:
              "High-end condominium project featuring panoramic windows and premium aluminum doors with smart home integration and advanced security features.",
            image: [
              {
                "@type": "ImageObject",
                url: "https://winzonsystem.com/img/project-5.webp",
                width: 362,
                height: 266,
                caption: "Luxury Condominiums - WinZone Project",
              },
            ],
            author: { "@id": "https://winzonsystem.com/#organization" },
            publisher: { "@id": "https://winzonsystem.com/#organization" },
            datePublished: "2023-09-30T00:00:00+00:00",
            locationCreated: {
              "@type": "Place",
              name: "Downtown LA, CA",
            },
            about: [
              {
                "@type": "Thing",
                name: "Luxury Residential",
              },
              {
                "@type": "Thing",
                name: "Smart Home Integration",
              },
              {
                "@type": "Thing",
                name: "Panoramic Windows",
              },
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          url: "https://winzonsystem.com/project/luxury-villa-estate",
          item: {
            "@type": "CreativeWork",
            "@id": "https://winzonsystem.com/project/luxury-villa-estate",
            name: "Luxury Villa Estate",
            description:
              "Bespoke window and door solutions for an oceanfront luxury villa featuring panoramic folding glass walls and custom aluminum frames.",
            image: [
              {
                "@type": "ImageObject",
                url: "https://winzonsystem.com/img/project-6.webp",
                width: 362,
                height: 266,
                caption: "Luxury Villa Estate - WinZone Project",
              },
            ],
            author: { "@id": "https://winzonsystem.com/#organization" },
            publisher: { "@id": "https://winzonsystem.com/#organization" },
            datePublished: "2023-11-20T00:00:00+00:00",
            locationCreated: {
              "@type": "Place",
              name: "Malibu, CA",
            },
            about: [
              {
                "@type": "Thing",
                name: "Luxury Villa",
              },
              {
                "@type": "Thing",
                name: "Oceanfront Property",
              },
              {
                "@type": "Thing",
                name: "Custom Aluminum Frames",
              },
            ],
          },
        },
      ],
    },

    {
      "@type": "ImageGallery",
      "@id": "https://winzonsystem.com/project#gallery",
      name: "WinZone Project Gallery",
      description:
        "Visual showcase of WinZone's completed architectural projects and installations",
      numberOfItems: 6,
      associatedMedia: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/project-1.webp",
          width: 362,
          height: 266,
          caption: "Modern Residential Complex",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/project-2.webp",
          width: 362,
          height: 266,
          caption: "Corporate Headquarters",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/project-3.webp",
          width: 362,
          height: 266,
          caption: "Boutique Hotel Renovation",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/project-4.webp",
          width: 362,
          height: 266,
          caption: "Medical Center",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/project-5.webp",
          width: 362,
          height: 266,
          caption: "Luxury Condominiums",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/project-6.webp",
          width: 362,
          height: 266,
          caption: "Luxury Villa Estate",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/project#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of projects does WinZone handle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone handles a wide range of architectural projects including residential complexes, corporate headquarters, boutique hotels, medical centers, luxury condominiums, and villa estates. We specialize in aluminium windows, doors, facades, and curtain wall systems.",
          },
        },
        {
          "@type": "Question",
          name: "How can I view detailed project information?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can view detailed project information by clicking on any project card in our portfolio. Each project page includes comprehensive details, technical specifications, project timeline, and high-quality images of the completed work.",
          },
        },
        {
          "@type": "Question",
          name: "Does WinZone work on both residential and commercial projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, WinZone works on both residential and commercial projects. Our portfolio includes luxury residential complexes, corporate headquarters, medical centers, hotels, and various other architectural projects across different sectors.",
          },
        },
        {
          "@type": "Question",
          name: "Can I request a consultation for my project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! You can request a project consultation by contacting us through our contact page or by clicking the 'Contact Us' button on any project page. Our team will provide detailed information about how we can help with your specific project requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What makes WinZone projects unique?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone projects are unique due to our focus on energy efficiency, custom design solutions, premium materials, and attention to architectural detail. We combine modern technology with aesthetic appeal to create solutions that meet both functional and design requirements.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/project#service",
      name: "Architectural Project Consultation & Installation",
      description:
        "Professional consultation, design, and installation services for WinZone's architectural projects including windows, doors, facades, and curtain wall systems",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Architectural Consultation",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "WinZone Project Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Project Consultation",
              description:
                "Expert consultation for architectural project planning and design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Design Solutions",
              description:
                "Bespoke design solutions tailored to specific project requirements",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Professional Installation",
              description:
                "Expert installation services for all WinZone products",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Project Management",
              description:
                "Complete project management from design to completion",
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
        title="OUR PROJECTS"
        description="Explore our portfolio of successful installations across residential, commercial, and industrial sectors"
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/project-herosection.webp"
      />
      <ProjectCard />
      <ContactUs />
    </div>
  );
};

export default page;
