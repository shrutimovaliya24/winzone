import CommonHeroSection from "@/components/Common/CommonHeroSection";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import ProjectDetail from "@/components/Project/ProjectDetail";
import React from "react";

export const metadata = {
  title:
    "Medical Center — WinZone Healthcare Windows & Security Systems | Stanford CA",
  description:
    "Complete case study of WinZone's medical center project in Stanford, CA featuring specialized healthcare-grade aluminum windows, enhanced security systems, and patient safety solutions. View detailed healthcare construction specifications and safety features.",
  keywords: [
    "WinZone medical center project",
    "healthcare windows Stanford CA",
    "medical center construction",
    "healthcare grade aluminum windows",
    "medical facility windows",
    "hospital window installation",
    "healthcare security systems",
    "medical center design",
    "healthcare construction contractor",
    "hospital window replacement",
    "medical facility renovation",
    "healthcare architectural solutions",
    "patient safety windows",
    "medical center windows",
    "healthcare building construction",
    "hospital construction Stanford",
    "medical facility contractor",
    "healthcare window systems",
    "medical center renovation",
    "hospital window contractor",
    "healthcare design solutions",
    "medical facility security",
    "healthcare building windows",
    "hospital window systems",
    "medical center contractor",
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
    canonical: "https://winzonsystem.com/project/medical-center",
  },
  images: [
    {
      url: "https://winzonsystem.com/img/medical-center.webp",
      width: 362,
      height: 266,
      alt: "Medical Center - WinZone Healthcare Windows Project Stanford CA",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-1.webp",
      width: 778,
      height: 541,
      alt: "Medical Center - Healthcare Grade Aluminum Windows Installation",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/residential-construction-2.webp",
      width: 1169,
      height: 553,
      alt: "Medical Center - Enhanced Security Systems Stanford CA",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/project/medical-center",
    siteName: "WinZone",
    title:
      "Medical Center — WinZone Healthcare Windows & Security Systems | Stanford CA",
    description:
      "Complete case study of WinZone's medical center project in Stanford, CA featuring specialized healthcare-grade aluminum windows and enhanced security systems for patient safety.",
    images: [
      {
        url: "https://winzonsystem.com/img/medical-center.webp",
        width: 362,
        height: 266,
        alt: "Medical Center - WinZone Healthcare Windows Project Stanford CA",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title: "WinZone | Medical Center - Healthcare Windows Project Stanford CA",
    description:
      "Medical center featuring specialized healthcare-grade aluminum windows and enhanced security systems by WinZone in Stanford, CA for patient safety.",
    images: ["https://winzonsystem.com/img/medical-center.webp"],
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
      "@id": "https://winzonsystem.com/project/medical-center#webpage",
      url: "https://winzonsystem.com/project/medical-center",
      name: "Medical Center — WinZone Healthcare Windows & Security Systems | Stanford CA",
      description:
        "Complete case study of WinZone's medical center project in Stanford, CA featuring specialized healthcare-grade aluminum windows and enhanced security systems for patient safety.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/img/medical-center.webp",
        width: 362,
        height: 266,
        caption:
          "Medical Center - WinZone Healthcare Windows Project Stanford CA",
      },
      datePublished: "2023-07-15T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id": "https://winzonsystem.com/project/medical-center#breadcrumb",
      },
      mainEntity: {
        "@id": "https://winzonsystem.com/project/medical-center#project",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/project/medical-center#breadcrumb",
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
          name: "Medical Center",
          item: "https://winzonsystem.com/project/medical-center",
        },
      ],
    },

    {
      "@type": "CreativeWork",
      "@id": "https://winzonsystem.com/project/medical-center#project",
      name: "Medical Center - Healthcare Windows & Security Systems Project",
      description:
        "Comprehensive window and door installation for a new medical center featuring specialized healthcare-grade materials and enhanced security systems for patient safety. This Stanford, CA project showcases WinZone's expertise in healthcare construction and medical facility solutions.",
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/medical-center.webp",
          width: 362,
          height: 266,
          caption:
            "Medical Center - WinZone Healthcare Windows Project Stanford CA",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-1.webp",
          width: 778,
          height: 541,
          caption:
            "Medical Center - Healthcare Grade Aluminum Windows Installation",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/residential-construction-2.webp",
          width: 1169,
          height: 553,
          caption: "Medical Center - Enhanced Security Systems Stanford CA",
        },
      ],
      author: { "@id": "https://winzonsystem.com/#organization" },
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      datePublished: "2023-07-15T00:00:00+00:00",
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
          name: "Healthcare Construction",
          description:
            "Medical center and healthcare facility construction services",
        },
        {
          "@type": "Thing",
          name: "Medical Center",
          description: "Comprehensive medical center design and construction",
        },
        {
          "@type": "Thing",
          name: "Security Systems",
          description: "Enhanced security systems for healthcare facilities",
        },
        {
          "@type": "Thing",
          name: "Patient Safety",
          description:
            "Patient safety solutions and healthcare-grade materials",
        },
        {
          "@type": "Thing",
          name: "Healthcare Architecture",
          description:
            "Specialized healthcare architectural design and construction",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Medical Center",
          description: "Comprehensive medical center construction and design",
        },
        {
          "@type": "Thing",
          name: "Healthcare Windows",
          description: "Specialized healthcare-grade window systems",
        },
        {
          "@type": "Thing",
          name: "Patient Safety",
          description: "Patient safety solutions and security systems",
        },
        {
          "@type": "Thing",
          name: "Healthcare Construction",
          description: "Professional healthcare facility construction services",
        },
        {
          "@type": "Thing",
          name: "Medical Facility",
          description: "Medical facility design and construction solutions",
        },
      ],
      keywords: [
        "medical center Stanford CA",
        "healthcare windows",
        "medical facility construction",
        "healthcare security systems",
        "patient safety windows",
        "healthcare grade materials",
        "medical center design",
        "hospital construction",
        "healthcare architectural solutions",
        "medical facility contractor",
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/project/medical-center#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of project is the Medical Center?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Medical Center is a comprehensive healthcare construction project featuring specialized healthcare-grade aluminum windows and enhanced security systems for patient safety. This Stanford, CA project showcases WinZone's expertise in medical facility construction and healthcare architectural solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Where is this project located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is located in Stanford, California, specifically designed for a new medical center facility. The location provides an ideal setting for showcasing healthcare-grade window systems and enhanced security solutions for patient safety and medical facility operations.",
          },
        },
        {
          "@type": "Question",
          name: "What products were used in this project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project utilized WinZone's specialized healthcare-grade aluminum windows and enhanced security systems designed specifically for medical facilities. These products feature healthcare-grade materials, patient safety features, enhanced security capabilities, and compliance with medical facility standards and regulations.",
          },
        },
        {
          "@type": "Question",
          name: "What are the key features of this installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key features include specialized healthcare-grade aluminum windows, enhanced security systems for patient safety, healthcare-compliant materials and construction, sound insulation for patient privacy, weather-resistant construction for Stanford's climate, and advanced safety features designed specifically for medical facility applications.",
          },
        },
        {
          "@type": "Question",
          name: "How long did the project take to complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Medical Center project was completed over 14 months, including detailed healthcare compliance planning, specialized material sourcing, and careful installation to meet medical facility standards and patient safety requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What makes this project unique?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This project is unique due to its focus on healthcare-specific requirements, patient safety considerations, enhanced security systems, and compliance with medical facility standards. The project demonstrates WinZone's expertise in delivering solutions that meet the specialized needs of healthcare construction while ensuring patient safety and facility security.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/project/medical-center#service",
      name: "Healthcare Construction & Medical Facility Solutions",
      description:
        "Professional construction services for medical centers and healthcare facilities featuring specialized healthcare-grade aluminum windows, enhanced security systems, and patient safety solutions in California and beyond",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Healthcare Construction",
      areaServed: "California, USA",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Healthcare Construction Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Healthcare-Grade Windows",
              description:
                "Specialized healthcare-grade aluminum windows designed for medical facilities with patient safety and compliance features",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enhanced Security Systems",
              description:
                "Advanced security systems for healthcare facilities ensuring patient safety and facility protection",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Medical Center Construction",
              description:
                "Comprehensive medical center construction services including design, planning, and implementation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Healthcare Compliance Solutions",
              description:
                "Healthcare facility compliance solutions ensuring adherence to medical facility standards and regulations",
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
        title="Medical Center"
        description="Comprehensive window and door installation for a new medical center, featuring specialized healthcare-grade materials and enhanced security systems for patient safety."
        productDescription="Healthcare-grade aluminum windows & security systems for medical center in Mumbai."
        imgSrc="/img/medical-center-hero.webp"
        ProjectDetailInfo={[
          {
            text: "Client",
            value: "Stanford Healthcare Group",
          },
          {
            text: "Location",
            value: "Stanford, CA",
          },
          {
            text: "Category",
            value: "Healthcare Construction",
          },
          {
            text: "Time",
            value: "7 Months",
          },
          {
            text: "Status",
            value: "Completed",
          },
        ]}
        projectOverviewParagraph={[
          "We are leading manufacturers and suppliers of high quality healthcare-grade aluminum windows and security systems, specializing in medical facility construction and healthcare architectural solutions with patient safety focus.",
          "This medical center project showcases our expertise in delivering specialized healthcare construction solutions. The installation features healthcare-grade aluminum windows designed specifically for medical facilities, while the enhanced security systems ensure patient safety and facility protection in this Stanford-based healthcare facility.",
          "The project demonstrates our commitment to combining healthcare compliance with patient safety, ensuring that medical staff and patients benefit from both functional performance and enhanced security in this state-of-the-art medical center.",
        ]}
        imageSrc2="/img/medical-center-featured.webp"
        projectOverviewParagraph2={[
          "Our healthcare-grade aluminum windows feature specialized materials and construction designed for medical facility applications, ensuring compliance with healthcare standards while providing optimal performance in Stanford's climate conditions.",
          "The enhanced security systems provide comprehensive patient safety solutions, including advanced access control, monitoring capabilities, and emergency response features specifically designed for medical facility operations and patient care requirements.",
          "This project represents the perfect blend of healthcare construction with patient safety focus, showcasing how specialized aluminum solutions can enhance both the functional performance and security aspects of modern medical facilities.",
        ]}
        keyFeature={[
          "Healthcare-grade aluminum windows with medical facility compliance",
          "Enhanced security systems for patient safety and facility protection",
          "Specialized materials designed for healthcare applications",
          "Sound insulation properties for patient privacy and confidentiality",
          "Weather resistant construction for Stanford climate conditions",
          "Advanced safety features meeting medical facility standards",
        ]}
      />
      <ContactUs />
    </div>
  );
};

export default page;
