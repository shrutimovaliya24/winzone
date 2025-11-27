import CommonHeroSection from "@/components/Common/CommonHeroSection";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import ProjectDetail from "@/components/Project/ProjectDetail";
import React from "react";

export const metadata = {
  title:
    "Corporate Headquarters — WinZone Glass Facade & Curtain Wall Project | San Jose CA",
  description:
    "Complete case study of WinZone's 15-story corporate headquarters glass facade project in San Jose, CA featuring energy-efficient curtain wall systems, integrated shading solutions, and modern architectural design. View detailed specifications and installation process.",
  keywords: [
    "WinZone corporate headquarters project",
    "glass facade installation San Jose",
    "curtain wall systems California",
    "energy efficient facade design",
    "corporate building construction",
    "aluminum facade systems",
    "glass curtain wall installation",
    "commercial facade contractor",
    "office building windows",
    "corporate headquarters design",
    "modern office facade",
    "energy efficient office building",
    "commercial window installation",
    "facade engineering services",
    "corporate architecture California",
    "glass facade systems",
    "curtain wall engineering",
    "commercial building facade",
    "office building construction",
    "modern corporate design",
    "facade installation contractor",
    "commercial architectural solutions",
    "energy efficient office design",
    "corporate building windows",
    "glass facade manufacturer",
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
    canonical: "https://winzonsystem.com/project/corporate-headquarters",
  },
  images: [
    {
      url: "https://winzonsystem.com/img/corporate-headquarters.webp",
      width: 362,
      height: 266,
      alt: "Corporate Headquarters - WinZone Glass Facade Project San Jose CA",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-1.webp",
      width: 778,
      height: 541,
      alt: "Corporate Headquarters - Energy Efficient Curtain Wall Systems",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-2.webp",
      width: 1169,
      height: 553,
      alt: "Corporate Headquarters - Integrated Shading Solutions Mumbai",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/project/corporate-headquarters",
    siteName: "WinZone",
    title:
      "Corporate Headquarters — WinZone Glass Facade & Curtain Wall Project | San Jose CA",
    description:
      "Complete case study of WinZone's 15-story corporate headquarters glass facade project in San Jose, CA featuring energy-efficient curtain wall systems and integrated shading solutions.",
    images: [
      {
        url: "https://winzonsystem.com/img/corporate-headquarters.webp",
        width: 362,
        height: 266,
        alt: "Corporate Headquarters - WinZone Glass Facade Project San Jose CA",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title:
      "WinZone | Corporate Headquarters - Glass Facade Project San Jose CA",
    description:
      "15-story corporate headquarters featuring energy-efficient curtain wall systems and integrated shading solutions by WinZone in San Jose, CA.",
    images: ["https://winzonsystem.com/img/corporate-headquarters.webp"],
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
      "@id": "https://winzonsystem.com/project/corporate-headquarters#webpage",
      url: "https://winzonsystem.com/project/corporate-headquarters",
      name: "Corporate Headquarters — WinZone Glass Facade & Curtain Wall Project | San Jose CA",
      description:
        "Complete case study of WinZone's 15-story corporate headquarters glass facade project in San Jose, CA featuring energy-efficient curtain wall systems and integrated shading solutions.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/img/corporate-headquarters.webp",
        width: 362,
        height: 266,
        caption:
          "Corporate Headquarters - WinZone Glass Facade Project San Jose CA",
      },
      datePublished: "2023-03-20T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id":
          "https://winzonsystem.com/project/corporate-headquarters#breadcrumb",
      },
      mainEntity: {
        "@id":
          "https://winzonsystem.com/project/corporate-headquarters#project",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://winzonsystem.com/project/corporate-headquarters#breadcrumb",
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
          name: "Corporate Headquarters",
          item: "https://winzonsystem.com/project/corporate-headquarters",
        },
      ],
    },

    {
      "@type": "CreativeWork",
      "@id": "https://winzonsystem.com/project/corporate-headquarters#project",
      name: "Corporate Headquarters - Glass Facade & Curtain Wall Project",
      description:
        "Modern glass facade installation for a 15-story corporate headquarters building featuring energy-efficient curtain wall systems and integrated shading solutions for optimal thermal performance. This San Jose, CA project showcases WinZone's expertise in commercial architectural solutions.",
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/corporate-headquarters.webp",
          width: 362,
          height: 266,
          caption:
            "Corporate Headquarters - WinZone Glass Facade Project San Jose CA",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-1.webp",
          width: 778,
          height: 541,
          caption:
            "Corporate Headquarters - Energy Efficient Curtain Wall Systems",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-2.webp",
          width: 1169,
          height: 553,
          caption:
            "Corporate Headquarters - Integrated Shading Solutions Mumbai",
        },
      ],
      author: { "@id": "https://winzonsystem.com/#organization" },
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      datePublished: "2023-03-20T00:00:00+00:00",
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
          name: "Commercial Construction",
          description:
            "Corporate headquarters building construction and development",
        },
        {
          "@type": "Thing",
          name: "Glass Facades",
          description: "Modern glass facade systems for commercial buildings",
        },
        {
          "@type": "Thing",
          name: "Curtain Wall Systems",
          description:
            "Energy-efficient curtain wall systems for office buildings",
        },
        {
          "@type": "Thing",
          name: "Integrated Shading",
          description: "Advanced shading solutions for thermal performance",
        },
        {
          "@type": "Thing",
          name: "Office Architecture",
          description:
            "Modern corporate office building design and construction",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Corporate Headquarters",
          description:
            "Executive office building and corporate facility design",
        },
        {
          "@type": "Thing",
          name: "Glass Facade Installation",
          description: "Professional glass facade installation services",
        },
        {
          "@type": "Thing",
          name: "Curtain Wall Engineering",
          description: "Advanced curtain wall system engineering and design",
        },
        {
          "@type": "Thing",
          name: "Commercial Architecture",
          description:
            "Corporate and commercial building architectural solutions",
        },
        {
          "@type": "Thing",
          name: "Energy Efficient Design",
          description: "Sustainable and energy-efficient building design",
        },
      ],
      keywords: [
        "glass facade San Jose",
        "corporate headquarters",
        "curtain wall systems",
        "commercial construction",
        "office building facade",
        "energy efficient design",
        "integrated shading",
        "commercial architecture",
        "glass facade installation",
        "corporate building design",
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/project/corporate-headquarters#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of project is the Corporate Headquarters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Corporate Headquarters is a 15-story commercial building project featuring modern glass facade installation with energy-efficient curtain wall systems and integrated shading solutions by WinZone. This San Jose, CA project showcases advanced commercial architectural solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Where is this project located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is located in Mumbai, Maharashtra, India, specifically designed for a corporate headquarters building. The location provides an ideal setting for showcasing energy-efficient glass facade systems and modern commercial architectural solutions.",
          },
        },
        {
          "@type": "Question",
          name: "What products were used in this project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project utilized WinZone's energy-efficient curtain wall systems, integrated shading solutions, and modern glass facade components. These products feature advanced thermal performance, weather resistance, and architectural design elements specifically engineered for commercial applications.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key features of this installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key features include energy-efficient curtain wall systems, integrated shading solutions for optimal thermal performance, modern glass facade design, weather-resistant construction, and advanced engineering for a 15-story corporate headquarters building.",
          },
        },
        {
          "@type": "Question",
          name: "How long did the project take to complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Corporate Headquarters project was completed over 12 months, including detailed engineering, manufacturing, and installation phases. The timeline ensured precision in every aspect of the glass facade and curtain wall systems installation.",
          },
        },
        {
          "@type": "Question",
          name: "What makes this project unique?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is unique due to its combination of 15-story height, energy-efficient curtain wall systems, integrated shading solutions, and modern glass facade design. The project demonstrates WinZone's expertise in delivering complex commercial architectural solutions with optimal performance and aesthetic appeal.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/project/corporate-headquarters#service",
      name: "Commercial Glass Facade & Curtain Wall Installation",
      description:
        "Professional installation services for commercial glass facades and curtain wall systems, specializing in corporate headquarters, office buildings, and modern commercial architectural solutions in Mumbai",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Commercial Installation",
      areaServed: "Mumbai, Maharashtra, India",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Commercial Installation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Glass Facade Installation",
              description:
                "Professional installation of modern glass facade systems for commercial buildings with energy efficiency and architectural appeal",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Curtain Wall Systems",
              description:
                "Installation of energy-efficient curtain wall systems for office buildings and corporate headquarters",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Integrated Shading Solutions",
              description:
                "Advanced shading system installation for optimal thermal performance and energy efficiency",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Project Consultation",
              description:
                "Expert consultation for commercial facade projects including design, engineering, and installation planning",
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
        title="Corporate Headquarters"
        description="Modern glass facade installation for a 15-story corporate headquarters building, featuring energy-efficient curtain wall systems and integrated shading solutions for optimal thermal performance."
        productDescription="Energy-efficient curtain wall & glass facade systems for 15-story corporate headquarters in Mumbai."
        imgSrc="/img/corporate-headquarters-hero.webp"
        ProjectDetailInfo={[
          {
            text: "Client",
            value: "Fortune 500 Corporation",
          },
          {
            text: "Location",
            value: "San Jose, CA",
          },
          {
            text: "Category",
            value: "Commercial Construction",
          },
          {
            text: "Time",
            value: "6 Months",
          },
          {
            text: "Status",
            value: "Completed",
          },
        ]}
        projectOverviewParagraph={[
          "We are leading manufacturers and suppliers of high quality glass facade and curtain wall systems, specializing in commercial and corporate building applications with advanced engineering solutions.",
          "This corporate headquarters project showcases our expertise in delivering complex commercial architectural solutions. The installation features energy-efficient curtain wall systems that provide excellent thermal performance and weather resistance, while the integrated shading solutions optimize natural light and energy consumption.",
          "The project demonstrates our commitment to combining cutting-edge technology with aesthetic appeal, ensuring that the corporate headquarters achieves both functional performance and modern architectural excellence.",
        ]}
        imageSrc2="/img/corporate-headquarters-featured.webp"
        projectOverviewParagraph2={[
          "Our curtain wall systems feature advanced thermal break technology and weather-resistant construction, ensuring long-lasting performance in Mumbai's diverse climate conditions while providing superior energy efficiency for the 15-story building.",
          "The integrated shading solutions provide optimal thermal performance, reducing energy consumption while maintaining comfortable working environments throughout the corporate headquarters building.",
          "This project represents the perfect blend of commercial building design with sustainable practices, showcasing how modern glass facade solutions can enhance both the aesthetic and functional aspects of corporate architecture.",
        ]}
        keyFeature={[
          "Energy efficient curtain wall systems with thermal break technology",
          "Integrated shading solutions for optimal thermal performance",
          "Modern glass facade design for 15-story corporate building",
          "Weather resistant construction for Mumbai climate",
          "Advanced engineering for complex commercial applications",
          "Sustainable and energy-efficient building solutions",
        ]}
      />
      <ContactUs />
    </div>
  );
};

export default page;
