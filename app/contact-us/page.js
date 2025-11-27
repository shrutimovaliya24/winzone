import CommonHeroSection from "@/components/Common/CommonHeroSection";
import VisitOurShowroom from "@/components/ContactUs/Location/VisitOurShowroom";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import React from "react";

export const metadata = {
  title:
    "Contact WinZone — Expert Consultation & Free Quote | Premium Aluminium Solutions",
  description:
    "Get expert consultation and free quotes for premium aluminium windows, doors, and facades. Contact WinZone for professional installation, technical support, and personalized solutions. Worldwide service available.",
  keywords: [
    "contact WinZone",
    "WinZone contact",
    "free quote windows",
    "aluminium windows quote",
    "window installation consultation",
    "facade design consultation",
    "aluminium doors support",
    "window replacement quote",
    "commercial windows contact",
    "residential windows consultation",
    "technical support windows",
    "on-site measurement",
    "window design consultation",
    "aluminium facade quote",
    "sliding systems consultation",
    "premium windows contact",
    "window installation support",
    "facade engineering consultation",
    "custom windows quote",
    "energy efficient windows contact",
  ],
  authors: [
    { name: "WinZone Support Team", url: "https://winzonsystem.com" },
    { name: "WinZone Sales Team", url: "https://winzonsystem.com" },
    { name: "WinZone Technical Team", url: "https://winzonsystem.com" },
  ],
  creator: "WinZone Support Team",
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
    canonical: "https://winzonsystem.com/contact-us",
  },
  images: [
    {
      url: "https://winzonsystem.com/img/project-herosection.webp",
      width: 1200,
      height: 630,
      alt: "Contact WinZone - Expert Consultation and Free Quote for Premium Aluminium Windows",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/about-us-herosection.webp",
      width: 1200,
      height: 630,
      alt: "WinZone Professional Team - Expert Window and Door Consultation",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/energy-efficient-windows.webp",
      width: 778,
      height: 541,
      alt: "Energy Efficient Windows - WinZone Premium Solutions",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/contact-us",
    siteName: "WinZone",
    title:
      "Contact WinZone — Expert Consultation & Free Quote | Premium Aluminium Solutions",
    description:
      "Get expert consultation and free quotes for premium aluminium windows, doors, and facades. Contact WinZone for professional installation, technical support, and personalized solutions.",
    images: [
      {
        url: "https://winzonsystem.com/img/project-herosection.webp",
        width: 1200,
        height: 630,
        alt: "Contact WinZone - Expert Consultation and Free Quote for Premium Aluminium Windows",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title: "WinZone | Contact & Free Quote - Premium Aluminium Solutions",
    description:
      "Get expert consultation and free quotes for premium aluminium windows, doors, and facades. Contact WinZone for professional solutions.",
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
    title: "WinZone Contact",
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
        {
          "@type": "ContactPoint",
          contactType: "Technical Support",
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
        addressCountry: "IN",
        addressRegion: "Gujarat",
        addressLocality: "Rajkot",
        streetAddress:
          "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
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
      "@id": "https://winzonsystem.com/contact-us#webpage",
      url: "https://winzonsystem.com/contact-us",
      name: "Contact WinZone — Expert Consultation & Free Quote | Premium Aluminium Solutions",
      description:
        "Get expert consultation and free quotes for premium aluminium windows, doors, and facades. Contact WinZone for professional installation, technical support, and personalized solutions. Worldwide service available.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/img/project-herosection.webp",
        width: 1200,
        height: 630,
        caption:
          "Contact WinZone - Expert Consultation and Free Quote for Premium Aluminium Windows",
      },
      datePublished: "2016-12-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id": "https://winzonsystem.com/contact-us#breadcrumb",
      },
      mainEntity: {
        "@id": "https://winzonsystem.com/contact-us#contactpage",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/contact-us#breadcrumb",
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
          name: "Contact Us",
          item: "https://winzonsystem.com/contact-us",
        },
      ],
    },

    {
      "@type": "ContactPage",
      "@id": "https://winzonsystem.com/contact-us#contactpage",
      url: "https://winzonsystem.com/contact-us",
      name: "Contact WinZone — Expert Consultation & Free Quote",
      description:
        "Get expert consultation and free quotes for premium aluminium windows, doors, and facades. Contact WinZone for professional installation, technical support, and personalized solutions.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      image: [
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/project-herosection.webp",
          width: 1200,
          height: 630,
          caption:
            "Contact WinZone - Expert Consultation and Free Quote for Premium Aluminium Windows",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/about-us-herosection.webp",
          width: 1200,
          height: 630,
          caption:
            "WinZone Professional Team - Expert Window and Door Consultation",
        },
        {
          "@type": "ImageObject",
          url: "https://winzonsystem.com/img/energy-efficient-windows.webp",
          width: 778,
          height: 541,
          caption: "Energy Efficient Windows - WinZone Premium Solutions",
        },
      ],
      mainEntity: [
        {
          "@type": "ContactPoint",
          contactType: "Sales & Enquiries",
          telephone: ["9909992145", "9909992140"],
          email: "info@winzonsystem.com",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        },
        {
          "@type": "ContactPoint",
          contactType: "Technical Support",
          telephone: ["9909992145", "9909992140"],
          email: "info@winzonsystem.com",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        },
        {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          telephone: ["9909992145", "9909992140"],
          email: "info@winzonsystem.com",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/contact-us#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can I get a free quote for windows and doors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can get a free quote by contacting our sales team via phone, email, or our online contact form. We'll schedule a consultation to discuss your project requirements and provide a detailed quote within 24-48 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide on-site measurements and consultations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide free on-site measurements and consultations for all projects. Our expert team will visit your location to assess your requirements, take precise measurements, and provide professional recommendations.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you serve for window installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve customers worldwide with our premium aluminium window and door solutions. Our team can handle both residential and commercial projects across different regions and climates.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get technical support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our technical support team typically responds within 2-4 hours during business hours (Monday-Friday, 9 AM - 6 PM). For urgent issues, we provide priority support to ensure quick resolution.",
          },
        },
        {
          "@type": "Question",
          name: "What information should I provide when requesting a quote?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Please provide project details including property type (residential/commercial), window/door specifications, quantity, preferred materials, timeline, and any specific requirements. Photos and measurements are also helpful for accurate quoting.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/contact-us#service",
      name: "Window & Door Consultation & Installation Services",
      description:
        "Expert consultation and installation services for premium aluminium windows, doors, and facades. Professional measurement, design consultation, and technical support for residential and commercial projects.",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Consultation & Installation",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Contact Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Free Quote Consultation",
              description:
                "Comprehensive project consultation and free quote for windows, doors, and facades",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "On-Site Measurement",
              description:
                "Professional on-site measurement and assessment for accurate project planning",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical Support",
              description:
                "Expert technical support and guidance for window and door projects",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Design Consultation",
              description:
                "Professional design consultation for optimal window and door solutions",
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
        title="GET IN TOUCH"
        description="Ready to transform your space? Contact our experts for personalized consultation and premium windows and doors solutions."
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/project-herosection.webp"
      />
      <div id="contact-us">
        <ContactUs />
      </div>
      <VisitOurShowroom />
    </div>
  );
};

export default page;
