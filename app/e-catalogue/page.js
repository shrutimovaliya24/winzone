import CommonHeroSection from "@/components/Common/CommonHeroSection";
import ECatagueProduct from "@/components/ECatalogue/ECatalogueProduct/ECatagueProduct";
import React from "react";

export const metadata = {
  title:
    "WinZone E-Catalogue — Premium Aluminium Windows, Doors & Facades | Digital Product Collection",
  description:
    "Explore WinZone's comprehensive digital e-catalogue featuring premium aluminium windows, doors, sliding systems, and facades. Download our complete product collection with detailed specifications, technical drawings, and design options for residential and commercial projects.",
  keywords: [
    "WinZone e-catalogue",
    "WinZone digital catalogue",
    "aluminium windows catalogue",
    "aluminum windows catalog",
    "doors catalogue",
    "sliding systems catalogue",
    "facade catalogue",
    "architectural product catalogue",
    "window and door designs",
    "aluminium facade solutions",
    "commercial windows catalogue",
    "residential windows catalog",
    "energy efficient windows catalogue",
    "premium windows collection",
    "aluminium door systems",
    "glass facade systems",
    "curtain wall catalogue",
    "building envelope solutions",
    "architectural glazing",
    "modern window designs",
    "sustainable building materials",
    "construction product catalogue",
    "window installation guide",
    "door specifications",
    "facade engineering solutions",
    "aluminium extrusion catalogue",
    "thermal break windows",
    "sound insulation windows",
    "security door systems",
    "smart window solutions",
  ],
  authors: [
    { name: "WinZone Product Team", url: "https://winzonsystem.com" },
    { name: "WinZone Design Team", url: "https://winzonsystem.com" },
    { name: "WinZone Technical Team", url: "https://winzonsystem.com" },
  ],
  creator: "WinZone Product Team",
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
    canonical: "https://winzonsystem.com/e-catalogue",
  },
  images: [
    {
      url: "https://winzonsystem.com/img/e-catalogue-product-1.webp",
      width: 1200,
      height: 630,
      alt: "WinZone E-Catalogue - Premium Aluminium Windows and Doors Collection",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/e-catalogue-product-2.webp",
      width: 1200,
      height: 630,
      alt: "WinZone Digital Catalogue - Sliding Systems and Facade Solutions",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/e-catalogue-product-3.webp",
      width: 1200,
      height: 630,
      alt: "WinZone Product Collection - Energy Efficient Windows and Doors",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/e-catalogue-product-4.webp",
      width: 1200,
      height: 630,
      alt: "WinZone Architectural Solutions - Commercial and Residential Windows",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/e-catalogue-product-5.webp",
      width: 1200,
      height: 630,
      alt: "WinZone Facade Systems - Curtain Wall and Glass Facade Solutions",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/e-catalogue-product-6.webp",
      width: 1200,
      height: 630,
      alt: "WinZone Premium Collection - Modern Window and Door Designs",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/e-catalogue",
    siteName: "WinZone",
    title:
      "WinZone E-Catalogue — Premium Aluminium Windows, Doors & Facades | Digital Product Collection",
    description:
      "Explore WinZone's comprehensive digital e-catalogue featuring premium aluminium windows, doors, sliding systems, and facades. Download our complete product collection with detailed specifications and design options.",
    images: [
      {
        url: "https://winzonsystem.com/img/e-catalogue-product-1.webp",
        width: 1200,
        height: 630,
        alt: "WinZone E-Catalogue - Premium Aluminium Windows and Doors Collection",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title: "WinZone E-Catalogue | Digital Windows & Doors Collection",
    description:
      "Explore WinZone's comprehensive digital e-catalogue featuring premium aluminium windows, doors, sliding systems, and facades for residential and commercial projects.",
    images: ["https://winzonsystem.com/img/e-catalogue-product-1.webp"],
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
    title: "WinZone E-Catalogue",
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
      foundingDate: "2016-12-01",

      industry: "Architecture & Construction",
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
        {
          "@type": "ContactPoint",
          contactType: "Sales",
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
        "https://www.linkedin.com/company/winzone",
        "https://twitter.com/winzone",
        "https://www.facebook.com/winzone",
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
      "@id": "https://winzonsystem.com/e-catalogue#webpage",
      url: "https://winzonsystem.com/e-catalogue",
      name: "WinZone E-Catalogue — Premium Aluminium Windows, Doors & Facades | Digital Product Collection",
      description:
        "Explore WinZone's comprehensive digital e-catalogue featuring premium aluminium windows, doors, sliding systems, and facades. Download our complete product collection with detailed specifications, technical drawings, and design options for residential and commercial projects.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/img/e-catalogue-product-1.webp",
        width: 1200,
        height: 630,
        caption:
          "WinZone E-Catalogue - Premium Aluminium Windows and Doors Collection",
      },
      datePublished: "2016-12-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id": "https://winzonsystem.com/e-catalogue#breadcrumb",
      },
      mainEntity: {
        "@id": "https://winzonsystem.com/e-catalogue#catalog",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/e-catalogue#breadcrumb",
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
          name: "E-Catalogue",
          item: "https://winzonsystem.com/e-catalogue",
        },
      ],
    },

    {
      "@type": "CollectionPage",
      "@id": "https://winzonsystem.com/e-catalogue#catalog",
      url: "https://winzonsystem.com/e-catalogue",
      name: "WinZone Digital E-Catalogue",
      description:
        "Comprehensive digital product catalogue featuring premium aluminium windows, doors, sliding systems, and facades with detailed specifications, technical drawings, and design options for residential and commercial projects.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      creator: { "@id": "https://winzonsystem.com/#organization" },
      inLanguage: "en",
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/e-catalogue-product-1.webp",
          width: 1200,
          height: 630,
          caption:
            "WinZone E-Catalogue - Premium Aluminium Windows and Doors Collection",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/e-catalogue-product-2.webp",
          width: 1200,
          height: 630,
          caption:
            "WinZone Digital Catalogue - Sliding Systems and Facade Solutions",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/e-catalogue-product-3.webp",
          width: 1200,
          height: 630,
          caption:
            "WinZone Product Collection - Energy Efficient Windows and Doors",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/e-catalogue-product-4.webp",
          width: 1200,
          height: 630,
          caption:
            "WinZone Architectural Solutions - Commercial and Residential Windows",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/e-catalogue-product-5.webp",
          width: 1200,
          height: 630,
          caption:
            "WinZone Facade Systems - Curtain Wall and Glass Facade Solutions",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/e-catalogue-product-6.webp",
          width: 1200,
          height: 630,
          caption:
            "WinZone Premium Collection - Modern Window and Door Designs",
        },
      ],
      mainEntity: {
        "@type": "ItemList",
        name: "WinZone Product Collection",
        description:
          "Complete collection of aluminium windows, doors, sliding systems, and facades",
        numberOfItems: 6,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Product",
              name: "Premium Aluminium Windows",
              description:
                "Energy-efficient aluminium windows with thermal break technology and modern design",
              image: "https://winzonsystem.com/img/e-catalogue-product-1.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              manufacturer: {
                "@id": "https://winzonsystem.com/#organization",
              },
              category: "Windows",
              material: "Aluminium",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Energy Efficiency",
                  value: "High",
                },
                {
                  "@type": "PropertyValue",
                  name: "Thermal Break",
                  value: "Yes",
                },
                {
                  "@type": "PropertyValue",
                  name: "Sound Insulation",
                  value: "Excellent",
                },
              ],
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Product",
              name: "Sliding Door Systems",
              description:
                "Premium sliding door systems with smooth operation and weather resistance",
              image: "https://winzonsystem.com/img/e-catalogue-product-2.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              manufacturer: {
                "@id": "https://winzonsystem.com/#organization",
              },
              category: "Doors",
              material: "Aluminium",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "120",
                bestRating: "5",
                worstRating: "1",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Operation Type",
                  value: "Sliding",
                },
                {
                  "@type": "PropertyValue",
                  name: "Weather Resistance",
                  value: "Excellent",
                },
                {
                  "@type": "PropertyValue",
                  name: "Security",
                  value: "High",
                },
              ],
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Product",
              name: "Energy Efficient Windows",
              description:
                "Advanced energy-efficient windows with low-E coatings and thermal insulation",
              image: "https://winzonsystem.com/img/e-catalogue-product-3.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              manufacturer: {
                "@id": "https://winzonsystem.com/#organization",
              },
              category: "Windows",
              material: "Aluminium",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "180",
                bestRating: "5",
                worstRating: "1",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "U-Factor",
                  value: "Low",
                },
                {
                  "@type": "PropertyValue",
                  name: "SHGC",
                  value: "Optimized",
                },
                {
                  "@type": "PropertyValue",
                  name: "Low-E Coating",
                  value: "Yes",
                },
              ],
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "Product",
              name: "Commercial Windows",
              description:
                "Heavy-duty commercial windows designed for office buildings and commercial spaces",
              image: "https://winzonsystem.com/img/e-catalogue-product-4.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              manufacturer: {
                "@id": "https://winzonsystem.com/#organization",
              },
              category: "Windows",
              material: "Aluminium",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "95",
                bestRating: "5",
                worstRating: "1",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Application",
                  value: "Commercial",
                },
                {
                  "@type": "PropertyValue",
                  name: "Durability",
                  value: "High",
                },
                {
                  "@type": "PropertyValue",
                  name: "Maintenance",
                  value: "Low",
                },
              ],
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "Product",
              name: "Glass Facade Systems",
              description:
                "Modern glass facade systems with curtain wall technology and structural glazing",
              image: "https://winzonsystem.com/img/e-catalogue-product-5.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              manufacturer: {
                "@id": "https://winzonsystem.com/#organization",
              },
              category: "Facades",
              material: "Aluminium & Glass",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "110",
                bestRating: "5",
                worstRating: "1",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "System Type",
                  value: "Curtain Wall",
                },
                {
                  "@type": "PropertyValue",
                  name: "Structural Glazing",
                  value: "Yes",
                },
                {
                  "@type": "PropertyValue",
                  name: "Wind Load",
                  value: "High",
                },
              ],
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "Product",
              name: "Modern Window Designs",
              description:
                "Contemporary window designs with innovative features and aesthetic appeal",
              image: "https://winzonsystem.com/img/e-catalogue-product-6.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              manufacturer: {
                "@id": "https://winzonsystem.com/#organization",
              },
              category: "Windows",
              material: "Aluminium",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "140",
                bestRating: "5",
                worstRating: "1",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Design Style",
                  value: "Modern",
                },
                {
                  "@type": "PropertyValue",
                  name: "Customization",
                  value: "Available",
                },
                {
                  "@type": "PropertyValue",
                  name: "Aesthetic Appeal",
                  value: "High",
                },
              ],
            },
          },
        ],
      },
      potentialAction: [
        {
          "@type": "ViewAction",
          target: "https://winzonsystem.com/e-catalogue",
        },
        {
          "@type": "DownloadAction",
          target: "https://winzonsystem.com/e-catalogue/download",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/e-catalogue#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What products are included in the WinZone e-catalogue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The WinZone e-catalogue includes our complete range of premium aluminium windows, doors, sliding systems, and facades. This includes energy-efficient windows, commercial doors, curtain wall systems, glass facades, and modern architectural solutions for both residential and commercial projects.",
          },
        },
        {
          "@type": "Question",
          name: "Can I download the e-catalogue for offline viewing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the WinZone e-catalogue is available for download in PDF format. You can access the download link on our e-catalogue page to get the complete product collection with detailed specifications, technical drawings, and design options for your projects.",
          },
        },
        {
          "@type": "Question",
          name: "What technical information is provided in the e-catalogue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our e-catalogue provides comprehensive technical information including product specifications, dimensions, material properties, energy efficiency ratings, thermal performance data, sound insulation values, security features, and installation guidelines for all our aluminium windows, doors, and facade systems.",
          },
        },
        {
          "@type": "Question",
          name: "Are custom designs available for specific project requirements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, WinZone offers custom design solutions for specific project requirements. Our technical team can work with architects and contractors to develop bespoke aluminium windows, doors, and facade systems that meet unique architectural and performance specifications.",
          },
        },
        {
          "@type": "Question",
          name: "How can I request a quote for products in the e-catalogue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can request a quote by contacting our sales team via email (info@winzonsystem.com) or phone (9909992145). Please specify the products you're interested in from the e-catalogue, along with your project requirements and quantities.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/e-catalogue#service",
      name: "Digital Product Catalogue & Technical Support Services",
      description:
        "Comprehensive digital product catalogue services providing detailed specifications, technical drawings, and design support for aluminium windows, doors, and facade systems. Expert consultation and project support for residential and commercial applications.",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Product Information & Support",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Catalogue Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Catalogue Access",
              description:
                "Complete access to digital product catalogue with detailed specifications and technical information",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical Consultation",
              description:
                "Expert technical consultation for product selection and project requirements",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Design Support",
              description:
                "Custom design and engineering support for specific project requirements",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Project Planning",
              description:
                "Comprehensive project planning and specification support for architectural projects",
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
        title="EXPLORE OUR COMPLETE PRODUCT COLLECTION"
        description="Discover our premium range of windows, doors and architectural solutions designed to enhance modern living spaces with superior quality and innovative design."
        extraTitleCss="xl:max-w-[1110px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/career-herosection.webp"
      />
      <ECatagueProduct />
    </div>
  );
};

export default page;
