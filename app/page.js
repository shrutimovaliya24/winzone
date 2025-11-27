import AboutUs from "@/components/Dashboard/AboutUs";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import Faq from "@/components/Dashboard/Faq/Faq";
import FeatureSection from "@/components/Dashboard/Feature/FeatureSection";
import HeroSection from "@/components/Dashboard/HeroSection";
import Testimonial from "@/components/Dashboard/Testimonial";

export const metadata = {
  title: {
    default: "WinZone — Premium Aluminium Windows & Doors, Facades",
    template: "%s | WinZone",
  },
  description:
    "Premium aluminium windows, doors, sliding systems, facades and partitions — engineered for energy efficiency, durability, and contemporary design. Contact WinZone for a free consultation.",
  keywords: [
    "aluminium windows",
    "aluminum windows",
    "aluminium doors",
    "aluminum doors",
    "sliding systems",
    "glass facades",
    "architectural facades",
    "partitions",
    "window systems",
    "energy efficient windows",
    "WinZone",
    "commercial windows",
    "residential windows",
    "thermal insulation",
    "sound insulation",
    "folding systems",
    "modern architecture",
    "sustainable building",
    "construction materials",
    "building systems",
  ],
  authors: [
    {
      name: "WinZone",
      url: "https://winzonsystem.com",
    },
  ],
  creator: "WinZone",
  publisher: "WinZone",
  category: "Construction & Building Materials",
  classification: "Aluminium Windows & Doors Manufacturer",
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
    canonical: "https://winzonsystem.com",
    languages: {
      "en-US": "https://winzonsystem.com",
      "en-GB": "https://winzonsystem.com",
    },
  },
  images: [
    {
      url: "https://winzonsystem.com/img/dahsboard-hero-section.webp",
      width: 1200,
      height: 630,
      alt: "WinZone — premium aluminium windows, doors and facades",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/about-us-background.webp",
      width: 1280,
      height: 719,
      alt: "WinZone about us background",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/winzone.webp",
      width: 400,
      height: 300,
      alt: "WinZone product showcase",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com",
    siteName: "WinZone",
    title: "WinZone — Premium Aluminium Windows & Doors, Facades",
    description:
      "Premium aluminium windows, doors, sliding systems, facades and partitions — engineered for energy efficiency, durability, and contemporary design.",
    images: [
      {
        url: "https://winzonsystem.com/img/dahsboard-hero-section.webp",
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
    title: "WinZone | Premium Aluminium Windows & Doors",
    description:
      "Discover WinZone's premium aluminium windows, doors and facade systems — engineered for energy efficiency and contemporary architecture.",
    images: ["https://winzonsystem.com/img/dahsboard-hero-section.webp"],
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
    title: "WinZone",
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
        width: 64,
        height: 68,
        caption: "WinZone Logo",
      },
      image: [
        "https://winzonsystem.com/img/dahsboard-hero-section.webp",
        "https://winzonsystem.com/img/about-us-background.webp",
        "https://winzonsystem.com/img/winzone.webp",
      ],
      foundingDate: "2014",

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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Aluminium Windows & Doors",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "WinZon Windows",
              description:
                "Strong, sleek, and stylish—crafted for modern spaces with excellent thermal and sound insulation.",
              image: "https://winzonsystem.com/img/winzone.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              category: "Aluminium Windows",
              material: "Aluminium",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "250",
                bestRating: "5",
                worstRating: "1",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Aluminium Doors",
              description:
                "Elegant and durable solutions designed for lasting beauty and performance.",
              image: "https://winzonsystem.com/img/aluminium-doors.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              category: "Aluminium Doors",
              material: "Aluminium",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "200",
                bestRating: "5",
                worstRating: "1",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Folding Systems",
              description:
                "Smooth, space-saving, and seamless systems that bring indoor and outdoor spaces together.",
              image: "https://winzonsystem.com/img/folding-systems.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              category: "Folding Systems",
              material: "Aluminium",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "180",
                bestRating: "5",
                worstRating: "1",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Glass Facades",
              description:
                "Architectural-grade facades that add sophistication and strength to any project.",
              image: "https://winzonsystem.com/img/glass-facades.webp",
              brand: { "@type": "Brand", name: "WinZone" },
              category: "Glass Facades",
              material: "Aluminium and Glass",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1000",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://winzonsystem.com/#localbusiness",
      name: "WinZone",
      image: "https://winzonsystem.com/img/dahsboard-hero-section.webp",
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
      "@type": "WebPage",
      "@id": "https://winzonsystem.com/#homepage",
      url: "https://winzonsystem.com",
      name: "WinZone — Premium Aluminium Windows & Doors, Facades",
      description:
        "Discover WinZone's aluminium window & door systems, sliding solutions and architectural facades for residential and commercial projects.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": "https://winzonsystem.com/#primaryimage",
        url: "https://winzonsystem.com/img/dahsboard-hero-section.webp",
        contentUrl: "https://winzonsystem.com/img/dahsboard-hero-section.webp",
        width: 1200,
        height: 630,
        caption:
          "WinZone hero image showcasing premium aluminium windows and doors",
      },
      dateModified: new Date().toISOString(),
      datePublished: "2024-01-01T00:00:00+00:00",
      breadcrumb: { "@id": "https://winzonsystem.com/#breadcrumb" },
      significantLink: [
        "https://winzonsystem.com/product",
        "https://winzonsystem.com/project",
        "https://winzonsystem.com/contact-us",
        "https://winzonsystem.com/about-us",
        "https://winzonsystem.com/blog",
        "https://winzonsystem.com/career",
        "https://winzonsystem.com/e-catalogue",
      ],
      mainEntity: { "@id": "https://winzonsystem.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://winzonsystem.com",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you provide on-site measurement and installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — WinZone provides on-site measurement and professional installation services for most residential and commercial projects. Contact our team for a quote.",
          },
        },
        {
          "@type": "Question",
          name: "What warranty do your systems come with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone offers a 10-year product warranty on all our aluminium systems. Standard manufacturer warranties are provided; warranty length and terms vary by product. Please check the product page or contact support for specifics.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get custom finishes and sizes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — we offer custom finishes, colors and bespoke sizing to meet architectural requirements. Speak with our sales team for details.",
          },
        },
        {
          "@type": "Question",
          name: "Do you ship internationally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shipping availability depends on the project and location. Please contact WinZone for international shipping enquiries.",
          },
        },
        {
          "@type": "Question",
          name: "How does web hosting work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When you develop a website, unless you publish it on the internet nobody can access your website.",
          },
        },
        {
          "@type": "Question",
          name: "Can I buy web hosting for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When you develop a website, unless you publish it on the internet nobody can access your website.",
          },
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://winzonsystem.com/#products",
      name: "Our Products",
      description:
        "Discover our comprehensive range of premium aluminum windows, doors, and architectural systems",
      url: "https://winzonsystem.com/product",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: 5,
        itemListElement: [
          {
            "@type": "Product",
            name: "WinZon Windows",
            description:
              "Strong, sleek, and stylish—crafted for modern spaces with excellent thermal and sound insulation.",
            image: "https://winzonsystem.com/img/winzone.webp",
            brand: { "@type": "Brand", name: "WinZone" },
            category: "Aluminium Windows",
            material: "Aluminium",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "250",
              bestRating: "5",
              worstRating: "1",
            },
            availability: "https://schema.org/InStock",
            manufacturer: {
              "@type": "Organization",
              name: "WinZone",
              url: "https://winzonsystem.com",
            },
          },
          {
            "@type": "Product",
            name: "Aluminium Doors",
            description:
              "Elegant and durable solutions designed for lasting beauty and performance.",
            image: "https://winzonsystem.com/img/aluminium-doors.webp",
            brand: { "@type": "Brand", name: "WinZone" },
            category: "Aluminium Doors",
            material: "Aluminium",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "200",
              bestRating: "5",
              worstRating: "1",
            },
            availability: "https://schema.org/InStock",
            manufacturer: {
              "@type": "Organization",
              name: "WinZone",
              url: "https://winzonsystem.com",
            },
          },
          {
            "@type": "Product",
            name: "Folding Systems",
            description:
              "Smooth, space-saving, and seamless systems that bring indoor and outdoor spaces together.",
            image: "https://winzonsystem.com/img/folding-systems.webp",
            brand: { "@type": "Brand", name: "WinZone" },
            category: "Folding Systems",
            material: "Aluminium",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "180",
              bestRating: "5",
              worstRating: "1",
            },
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
              "Architectural-grade facades that add sophistication and strength to any project.",
            image: "https://winzonsystem.com/img/glass-facades.webp",
            brand: { "@type": "Brand", name: "WinZone" },
            category: "Glass Facades",
            material: "Aluminium and Glass",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.6",
              reviewCount: "150",
              bestRating: "5",
              worstRating: "1",
            },
            availability: "https://schema.org/InStock",
            manufacturer: {
              "@type": "Organization",
              name: "WinZone",
              url: "https://winzonsystem.com",
            },
          },
        ],
      },
    },
    {
      "@type": "Review",
      "@id": "https://winzonsystem.com/#review1",
      itemReviewed: {
        "@type": "Product",
        name: "WinZone Aluminium Windows & Doors",
        description: "Premium aluminium windows and doors for modern homes",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Aarav Mehta",
        jobTitle: "Homeowner",
      },
      reviewBody:
        "WinZone transformed our living experience. The products improved comfort and reduced energy bills instantly. Installation was simple, and the quality speaks for itself. A perfect balance of design, efficiency, and sustainability—I'm glad we chose WinZone for our home.",
      datePublished: "2024-01-15",
      publisher: { "@id": "https://winzonsystem.com/#organization" },
    },
    {
      "@type": "Review",
      "@id": "https://winzonsystem.com/#review2",
      itemReviewed: {
        "@type": "Product",
        name: "WinZone Aluminium Windows & Doors",
        description: "Premium aluminium windows and doors for modern homes",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Priya Shah",
        jobTitle: "Architect",
      },
      reviewBody:
        "As an architect, I value solutions that blend design with performance. WinZone delivers exactly that. Their systems enhance efficiency, complement aesthetics, and provide long-term reliability. Clients are always satisfied, which makes WinZone my most trusted partner for modern projects.",
      datePublished: "2024-01-20",
      publisher: { "@id": "https://winzonsystem.com/#organization" },
    },
    {
      "@type": "Review",
      "@id": "https://winzonsystem.com/#review3",
      itemReviewed: {
        "@type": "Product",
        name: "WinZone Aluminium Windows & Doors",
        description: "Premium aluminium windows and doors for modern homes",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Karan Joshi",
        jobTitle: "Contractor",
      },
      reviewBody:
        "WinZone made our home more comfortable and energy-efficient. The installation was smooth, and the results were instant. Lower bills and better comfort—WinZone truly delivers lasting value.",
      datePublished: "2024-01-25",
      publisher: { "@id": "https://winzonsystem.com/#organization" },
    },
    {
      "@type": "Review",
      "@id": "https://winzonsystem.com/#review4",
      itemReviewed: {
        "@type": "Product",
        name: "WinZone Aluminium Windows & Doors",
        description: "Premium aluminium windows and doors for modern homes",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sneha Desai",
        jobTitle: "Homeowner",
      },
      reviewBody:
        "WinZone improved the way we live. Our home feels cooler in summer, warmer in winter, and our bills are lower. The quality and finish are excellent, and the service was smooth. I couldn't ask for more from a brand.",
      datePublished: "2024-01-30",
      publisher: { "@id": "https://winzonsystem.com/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/#service",
      name: "Aluminium Windows & Doors Installation",
      description:
        "Professional installation of premium aluminium windows, doors, sliding systems, facades and partitions",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Installation Service",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Installation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "On-site Measurement",
              description: "Professional measurement service for custom sizing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Installation Service",
              description: "Expert installation by certified professionals",
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
    {
      "@type": "AboutPage",
      "@id": "https://winzonsystem.com/#about",
      name: "About WinZone",
      description:
        "Excellence in every detail - Our expertise lies in crafting aluminium windows, doors, sliding systems, facades, and partitions that meet international quality standards.",
      url: "https://winzonsystem.com/about-us",
      mainEntity: { "@id": "https://winzonsystem.com/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
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
    },
  ],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(optimizedSchemaData),
        }}
      />
      <HeroSection />
      <AboutUs />
      <FeatureSection />
      <ContactUs />
      <Testimonial />
      <Faq />
    </div>
  );
}
