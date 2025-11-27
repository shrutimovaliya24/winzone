import CommonHeroSection from "@/components/Common/CommonHeroSection";
import Advantages from "@/components/Product/Advantages";
import OurWork from "@/components/Product/OurWork/OurWork";
import ProductInformation from "@/components/Product/ProductInformation";
import AllProductsNavigation from "@/components/Product/AllProductsNavigation";
import React from "react";

export const metadata = {
  title: "WinZone Products — Aluminium Windows & Doors, Facades",
  description:
    "Explore WinZone's comprehensive range of aluminium windows, doors, sliding systems, glass facades, and louver designs. Discover our premium architectural solutions with detailed specifications, advantages, and gallery. Request a free consultation for your project.",
  keywords: [
    "aluminium windows",
    "aluminum windows",
    "aluminium doors",
    "sliding systems",
    "glass facades",
    "curtain wall",
    "thermally broken windows",
    "WinZone products",
    "architectural windows",
    "custom doors",
    "louver design",
    "louver windows",
    "aluminum louvers",
    "ventilation systems",
    "window coverings",
    "glass facade gallery",
    "architectural solutions",
    "energy efficient windows",
    "premium aluminium systems",
    "commercial windows",
    "residential windows",
    "industrial windows",
    "modern architecture",
    "contemporary design",
    "building materials",
    "construction systems",
    "facade solutions",
    "window specifications",
    "door systems",
    "sliding doors",
    "folding systems",
    "partition systems",
  ],
  authors: [
    {
      name: "WinZone",
      url: "https://winzonsystem.com",
    },
  ],
  creator: "WinZone",
  publisher: "WinZone",
  category: "Product Catalog",
  classification: "Aluminium Windows & Doors Products",
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
    canonical: "https://winzonsystem.com/product",
    languages: {
      "en-US": "https://winzonsystem.com/product",
      "en-GB": "https://winzonsystem.com/product",
    },
  },
  images: [
    {
      url: "https://winzonsystem.com/img/product-herosection.webp",
      width: 1200,
      height: 630,
      alt: "WinZone product range — aluminium windows, doors, facades",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/product-advantage.webp",
      width: 402,
      height: 408,
      alt: "WinZone product advantages and benefits",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/product-1.webp",
      width: 318,
      height: 362,
      alt: "WinZone glass facade product showcase",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/product-2.webp",
      width: 318,
      height: 362,
      alt: "WinZone aluminium window systems",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/product-3.webp",
      width: 318,
      height: 362,
      alt: "WinZone sliding door systems",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/product-4.webp",
      width: 318,
      height: 362,
      alt: "WinZone architectural facade solutions",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/product-5.webp",
      width: 318,
      height: 362,
      alt: "WinZone premium aluminium products",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/product",
    siteName: "WinZone",
    title: "WinZone Products — Aluminium Windows & Doors, Facades",
    description:
      "Explore WinZone's comprehensive range of aluminium windows, doors, sliding systems, glass facades, and louver designs. Discover our premium architectural solutions with detailed specifications and gallery.",
    images: [
      {
        url: "https://winzonsystem.com/img/product-herosection.webp",
        width: 1200,
        height: 630,
        alt: "WinZone product showcase",
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
    title: "WinZone | Products: Aluminium Windows & Doors",
    description:
      "Browse WinZone product systems — sliding doors, curtain walls, thermally-broken windows, louver designs. Request project consultation.",
    images: ["https://winzonsystem.com/img/product-herosection.webp"],
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
    title: "WinZone Products",
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
        "https://winzonsystem.com/img/product-herosection.webp",
        "https://winzonsystem.com/img/product-advantage.webp",
        "https://winzonsystem.com/img/product-1.webp",
        "https://winzonsystem.com/img/product-2.webp",
        "https://winzonsystem.com/img/product-3.webp",
        "https://winzonsystem.com/img/product-4.webp",
        "https://winzonsystem.com/img/product-5.webp",
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
      knowsAbout: [
        "Aluminium Windows",
        "Aluminium Doors",
        "Glass Facades",
        "Sliding Systems",
        "Louver Design",
        "Architectural Solutions",
        "Energy Efficiency",
        "Ventilation Systems",
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
      "@type": "CollectionPage",
      "@id": "https://winzonsystem.com/product#collection",
      url: "https://winzonsystem.com/product",
      name: "WinZone Products — Aluminium Windows & Doors, Facades",
      description:
        "Explore WinZone's comprehensive range of aluminium windows, doors, sliding systems, glass facades, and louver designs. Discover our premium architectural solutions with detailed specifications, advantages, and gallery.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": "https://winzonsystem.com/product#primaryimage",
        url: "https://winzonsystem.com/img/product-herosection.webp",
        contentUrl: "https://winzonsystem.com/img/product-herosection.webp",
        width: 1200,
        height: 630,
        caption:
          "WinZone product hero image showcasing comprehensive product range",
      },
      datePublished: "2016-12-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: { "@id": "https://winzonsystem.com/product#breadcrumb" },
      significantLink: [
        "https://winzonsystem.com/project",
        "https://winzonsystem.com/contact-us",
        "https://winzonsystem.com/about-us",
        "https://winzonsystem.com/blog",
        "https://winzonsystem.com/career",
        "https://winzonsystem.com/e-catalogue",
      ],
      mainEntity: {
        "@id": "https://winzonsystem.com/product#productcatalog",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://winzonsystem.com/product#productcatalog",
      name: "WinZone Product Catalog",
      description:
        "Comprehensive collection of WinZone's aluminium architectural solutions",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "Product",
          name: "Aluminium Windows",
          description:
            "High-quality aluminium windows with excellent thermal and sound insulation properties",
          image: "https://winzonsystem.com/img/product-2.webp",
          brand: { "@type": "Brand", name: "WinZone" },
          category: "Windows",
          material: "Aluminium",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "200",
            bestRating: "5",
            worstRating: "1",
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Thermal Insulation",
              value: "Excellent",
            },
            {
              "@type": "PropertyValue",
              name: "Sound Insulation",
              value: "High",
            },
            {
              "@type": "PropertyValue",
              name: "Energy Efficiency",
              value: "A+ Rating",
            },
          ],
          availability: "https://schema.org/InStock",
          manufacturer: {
            "@type": "Organization",
            name: "WinZone",
            url: "https://winzonsystem.com",
          },
        },
        {
          "@type": "Product",
          name: "Sliding Door Systems",
          description:
            "Smooth, space-saving sliding door systems for modern architectural applications",
          image: "https://winzonsystem.com/img/product-3.webp",
          brand: { "@type": "Brand", name: "WinZone" },
          category: "Doors",
          material: "Aluminium",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "180",
            bestRating: "5",
            worstRating: "1",
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Operation",
              value: "Smooth Sliding",
            },
            {
              "@type": "PropertyValue",
              name: "Space Saving",
              value: "Yes",
            },
            {
              "@type": "PropertyValue",
              name: "Durability",
              value: "High",
            },
          ],
          availability: "https://schema.org/InStock",
          manufacturer: {
            "@type": "Organization",
            name: "WinZone",
            url: "https://winzonsystem.com",
          },
        },
        {
          "@type": "Product",
          name: "Glass Facades",
          description:
            "Architectural-grade glass facades for modern building exteriors",
          image: "https://winzonsystem.com/img/product-1.webp",
          brand: { "@type": "Brand", name: "WinZone" },
          category: "Facades",
          material: "Aluminium and Glass",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "160",
            bestRating: "5",
            worstRating: "1",
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Architectural Grade",
              value: "Yes",
            },
            {
              "@type": "PropertyValue",
              name: "Weather Resistance",
              value: "Excellent",
            },
            {
              "@type": "PropertyValue",
              name: "Aesthetic Appeal",
              value: "Modern",
            },
          ],
          availability: "https://schema.org/InStock",
          manufacturer: {
            "@type": "Organization",
            name: "WinZone",
            url: "https://winzonsystem.com",
          },
        },
        {
          "@type": "Product",
          name: "Louver Design Systems",
          description:
            "Aluminum louver design windows and ventilation systems for optimal airflow and light control",
          image: "https://winzonsystem.com/img/product-4.webp",
          brand: { "@type": "Brand", name: "WinZone" },
          category: "Ventilation Systems",
          material: "Aluminium",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "140",
            bestRating: "5",
            worstRating: "1",
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Ventilation Control",
              value: "Adjustable",
            },
            {
              "@type": "PropertyValue",
              name: "Light Control",
              value: "Variable",
            },
            {
              "@type": "PropertyValue",
              name: "Privacy",
              value: "Configurable",
            },
          ],
          availability: "https://schema.org/InStock",
          manufacturer: {
            "@type": "Organization",
            name: "WinZone",
            url: "https://winzonsystem.com",
          },
        },
        {
          "@type": "Product",
          name: "Premium Aluminium Systems",
          description:
            "Comprehensive aluminium architectural solutions for residential, commercial, and industrial applications",
          image: "https://winzonsystem.com/img/product-5.webp",
          brand: { "@type": "Brand", name: "WinZone" },
          category: "Architectural Systems",
          material: "Aluminium",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "220",
            bestRating: "5",
            worstRating: "1",
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Application",
              value: "Residential, Commercial, Industrial",
            },
            {
              "@type": "PropertyValue",
              name: "Customization",
              value: "Available",
            },
            {
              "@type": "PropertyValue",
              name: "Installation",
              value: "Professional",
            },
          ],
          availability: "https://schema.org/InStock",
          manufacturer: {
            "@type": "Organization",
            name: "WinZone",
            url: "https://winzonsystem.com",
          },
        },
      ],
    },
    {
      "@type": "ImageGallery",
      "@id": "https://winzonsystem.com/product#gallery",
      name: "WinZone Product Gallery",
      description:
        "Visual showcase of WinZone's aluminium architectural solutions and installations",
      numberOfItems: 5,
      associatedMedia: [
        {
          "@type": "ImageObject",
          contentUrl: "https://winzonsystem.com/img/product-1.webp",
          width: 318,
          height: 362,
          caption: "WinZone glass facade product showcase",
        },
        {
          "@type": "ImageObject",
          contentUrl: "https://winzonsystem.com/img/product-2.webp",
          width: 318,
          height: 362,
          caption: "WinZone aluminium window systems",
        },
        {
          "@type": "ImageObject",
          contentUrl: "https://winzonsystem.com/img/product-3.webp",
          width: 318,
          height: 362,
          caption: "WinZone sliding door systems",
        },
        {
          "@type": "ImageObject",
          contentUrl: "https://winzonsystem.com/img/product-4.webp",
          width: 318,
          height: 362,
          caption: "WinZone architectural facade solutions",
        },
        {
          "@type": "ImageObject",
          contentUrl: "https://winzonsystem.com/img/product-5.webp",
          width: 318,
          height: 362,
          caption: "WinZone premium aluminium products",
        },
      ],
    },
    {
      "@type": "TechArticle",
      "@id": "https://winzonsystem.com/product#productinfo",
      headline: "WinZone Aluminium Systems - Product Information",
      description:
        "Comprehensive information about WinZone's aluminium windows, doors, and architectural solutions",
      author: { "@id": "https://winzonsystem.com/#organization" },
      publisher: { "@id": "https://winzonsystem.com/#organization" },
      datePublished: "2016-12-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/product-herosection.webp",
          width: 1200,
          height: 630,
          caption: "WinZone Product Information - Aluminium Windows & Doors",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/product-advantage.webp",
          width: 800,
          height: 600,
          caption:
            "WinZone Product Advantages - Energy Efficiency & Durability",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/product-1.webp",
          width: 400,
          height: 300,
          caption: "Premium Aluminium Windows - WinZone Collection",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/product-2.webp",
          width: 400,
          height: 300,
          caption: "Energy Efficient Windows - Thermal Performance",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/product-3.webp",
          width: 400,
          height: 300,
          caption: "Sliding Door Systems - Modern Architecture",
        },
      ],
      about: [
        {
          "@type": "Thing",
          name: "Aluminium Windows",
          description:
            "High-quality aluminium windows with excellent thermal and sound insulation properties",
        },
        {
          "@type": "Thing",
          name: "Louver Design",
          description:
            "Aluminum louver design windows and ventilation systems for optimal airflow and light control",
        },
        {
          "@type": "Thing",
          name: "Glass Facades",
          description:
            "Architectural-grade glass facades for modern building exteriors",
        },
        {
          "@type": "Thing",
          name: "Sliding Systems",
          description:
            "Smooth, space-saving sliding door systems for modern architectural applications",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Energy Efficiency",
          description:
            "All WinZone products are designed for optimal energy efficiency",
        },
        {
          "@type": "Thing",
          name: "Durability",
          description: "Premium materials ensure long-lasting performance",
        },
        {
          "@type": "Thing",
          name: "Customization",
          description:
            "Bespoke solutions tailored to architectural requirements",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/product#breadcrumb",
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
          name: "Products",
          item: "https://winzonsystem.com/product",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/product#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of aluminium products does WinZone offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone offers a comprehensive range of aluminium products including windows, doors, sliding systems, glass facades, and louver design systems for residential, commercial, and industrial applications.",
          },
        },
        {
          "@type": "Question",
          name: "What are the advantages of WinZone's aluminium systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone's aluminium systems offer excellent functionality, durability, versatility, and architectural appeal. They provide superior thermal and sound insulation, energy efficiency, weather resistance, and modern aesthetic design.",
          },
        },
        {
          "@type": "Question",
          name: "Can WinZone provide custom louver designs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, WinZone specializes in custom louver design solutions that offer perfect combination of functionality and modern aesthetics. Our aluminium louvers provide excellent ventilation, light control, and privacy for both indoor and outdoor use.",
          },
        },
        {
          "@type": "Question",
          name: "What applications are suitable for WinZone products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone products are suitable for residential, commercial, and industrial applications. They enhance homes, offices, and commercial spaces with their practical and aesthetic benefits.",
          },
        },
        {
          "@type": "Question",
          name: "How can I request a consultation for my project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact WinZone through our website, phone (9909992145), or email (info@winzonsystem.com) to request a free consultation for your architectural project.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/product#service",
      name: "Aluminium Product Consultation & Installation",
      description:
        "Professional consultation, design, and installation services for WinZone's aluminium architectural solutions",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Architectural Consultation",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Product Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Consultation",
              description: "Free consultation for architectural projects",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Design",
              description: "Bespoke aluminium solutions tailored to your needs",
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
              name: "Technical Support",
              description: "Comprehensive technical support and maintenance",
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
        title="GLASS FACADE"
        description="Explore our portfolio of successful installations across residential, commercial, and industrial sectors"
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/product-herosection.webp"
      />
      <ProductInformation />
      <Advantages />
      <AllProductsNavigation />
      <OurWork />
    </div>
  );
};

export default page;
