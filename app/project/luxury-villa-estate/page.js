import CommonHeroSection from "@/components/Common/CommonHeroSection";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import ProjectDetail from "@/components/Project/ProjectDetail";
import React from "react";

export const metadata = {
  title:
    "Luxury Villa Estate — WinZone Oceanfront Folding Glass Walls & Custom Aluminum Frames | Malibu CA",
  description:
    "Complete case study of WinZone's oceanfront luxury villa estate project in Malibu, CA featuring bespoke window and door solutions, panoramic folding glass walls, and custom aluminum frames. View detailed luxury residential specifications and oceanfront design solutions.",
  keywords: [
    "WinZone luxury villa estate project",
    "oceanfront villa windows Malibu",
    "folding glass walls luxury",
    "custom aluminum frames villa",
    "luxury villa construction",
    "oceanfront property windows",
    "bespoke window solutions",
    "luxury villa design",
    "custom aluminum windows",
    "oceanfront villa contractor",
    "luxury villa renovation",
    "folding glass door systems",
    "custom window manufacturing",
    "luxury residential Malibu",
    "oceanfront property design",
    "bespoke architectural solutions",
    "luxury villa windows",
    "custom aluminum frames",
    "oceanfront villa renovation",
    "luxury property contractor",
    "folding glass wall systems",
    "custom window design",
    "luxury villa construction",
    "oceanfront property windows",
    "bespoke residential solutions",
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
    canonical: "https://winzonsystem.com/project/luxury-villa-estate",
  },
  images: [
    {
      url: "https://winzonsystem.com/img/luxury-villa-estate.webp",
      width: 362,
      height: 266,
      alt: "Luxury Villa Estate - WinZone Oceanfront Folding Glass Walls Project Malibu CA",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-1.webp",
      width: 778,
      height: 541,
      alt: "Luxury Villa Estate - Custom Aluminum Frames Oceanfront Installation",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-2.webp",
      width: 1169,
      height: 553,
      alt: "Luxury Villa Estate - Panoramic Folding Glass Walls Malibu CA",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/project/luxury-villa-estate",
    siteName: "WinZone",
    title:
      "Luxury Villa Estate — WinZone Oceanfront Folding Glass Walls & Custom Aluminum Frames | Malibu CA",
    description:
      "Complete case study of WinZone's oceanfront luxury villa estate project in Malibu, CA featuring bespoke window and door solutions with panoramic folding glass walls and custom aluminum frames.",
    images: [
      {
        url: "https://winzonsystem.com/img/luxury-villa-estate.webp",
        width: 362,
        height: 266,
        alt: "Luxury Villa Estate - WinZone Oceanfront Folding Glass Walls Project Malibu CA",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title:
      "WinZone | Luxury Villa Estate - Oceanfront Folding Glass Walls Project Malibu CA",
    description:
      "Oceanfront luxury villa featuring bespoke WinZone solutions with panoramic folding glass walls and custom aluminum frames in Malibu, CA.",
    images: ["https://winzonsystem.com/img/luxury-villa-estate.webp"],
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
      "@id": "https://winzonsystem.com/project/luxury-villa-estate#webpage",
      url: "https://winzonsystem.com/project/luxury-villa-estate",
      name: "Luxury Villa Estate — WinZone Oceanfront Folding Glass Walls & Custom Aluminum Frames | Malibu CA",
      description:
        "Complete case study of WinZone's oceanfront luxury villa estate project in Malibu, CA featuring bespoke window and door solutions with panoramic folding glass walls and custom aluminum frames.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/img/luxury-villa-estate.webp",
        width: 362,
        height: 266,
        caption:
          "Luxury Villa Estate - WinZone Oceanfront Folding Glass Walls Project Malibu CA",
      },
      datePublished: "2023-11-20T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id":
          "https://winzonsystem.com/project/luxury-villa-estate#breadcrumb",
      },
      mainEntity: {
        "@id": "https://winzonsystem.com/project/luxury-villa-estate#project",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/project/luxury-villa-estate#breadcrumb",
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
          name: "Luxury Villa Estate",
          item: "https://winzonsystem.com/project/luxury-villa-estate",
        },
      ],
    },

    {
      "@type": "CreativeWork",
      "@id": "https://winzonsystem.com/project/luxury-villa-estate#project",
      name: "Luxury Villa Estate - Oceanfront Folding Glass Walls & Custom Aluminum Frames Project",
      description:
        "Bespoke window and door solutions for an oceanfront luxury villa featuring panoramic folding glass walls and custom aluminum frames. This Malibu, CA project showcases WinZone's expertise in luxury residential construction and custom architectural solutions for oceanfront properties.",
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/luxury-villa-estate.webp",
          width: 362,
          height: 266,
          caption:
            "Luxury Villa Estate - WinZone Oceanfront Folding Glass Walls Project Malibu CA",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-1.webp",
          width: 778,
          height: 541,
          caption:
            "Luxury Villa Estate - Custom Aluminum Frames Oceanfront Installation",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-2.webp",
          width: 1169,
          height: 553,
          caption:
            "Luxury Villa Estate - Panoramic Folding Glass Walls Malibu CA",
        },
      ],
      author: { "@id": "https://winzonsystem.com/#organization" },
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      datePublished: "2023-11-20T00:00:00+00:00",
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
          name: "Luxury Villa",
          description: "High-end luxury villa construction and design services",
        },
        {
          "@type": "Thing",
          name: "Oceanfront Property",
          description: "Oceanfront property design and construction solutions",
        },
        {
          "@type": "Thing",
          name: "Custom Aluminum Frames",
          description:
            "Custom-designed aluminum frames for luxury residential applications",
        },
        {
          "@type": "Thing",
          name: "Folding Glass Walls",
          description:
            "Panoramic folding glass wall systems for luxury properties",
        },
        {
          "@type": "Thing",
          name: "Bespoke Solutions",
          description:
            "Custom architectural solutions for luxury residential properties",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Luxury Villa Estate",
          description:
            "Premium luxury villa estate development and construction",
        },
        {
          "@type": "Thing",
          name: "Oceanfront Living",
          description: "Oceanfront luxury living and property development",
        },
        {
          "@type": "Thing",
          name: "Custom Window Design",
          description:
            "Bespoke custom window design and manufacturing services",
        },
        {
          "@type": "Thing",
          name: "Folding Glass Systems",
          description:
            "Advanced folding glass wall systems for luxury properties",
        },
        {
          "@type": "Thing",
          name: "Malibu Real Estate",
          description: "Luxury real estate development in Malibu, California",
        },
      ],
      keywords: [
        "luxury villa estate Malibu CA",
        "oceanfront folding glass walls",
        "custom aluminum frames",
        "bespoke window solutions",
        "luxury villa construction",
        "oceanfront property design",
        "folding glass door systems",
        "custom window manufacturing",
        "luxury residential Malibu",
        "oceanfront villa renovation",
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/project/luxury-villa-estate#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of project is the Luxury Villa Estate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Luxury Villa Estate is a bespoke oceanfront property project featuring custom window and door solutions with panoramic folding glass walls and custom aluminum frames. This Malibu, CA project showcases WinZone's expertise in luxury residential construction and custom architectural solutions for oceanfront properties.",
          },
        },
        {
          "@type": "Question",
          name: "Where is this project located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is located in Malibu, California, specifically designed for an oceanfront luxury villa estate. The location provides an ideal setting for showcasing panoramic folding glass walls and custom aluminum solutions that maximize ocean views and luxury living experiences.",
          },
        },
        {
          "@type": "Question",
          name: "What products were used in this project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project utilized WinZone's bespoke window and door solutions including panoramic folding glass walls and custom aluminum frames specifically engineered for oceanfront luxury properties. These custom products feature advanced weather resistance, panoramic views, custom design elements, and luxury finishes designed for the ultimate oceanfront living experience.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key features of this installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key features include panoramic folding glass walls providing unobstructed ocean views, custom aluminum frames designed for oceanfront conditions, bespoke window and door solutions tailored to the luxury villa's design, weather-resistant construction for Malibu's coastal climate, and luxury finishes that complement the oceanfront property's aesthetic.",
          },
        },
        {
          "@type": "Question",
          name: "How long did the project take to complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Luxury Villa Estate project was completed over 18 months, including detailed custom design and manufacturing, bespoke aluminum frame creation, and careful installation to meet luxury residential standards and oceanfront property requirements in Malibu's coastal environment.",
          },
        },
        {
          "@type": "Question",
          name: "What makes this project unique?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is unique due to its combination of oceanfront location with panoramic folding glass walls, custom aluminum frames designed specifically for the luxury villa, bespoke architectural solutions, and Malibu's prestigious coastal setting. The project demonstrates WinZone's expertise in delivering custom luxury solutions that maximize ocean views while providing superior performance and aesthetic appeal.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/project/luxury-villa-estate#service",
      name: "Luxury Villa & Oceanfront Property Solutions",
      description:
        "Professional construction services for luxury villa estates and oceanfront properties featuring bespoke window and door solutions, panoramic folding glass walls, and custom aluminum frames in Malibu and beyond",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Luxury Villa Construction",
      areaServed: "California, USA",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Luxury Villa Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bespoke Window Solutions",
              description:
                "Custom-designed window and door solutions for luxury villa estates with personalized design and premium materials",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Panoramic Folding Glass Walls",
              description:
                "Advanced folding glass wall systems providing unobstructed views and seamless indoor-outdoor living experiences",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Aluminum Frames",
              description:
                "Bespoke custom aluminum frames designed specifically for luxury properties and oceanfront applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Oceanfront Property Solutions",
              description:
                "Specialized architectural solutions for oceanfront properties with weather resistance and luxury finishes",
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
        title="Luxury Villa Estate"
        description="Bespoke window and door solutions for an oceanfront luxury villa featuring panoramic folding glass walls and custom aluminum frames."
        productDescription="Panoramic folding glass walls & custom aluminum frames for luxury villa estate in Mumbai."
        imgSrc="/img/luxury-villa-estate-hero.webp"
        ProjectDetailInfo={[
          {
            text: "Client",
            value: "Luxury Estate Developer",
          },
          {
            text: "Location",
            value: "Malibu, CA",
          },
          {
            text: "Category",
            value: "Luxury Villa",
          },
          {
            text: "Time",
            value: "9 Months",
          },
          {
            text: "Status",
            value: "Completed",
          },
        ]}
        projectOverviewParagraph={[
          "We are leading manufacturers and suppliers of high quality bespoke window and door solutions, specializing in luxury villa estates and oceanfront properties with custom architectural solutions and premium materials.",
          "This luxury villa estate project showcases our expertise in delivering bespoke architectural solutions for the most prestigious properties. The installation features panoramic folding glass walls that provide unobstructed ocean views, while custom aluminum frames ensure optimal performance in Malibu's coastal environment.",
          "The project demonstrates our commitment to combining luxury design with functional excellence, ensuring that residents enjoy both breathtaking ocean views and superior performance in this exceptional oceanfront luxury villa estate.",
        ]}
        imageSrc2="/img/luxury-villa-estate-featured.webp"
        projectOverviewParagraph2={[
          "Our custom aluminum frames feature advanced weather-resistant construction specifically designed for oceanfront conditions, ensuring long-lasting performance in Malibu's coastal climate while providing the structural support for panoramic folding glass walls.",
          "The panoramic folding glass walls provide seamless indoor-outdoor living experiences, allowing residents to fully enjoy the oceanfront setting while maintaining comfort and luxury throughout the luxury villa estate.",
          "This project represents the perfect blend of luxury residential design with oceanfront living, showcasing how bespoke aluminum solutions can enhance both the aesthetic appeal and functional performance of the most prestigious luxury properties.",
        ]}
        keyFeature={[
          "Panoramic folding glass walls with unobstructed ocean views",
          "Custom aluminum frames designed for oceanfront conditions",
          "Bespoke window and door solutions tailored to luxury villa design",
          "Weather resistant construction for Malibu coastal climate",
          "Luxury finishes complementing oceanfront property aesthetic",
          "Advanced engineering for luxury residential applications",
        ]}
      />
      <ContactUs />
    </div>
  );
};

export default page;
