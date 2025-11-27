import CommonHeroSection from "@/components/Common/CommonHeroSection";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import ProjectDetail from "@/components/Project/ProjectDetail";
import React from "react";

export const metadata = {
  title:
    "Luxury Condominiums — WinZone Panoramic Windows & Smart Home Integration | Downtown LA CA",
  description:
    "Complete case study of WinZone's luxury condominium project in Downtown LA featuring panoramic aluminum windows, premium doors with smart home integration, and advanced security features. View detailed luxury residential specifications and smart technology solutions.",
  keywords: [
    "WinZone luxury condominiums project",
    "panoramic windows Downtown LA",
    "luxury condo windows",
    "smart home integration windows",
    "luxury residential construction",
    "condo window installation",
    "panoramic aluminum windows",
    "luxury condo design",
    "smart home windows",
    "luxury residential contractor",
    "condo window replacement",
    "luxury apartment windows",
    "downtown LA condos",
    "luxury residential design",
    "smart home technology",
    "luxury condo construction",
    "panoramic window systems",
    "luxury residential windows",
    "condo renovation contractor",
    "smart home integration",
    "luxury residential solutions",
    "downtown LA construction",
    "luxury condo contractor",
    "panoramic window installation",
    "luxury residential services",
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
    canonical: "https://winzonsystem.com/project/luxury-condominiums",
  },
  images: [
    {
      url: "https://winzonsystem.com/img/luxury-condominiums.webp",
      width: 362,
      height: 266,
      alt: "Luxury Condominiums - WinZone Panoramic Windows Project Downtown LA CA",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-1.webp",
      width: 778,
      height: 541,
      alt: "Luxury Condominiums - Smart Home Integration Windows Installation",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-2.webp",
      width: 1169,
      height: 553,
      alt: "Luxury Condominiums - Advanced Security Features Downtown LA",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/project/luxury-condominiums",
    siteName: "WinZone",
    title:
      "Luxury Condominiums — WinZone Panoramic Windows & Smart Home Integration | Downtown LA CA",
    description:
      "Complete case study of WinZone's luxury condominium project in Downtown LA featuring panoramic aluminum windows and smart home integration with advanced security features.",
    images: [
      {
        url: "https://winzonsystem.com/img/luxury-condominiums.webp",
        width: 362,
        height: 266,
        alt: "Luxury Condominiums - WinZone Panoramic Windows Project Downtown LA CA",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title:
      "WinZone | Luxury Condominiums - Panoramic Windows Project Downtown LA CA",
    description:
      "High-end condominium project featuring panoramic windows and smart home integration by WinZone in Downtown LA with advanced security features.",
    images: ["https://winzonsystem.com/img/luxury-condominiums.webp"],
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
    title: "WinZone Project",
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
      logo: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/logo/meta-logo.png",
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
      "@type": "WebPage",
      "@id": "https://winzonsystem.com/project/luxury-condominiums#webpage",
      url: "https://winzonsystem.com/project/luxury-condominiums",
      name: "Luxury Condominiums — WinZone Panoramic Windows & Smart Home Integration | Downtown LA CA",
      description:
        "Complete case study of WinZone's luxury condominium project in Downtown LA featuring panoramic aluminum windows and smart home integration with advanced security features.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/img/luxury-condominiums.webp",
        width: 362,
        height: 266,
        caption:
          "Luxury Condominiums - WinZone Panoramic Windows Project Downtown LA CA",
      },
      datePublished: "2023-09-30T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id":
          "https://winzonsystem.com/project/luxury-condominiums#breadcrumb",
      },
      mainEntity: {
        "@id": "https://winzonsystem.com/project/luxury-condominiums#project",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/project/luxury-condominiums#breadcrumb",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Condominiums",
          item: "https://winzonsystem.com/project/luxury-condominiums",
        },
      ],
    },

    {
      "@type": "CreativeWork",
      "@id": "https://winzonsystem.com/project/luxury-condominiums#project",
      name: "Luxury Condominiums - Panoramic Windows & Smart Home Integration Project",
      description:
        "High-end condominium project featuring panoramic windows and premium aluminum doors with smart home integration and advanced security features. This Downtown LA project showcases WinZone's expertise in luxury residential construction and smart home technology integration.",
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/luxury-condominiums.webp",
          width: 362,
          height: 266,
          caption:
            "Luxury Condominiums - WinZone Panoramic Windows Project Downtown LA CA",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-1.webp",
          width: 778,
          height: 541,
          caption:
            "Luxury Condominiums - Smart Home Integration Windows Installation",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-2.webp",
          width: 1169,
          height: 553,
          caption:
            "Luxury Condominiums - Advanced Security Features Downtown LA",
        },
      ],
      author: { "@id": "https://winzonsystem.com/#organization" },
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      datePublished: "2023-09-30T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      locationCreated: {
        "@type": "Place",
        name: "Mumbai, Maharashtra, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rajkot",
          addressRegion: "Gujarat",
          addressCountry: "IN",
          postalCode: "360024",
        },
      },
      about: [
        {
          "@type": "Thing",
          name: "Luxury Residential",
          description: "High-end luxury residential construction and design",
        },
        {
          "@type": "Thing",
          name: "Smart Home Integration",
          description:
            "Smart home technology integration and automation systems",
        },
        {
          "@type": "Thing",
          name: "Panoramic Windows",
          description:
            "Large panoramic window systems for luxury residential applications",
        },
        {
          "@type": "Thing",
          name: "Advanced Security",
          description:
            "Advanced security features and smart home security systems",
        },
        {
          "@type": "Thing",
          name: "Condominium Design",
          description:
            "Luxury condominium architectural design and construction",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Luxury Condominiums",
          description:
            "High-end luxury condominium development and construction",
        },
        {
          "@type": "Thing",
          name: "Smart Home Technology",
          description: "Advanced smart home technology and automation systems",
        },
        {
          "@type": "Thing",
          name: "Panoramic Window Systems",
          description: "Large panoramic window systems for luxury residential",
        },
        {
          "@type": "Thing",
          name: "Luxury Residential",
          description: "Premium luxury residential construction and design",
        },
        {
          "@type": "Thing",
          name: "Downtown LA Real Estate",
          description: "Luxury real estate development in Downtown Los Angeles",
        },
      ],
      keywords: [
        "luxury condominiums Downtown LA",
        "panoramic windows",
        "smart home integration",
        "luxury residential construction",
        "condo window installation",
        "smart home technology",
        "luxury condo design",
        "panoramic window systems",
        "luxury residential windows",
        "smart home automation",
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/project/luxury-condominiums#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of project is the Luxury Condominiums?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Luxury Condominiums is a high-end residential project featuring panoramic aluminum windows and premium doors with smart home integration and advanced security features. This Downtown LA project showcases WinZone's expertise in luxury residential construction and smart home technology integration.",
          },
        },
        {
          "@type": "Question",
          name: "Where is this project located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is located in Downtown Los Angeles, California, specifically designed for luxury condominium development. The location provides an ideal setting for showcasing panoramic window systems and smart home integration in a premium urban residential environment.",
          },
        },
        {
          "@type": "Question",
          name: "What products were used in this project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project utilized WinZone's panoramic aluminum windows and premium doors with integrated smart home technology. These products feature advanced automation capabilities, panoramic views, smart home integration, advanced security features, and luxury design elements specifically engineered for high-end residential applications.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key features of this installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key features include panoramic aluminum windows providing expansive city views, smart home integration for automated control, premium aluminum doors with advanced security features, smart home technology integration, luxury design elements, and advanced security systems designed for luxury residential living.",
          },
        },
        {
          "@type": "Question",
          name: "How long did the project take to complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Luxury Condominiums project was completed over 16 months, including detailed smart home integration planning, panoramic window system design and manufacturing, and careful installation to meet luxury residential standards and smart home technology requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What makes this project unique?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is unique due to its combination of panoramic window systems with smart home integration, luxury residential design with advanced security features, and Downtown LA location with premium urban living amenities. The project demonstrates WinZone's expertise in delivering cutting-edge residential solutions that combine luxury living with modern technology.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/project/luxury-condominiums#service",
      name: "Luxury Residential & Smart Home Integration Services",
      description:
        "Professional construction services for luxury condominiums and high-end residential properties featuring panoramic windows, smart home integration, and advanced security systems in Downtown LA and beyond",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Luxury Residential",
      areaServed: "California, USA",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Luxury Residential Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Panoramic Window Systems",
              description:
                "Large panoramic window systems for luxury residential applications providing expansive views and natural light",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Smart Home Integration",
              description:
                "Advanced smart home technology integration for automated window and door control systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Luxury Residential Construction",
              description:
                "High-end luxury residential construction services including condominiums and premium residential properties",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advanced Security Systems",
              description:
                "Premium security systems for luxury residential properties with smart home integration and monitoring",
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
      <ProjectDetail
        title="Luxury Condominiums"
        description="High-end condominium project featuring panoramic windows and premium aluminum doors with smart home integration and advanced security features."
        productDescription="Panoramic aluminum windows & smart home integration for luxury condominiums in Mumbai."
        imgSrc="/img/luxury-condominiums-hero.webp"
        ProjectDetailInfo={[
          {
            text: "Client",
            value: "Luxury Development Group",
          },
          {
            text: "Location",
            value: "Downtown LA, CA",
          },
          {
            text: "Category",
            value: "Luxury Residential",
          },
          {
            text: "Time",
            value: "8 Months",
          },
          {
            text: "Status",
            value: "Completed",
          },
        ]}
        projectOverviewParagraph={[
          "We are leading manufacturers and suppliers of high quality panoramic window systems and smart home integration solutions, specializing in luxury residential construction and premium condominium development with cutting-edge technology.",
          "This luxury condominium project showcases our expertise in delivering premium residential solutions with advanced technology integration. The installation features panoramic aluminum windows that provide expansive city views, while the smart home integration offers residents automated control and enhanced security features for the ultimate luxury living experience.",
          "The project demonstrates our commitment to combining luxury design with smart technology, ensuring that residents enjoy both aesthetic appeal and modern convenience in this state-of-the-art Downtown LA condominium development.",
        ]}
        imageSrc2="/img/luxury-condominiums-featured.webp"
        projectOverviewParagraph2={[
          "Our panoramic window systems feature advanced aluminum construction and smart home integration capabilities, ensuring optimal performance in Downtown LA's urban environment while providing residents with breathtaking city views and natural light.",
          "The smart home integration provides residents with automated control over their windows and doors, advanced security monitoring, and seamless integration with modern home automation systems for the ultimate luxury living experience.",
          "This project represents the perfect blend of luxury residential design with smart home technology, showcasing how panoramic window solutions can enhance both the aesthetic appeal and functional performance of premium urban living spaces.",
        ]}
        keyFeature={[
          "Panoramic aluminum windows with expansive city views",
          "Smart home integration for automated window and door control",
          "Premium aluminum doors with advanced security features",
          "Smart home technology integration for luxury living",
          "Advanced security systems with monitoring capabilities",
          "Luxury design elements for premium residential experience",
        ]}
      />
      <ContactUs />
    </div>
  );
};

export default page;
