import CommonHeroSection from "@/components/Common/CommonHeroSection";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import ProjectDetail from "@/components/Project/ProjectDetail";
import React from "react";

export const metadata = {
  title:
    "Boutique Hotel Renovation — WinZone Custom Windows & Historic Preservation | Napa Valley CA",
  description:
    "Complete case study of WinZone's historic boutique hotel renovation project in Napa Valley, CA featuring custom aluminum windows that maintain building character while providing modern energy efficiency and guest comfort. View detailed preservation techniques and modern solutions.",
  keywords: [
    "WinZone boutique hotel renovation",
    "historic hotel preservation Napa Valley",
    "custom aluminum windows hotel",
    "historic building renovation",
    "boutique hotel windows",
    "historic preservation California",
    "custom window design hotel",
    "hotel renovation contractor",
    "historic building windows",
    "boutique hotel design",
    "energy efficient hotel windows",
    "historic hotel restoration",
    "custom aluminum windows",
    "hotel window replacement",
    "historic building contractor",
    "boutique hotel renovation",
    "Napa Valley hotel project",
    "historic preservation windows",
    "hotel architectural solutions",
    "custom window manufacturing",
    "historic hotel design",
    "boutique hotel construction",
    "energy efficient hotel design",
    "historic building restoration",
    "hotel renovation services",
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
    canonical: "https://winzonsystem.com/project/boutique-hotel-renovation",
  },
  images: [
    {
      url: "https://winzonsystem.com/img/boutique-hotel-renovation.webp",
      width: 362,
      height: 266,
      alt: "Boutique Hotel Renovation - WinZone Custom Windows Project Napa Valley CA",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-1.webp",
      width: 778,
      height: 541,
      alt: "Boutique Hotel Renovation - Historic Preservation Custom Windows",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-2.webp",
      width: 1169,
      height: 553,
      alt: "Boutique Hotel Renovation - Energy Efficient Hotel Windows Napa Valley",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/project/boutique-hotel-renovation",
    siteName: "WinZone",
    title:
      "Boutique Hotel Renovation — WinZone Custom Windows & Historic Preservation | Napa Valley CA",
    description:
      "Complete case study of WinZone's historic boutique hotel renovation project in Napa Valley, CA featuring custom aluminum windows that maintain building character while providing modern energy efficiency.",
    images: [
      {
        url: "https://winzonsystem.com/img/boutique-hotel-renovation.webp",
        width: 362,
        height: 266,
        alt: "Boutique Hotel Renovation - WinZone Custom Windows Project Napa Valley CA",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title:
      "WinZone | Boutique Hotel Renovation - Custom Windows Napa Valley CA",
    description:
      "Historic boutique hotel renovation featuring custom WinZone windows that maintain building character while providing modern energy efficiency in Napa Valley, CA.",
    images: ["https://winzonsystem.com/img/boutique-hotel-renovation.webp"],
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
        "https://winzonsystem.com/project/boutique-hotel-renovation#webpage",
      url: "https://winzonsystem.com/project/boutique-hotel-renovation",
      name: "Boutique Hotel Renovation — WinZone Custom Windows & Historic Preservation | Napa Valley CA",
      description:
        "Complete case study of WinZone's historic boutique hotel renovation project in Napa Valley, CA featuring custom aluminum windows that maintain building character while providing modern energy efficiency.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/img/boutique-hotel-renovation.webp",
        width: 362,
        height: 266,
        caption:
          "Boutique Hotel Renovation - WinZone Custom Windows Project Napa Valley CA",
      },
      datePublished: "2023-05-10T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id":
          "https://winzonsystem.com/project/boutique-hotel-renovation#breadcrumb",
      },
      mainEntity: {
        "@id":
          "https://winzonsystem.com/project/boutique-hotel-renovation#project",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://winzonsystem.com/project/boutique-hotel-renovation#breadcrumb",
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
          name: "Boutique Hotel Renovation",
          item: "https://winzonsystem.com/project/boutique-hotel-renovation",
        },
      ],
    },

    {
      "@type": "CreativeWork",
      "@id":
        "https://winzonsystem.com/project/boutique-hotel-renovation#project",
      name: "Boutique Hotel Renovation - Custom Windows & Historic Preservation Project",
      description:
        "Historic boutique hotel renovation featuring custom WinZone windows that maintain the building's character while providing modern energy efficiency and comfort for guests. This Napa Valley, CA project showcases WinZone's expertise in historic preservation and custom architectural solutions.",
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/boutique-hotel-renovation.webp",
          width: 362,
          height: 266,
          caption:
            "Boutique Hotel Renovation - WinZone Custom Windows Project Napa Valley CA",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-1.webp",
          width: 778,
          height: 541,
          caption:
            "Boutique Hotel Renovation - Historic Preservation Custom Windows",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-2.webp",
          width: 1169,
          height: 553,
          caption:
            "Boutique Hotel Renovation - Energy Efficient Hotel Windows Napa Valley",
        },
      ],
      author: { "@id": "https://winzonsystem.com/#organization" },
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      datePublished: "2023-05-10T00:00:00+00:00",
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
          name: "Hotel Renovation",
          description: "Boutique hotel renovation and restoration services",
        },
        {
          "@type": "Thing",
          name: "Historic Preservation",
          description:
            "Historic building preservation and restoration techniques",
        },
        {
          "@type": "Thing",
          name: "Custom Windows",
          description:
            "Custom-designed aluminum windows for historic buildings",
        },
        {
          "@type": "Thing",
          name: "Energy Efficient Design",
          description:
            "Modern energy-efficient solutions for historic buildings",
        },
        {
          "@type": "Thing",
          name: "Hotel Architecture",
          description: "Boutique hotel architectural design and renovation",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Boutique Hotel",
          description: "Luxury boutique hotel design and renovation",
        },
        {
          "@type": "Thing",
          name: "Historic Building",
          description: "Historic building restoration and preservation",
        },
        {
          "@type": "Thing",
          name: "Custom Window Design",
          description: "Custom window design and manufacturing services",
        },
        {
          "@type": "Thing",
          name: "Hotel Renovation",
          description: "Professional hotel renovation and restoration services",
        },
        {
          "@type": "Thing",
          name: "Napa Valley Tourism",
          description: "Tourism and hospitality industry in Napa Valley",
        },
      ],
      keywords: [
        "boutique hotel renovation Napa Valley",
        "historic hotel preservation",
        "custom aluminum windows",
        "hotel window replacement",
        "historic building renovation",
        "boutique hotel design",
        "energy efficient hotel windows",
        "historic preservation California",
        "custom window design",
        "hotel renovation contractor",
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/project/boutique-hotel-renovation#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of project is the Boutique Hotel Renovation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Boutique Hotel Renovation is a historic preservation project featuring custom WinZone windows that maintain the building's original character while providing modern energy efficiency and guest comfort. This Napa Valley, CA project showcases expertise in historic building restoration and custom architectural solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Where is this project located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is located in Napa Valley, California, specifically designed for a historic boutique hotel renovation. The location provides an ideal setting for showcasing custom window solutions that preserve historic character while meeting modern hospitality standards.",
          },
        },
        {
          "@type": "Question",
          name: "What products were used in this project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project utilized WinZone's custom-designed aluminum windows specifically engineered to match the historic building's character while providing modern energy efficiency. These custom windows feature advanced thermal performance, weather resistance, and authentic design elements that complement the boutique hotel's historic architecture.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key features of this installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key features include custom-designed aluminum windows that maintain historic building character, modern energy efficiency for guest comfort, weather-resistant construction for Napa Valley climate, sound insulation for hotel guest privacy, and authentic design elements that preserve the boutique hotel's architectural heritage.",
          },
        },
        {
          "@type": "Question",
          name: "How long did the project take to complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Boutique Hotel Renovation project was completed over 10 months, including detailed historic preservation planning, custom window design and manufacturing, and careful installation to maintain the building's historic character while meeting modern hospitality standards.",
          },
        },
        {
          "@type": "Question",
          name: "What makes this project unique?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is unique due to its combination of historic preservation with modern energy efficiency, custom window design that maintains authentic character, and boutique hotel renovation expertise. The project demonstrates WinZone's ability to deliver solutions that honor historic architecture while meeting contemporary hospitality and sustainability standards.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://winzonsystem.com/project/boutique-hotel-renovation#service",
      name: "Historic Hotel Renovation & Custom Window Solutions",
      description:
        "Professional renovation services for historic hotels and boutique properties featuring custom aluminum windows that maintain building character while providing modern energy efficiency and guest comfort in Napa Valley and beyond",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Historic Renovation",
      areaServed: "California, USA",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Historic Renovation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Window Design",
              description:
                "Custom-designed aluminum windows for historic buildings that maintain authentic character while providing modern performance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Historic Preservation",
              description:
                "Expert historic building preservation and restoration services with attention to architectural authenticity",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hotel Renovation",
              description:
                "Comprehensive boutique hotel renovation services including window replacement and energy efficiency upgrades",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Energy Efficiency Solutions",
              description:
                "Modern energy-efficient solutions for historic buildings that maintain character while improving performance",
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
        title="Boutique Hotel Renovation"
        description="Historic boutique hotel renovation featuring custom WinZone windows that maintain the building's character while providing modern energy efficiency and comfort for guests."
        productDescription="Custom aluminum windows for boutique hotel renovation preserving heritage architecture in Mumbai."
        imgSrc="/img/boutique-hotel-renovation-hero.webp"
        ProjectDetailInfo={[
          {
            text: "Client",
            value: "Historic Hotel Group",
          },
          {
            text: "Location",
            value: "Napa Valley, CA",
          },
          {
            text: "Category",
            value: "Hotel Renovation",
          },
          {
            text: "Time",
            value: "5 Months",
          },
          {
            text: "Status",
            value: "Completed",
          },
        ]}
        projectOverviewParagraph={[
          "We are leading manufacturers and suppliers of high quality custom aluminum windows and doors, specializing in historic building preservation and boutique hotel renovation applications with authentic design solutions.",
          "This boutique hotel renovation project showcases our expertise in delivering custom architectural solutions that preserve historic character. The installation features custom-designed aluminum windows that maintain the building's authentic appearance while providing modern energy efficiency and guest comfort for the Napa Valley hospitality industry.",
          "The project demonstrates our commitment to combining historic preservation with contemporary performance, ensuring that guests enjoy both authentic charm and modern comfort in this carefully restored boutique hotel setting.",
        ]}
        imageSrc2="/img/boutique-hotel-renovation-featured.webp"
        projectOverviewParagraph2={[
          "Our custom aluminum windows feature authentic design elements that match the historic building's character while incorporating advanced thermal break technology and weather-resistant coatings for Napa Valley's climate conditions.",
          "The renovation process involved careful historic preservation techniques, ensuring that every custom window maintains the boutique hotel's architectural integrity while providing modern energy efficiency and sound insulation for guest comfort.",
          "This project represents the perfect blend of historic preservation with modern hospitality standards, showcasing how custom aluminum solutions can enhance both the aesthetic authenticity and functional performance of boutique hotel properties.",
        ]}
        keyFeature={[
          "Custom-designed aluminum windows maintaining historic character",
          "Modern energy efficiency for guest comfort and sustainability",
          "Weather resistant construction for Napa Valley climate",
          "Sound insulation properties for hotel guest privacy",
          "Authentic design elements preserving architectural heritage",
          "Historic preservation techniques with modern performance",
        ]}
      />
      <ContactUs />
    </div>
  );
};

export default page;
