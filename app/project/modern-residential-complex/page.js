import CommonHeroSection from "@/components/Common/CommonHeroSection";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import ProjectDetail from "@/components/Project/ProjectDetail";
import React from "react";

export const metadata = {
  title:
    "Modern Residential Complex — WinZone Aluminum Windows & Doors Project | Mumbai",
  description:
    "Complete case study of WinZone's luxury residential complex project in Mumbai featuring energy-efficient aluminum windows, premium folding door systems, and modern architectural solutions. View detailed specifications, installation process, and project outcomes.",
  keywords: [
    "WinZone project case study",
    "Modern Residential Complex Mumbai",
    "aluminum windows installation",
    "folding door systems residential",
    "energy efficient windows Mumbai",
    "luxury residential construction",
    "aluminum doors installation",
    "residential facade design",
    "window installation services",
    "door installation contractor",
    "architectural aluminum solutions",
    "residential window replacement",
    "premium aluminum windows",
    "modern residential design",
    "Mumbai construction project",
    "aluminum window systems",
    "residential door systems",
    "energy efficient home windows",
    "luxury home construction",
    "aluminum facade installation",
    "residential window contractor",
    "modern home design Mumbai",
    "aluminum window manufacturer",
    "residential construction services",
    "premium home windows",
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
    canonical: "https://winzonsystem.com/project/modern-residential-complex",
  },
  images: [
    {
      url: "https://winzonsystem.com/img/modern-residential-complex.webp",
      width: 362,
      height: 266,
      alt: "Modern Residential Complex - WinZone Aluminum Windows Project Mumbai",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-1.webp",
      width: 778,
      height: 541,
      alt: "Modern Residential Complex - Energy Efficient Aluminum Windows Installation",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-2.webp",
      width: 1169,
      height: 553,
      alt: "Modern Residential Complex - Premium Folding Door Systems Mumbai",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/project/modern-residential-complex",
    siteName: "WinZone",
    title:
      "Modern Residential Complex — WinZone Aluminum Windows & Doors Project | Mumbai",
    description:
      "Complete case study of WinZone's luxury residential complex project in Mumbai featuring energy-efficient aluminum windows, premium folding door systems, and modern architectural solutions.",
    images: [
      {
        url: "https://winzonsystem.com/img/modern-residential-complex.webp",
        width: 362,
        height: 266,
        alt: "Modern Residential Complex - WinZone Aluminum Windows Project Mumbai",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title:
      "WinZone | Modern Residential Complex - Aluminum Windows Project Mumbai",
    description:
      "Luxury residential complex featuring energy-efficient aluminum windows and premium folding door systems by WinZone in Mumbai, India.",
    images: ["https://winzonsystem.com/img/modern-residential-complex.webp"],
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
      "@id":
        "https://winzonsystem.com/project/modern-residential-complex#webpage",
      url: "https://winzonsystem.com/project/modern-residential-complex",
      name: "Modern Residential Complex — WinZone Aluminum Windows & Doors Project | Mumbai",
      description:
        "Complete case study of WinZone's luxury residential complex project in Mumbai featuring energy-efficient aluminum windows, premium folding door systems, and modern architectural solutions.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/img/modern-residential-complex.webp",
        width: 362,
        height: 266,
        caption:
          "Modern Residential Complex - WinZone Aluminum Windows Project Mumbai",
      },
      datePublished: "2023-01-15T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id":
          "https://winzonsystem.com/project/modern-residential-complex#breadcrumb",
      },
      mainEntity: {
        "@id":
          "https://winzonsystem.com/project/modern-residential-complex#project",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://winzonsystem.com/project/modern-residential-complex#breadcrumb",
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
          name: "Modern Residential Complex",
          item: "https://winzonsystem.com/project/modern-residential-complex",
        },
      ],
    },

    {
      "@type": "CreativeWork",
      "@id":
        "https://winzonsystem.com/project/modern-residential-complex#project",
      name: "Modern Residential Complex - Aluminum Windows & Doors Project",
      description:
        "Complete window and door installation for a luxury residential complex featuring energy-efficient aluminum windows and premium folding door systems. This Mumbai-based project showcases WinZone's expertise in residential architectural solutions.",
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/modern-residential-complex.webp",
          width: 362,
          height: 266,
          caption:
            "Modern Residential Complex - WinZone Aluminum Windows Project California",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-1.webp",
          width: 778,
          height: 541,
          caption:
            "Modern Residential Complex - Energy Efficient Aluminum Windows Installation",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-2.webp",
          width: 1169,
          height: 553,
          caption:
            "Modern Residential Complex - Premium Folding Door Systems Mumbai",
        },
      ],
      author: { "@id": "https://winzonsystem.com/#organization" },
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      datePublished: "2023-01-15T00:00:00+00:00",
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
          name: "Residential Construction",
          description:
            "Luxury residential complex development and construction",
        },
        {
          "@type": "Thing",
          name: "Aluminum Windows",
          description:
            "Energy-efficient aluminum window systems for residential applications",
        },
        {
          "@type": "Thing",
          name: "Folding Door Systems",
          description:
            "Premium folding door systems for modern residential spaces",
        },
        {
          "@type": "Thing",
          name: "Energy Efficient Design",
          description:
            "Sustainable and energy-efficient architectural solutions",
        },
        {
          "@type": "Thing",
          name: "Modern Architecture",
          description: "Contemporary architectural design and implementation",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Luxury Residential",
          description: "High-end residential construction and design",
        },
        {
          "@type": "Thing",
          name: "Window Installation",
          description: "Professional window installation services",
        },
        {
          "@type": "Thing",
          name: "Door Installation",
          description: "Expert door installation and fitting services",
        },
        {
          "@type": "Thing",
          name: "Architectural Solutions",
          description: "Comprehensive architectural design and implementation",
        },
        {
          "@type": "Thing",
          name: "Mumbai Construction",
          description: "Construction projects in Mumbai, Maharashtra, India",
        },
      ],
      keywords: [
        "aluminum windows Mumbai",
        "residential construction",
        "folding door systems",
        "energy efficient windows",
        "luxury residential",
        "modern architecture",
        "window installation",
        "door installation",
        "aluminum facade",
        "residential design",
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/project/modern-residential-complex#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of project is the Modern Residential Complex?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Modern Residential Complex is a luxury residential construction project featuring complete window and door installation with energy-efficient aluminum windows and premium folding door systems by WinZone. This Mumbai-based project showcases modern architectural design and sustainable building practices.",
          },
        },
        {
          "@type": "Question",
          name: "Where is this project located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is located in Mumbai, Maharashtra, India, specifically designed for a luxury residential complex development. The location provides an ideal setting for showcasing energy-efficient aluminum windows and modern architectural solutions.",
          },
        },
        {
          "@type": "Question",
          name: "What products were used in this project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project utilized WinZone's energy-efficient aluminum windows and premium folding door systems. These products feature advanced thermal break technology, weather-resistant coatings, and modern design elements specifically designed for optimal performance and aesthetic appeal in residential applications.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key features of this installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key features include energy-efficient aluminum windows with thermal break technology, premium folding door systems for flexible space configuration, weather-resistant coatings for durability, sound insulation properties, and modern architectural design that enhances both functionality and aesthetic appeal.",
          },
        },
        {
          "@type": "Question",
          name: "How long did the project take to complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Modern Residential Complex project was completed over 8 months, including planning, design, manufacturing, and installation phases. The timeline ensured quality craftsmanship and attention to detail in every aspect of the aluminum windows and door systems installation.",
          },
        },
        {
          "@type": "Question",
          name: "What makes this project unique?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is unique due to its combination of luxury residential design with energy-efficient aluminum solutions, premium folding door systems, and modern architectural integration. The project demonstrates WinZone's expertise in delivering both aesthetic appeal and functional performance in residential construction.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://winzonsystem.com/project/modern-residential-complex#service",
      name: "Residential Aluminum Windows & Doors Installation",
      description:
        "Professional installation services for residential aluminum windows and folding door systems, specializing in luxury residential complexes and modern architectural solutions in Mumbai and beyond",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Residential Installation",
      areaServed: "Mumbai, Maharashtra, India",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Residential Installation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aluminum Window Installation",
              description:
                "Professional installation of energy-efficient aluminum windows for residential applications with thermal break technology and weather-resistant coatings",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Folding Door Systems",
              description:
                "Installation of premium folding door systems for modern residential spaces with flexible configuration options",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Project Consultation",
              description:
                "Expert consultation for residential window and door projects including design, material selection, and installation planning",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Energy Efficiency Solutions",
              description:
                "Specialized services for energy-efficient window and door solutions to reduce energy consumption and improve home comfort",
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
        title="Modern Residential Complex"
        description="Complete window and door installation for a luxury residential complex featuring energy-efficient aluminum windows and premium folding door systems."
        productDescription="Energy-efficient aluminum windows & premium folding doors for luxury residential complex in Mumbai."
        imgSrc="/img/modern-residential-complex-hero.webp"
        ProjectDetailInfo={[
          {
            text: "Client",
            value: "Luxury Residential Developer",
          },
          {
            text: "Location",
            value: "Mumbai, Maharashtra, India",
          },
          {
            text: "Category",
            value: "Residential Construction",
          },
          {
            text: "Time",
            value: "4 Months",
          },
          {
            text: "Status",
            value: "Completed",
          },
        ]}
        projectOverviewParagraph={[
          "We are leading manufacturers and suppliers of high quality aluminum windows and doors, specializing in luxury residential applications and modern architectural solutions.",
          "This modern residential complex project showcases our expertise in delivering premium architectural solutions. The installation features energy-efficient aluminum windows that provide excellent thermal insulation and sound reduction, while the premium folding door systems offer seamless indoor-outdoor living experiences for Mumbai's climate.",
          "The project demonstrates our commitment to combining aesthetic appeal with functional performance, ensuring that residents enjoy both comfort and style in their living spaces while maintaining energy efficiency and sustainability standards.",
        ]}
        imageSrc2="/img/modern-residential-complex-featured.webp"
        projectOverviewParagraph2={[
          "Our aluminum windows feature advanced thermal break technology and weather-resistant coatings, ensuring long-lasting performance in Mumbai's diverse climate conditions while providing superior energy efficiency.",
          "The folding door systems provide flexible space configuration, allowing residents to create open-plan living areas or maintain privacy as needed, while maintaining the building's modern architectural integrity and enhancing the overall living experience.",
          "This project represents the perfect blend of luxury residential design with sustainable building practices, showcasing how modern aluminum solutions can enhance both the aesthetic and functional aspects of contemporary living spaces.",
        ]}
        keyFeature={[
          "Energy efficient aluminum windows with thermal break technology",
          "Premium folding door systems for flexible space configuration",
          "Weather resistant coating for California climate conditions",
          "Sound insulation properties for residential comfort",
          "Modern architectural design integration",
          "Sustainable and eco-friendly building solutions",
        ]}
      />
      <ContactUs />
    </div>
  );
};

export default page;
