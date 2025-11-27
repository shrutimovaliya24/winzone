import LifeAtWinzone from "@/components/Career/LifeAtWinzone";
import OpenPosition from "@/components/Career/OpenPosition";
import WhyChoose from "@/components/Career/WhyChoose";
import CommonHeroSection from "@/components/Common/CommonHeroSection";
import ContactUs from "@/components/Dashboard/ContactUs/ContactUs";
import React from "react";

export const metadata = {
  title:
    "Careers at WinZone — Join Our Team | Premium Aluminium Windows & Facades Jobs",
  description:
    "Discover exciting career opportunities at WinZone. Join our growing team of professionals in fabrication, installation, sales, engineering, and design. Competitive benefits, growth opportunities, and innovative projects await. Apply now for positions in Mumbai and worldwide.",
  keywords: [
    "WinZone careers",
    "WinZone jobs",
    "careers in construction",
    "aluminium windows jobs",
    "facade installation jobs",
    "window fabricator jobs",
    "architectural facade careers",
    "construction engineering jobs",
    "join WinZone team",
    "Mumbai construction jobs",
    "aluminium industry careers",
    "window installation jobs",
    "facade engineering careers",
    "construction project management",
    "building materials careers",
    "sustainable construction jobs",
    "energy efficient windows careers",
    "commercial construction jobs",
    "residential construction careers",
    "aluminium fabrication jobs",
    "glass facade installation",
    "curtain wall engineering",
    "building envelope careers",
    "architectural design jobs",
    "construction technology careers",
  ],
  authors: [
    { name: "WinZone HR Team", url: "https://winzonsystem.com" },
    { name: "WinZone Careers", url: "https://winzonsystem.com" },
    { name: "WinZone Recruitment", url: "https://winzonsystem.com" },
  ],
  creator: "WinZone HR Team",
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
    canonical: "https://winzonsystem.com/career",
  },
  images: [
    {
      url: "https://winzonsystem.com/img/career-herosection.webp",
      width: 1200,
      height: 630,
      alt: "Careers at WinZone - Join Our Team of Professionals in Aluminium Windows and Facades",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/about-us-herosection.webp",
      width: 1200,
      height: 630,
      alt: "WinZone Professional Team - Join Our Growing Company",
      type: "image/webp",
    },
    {
      url: "https://winzonsystem.com/img/energy-efficient-windows.webp",
      width: 778,
      height: 541,
      alt: "WinZone Innovation - Work on Cutting-Edge Aluminium Solutions",
      type: "image/webp",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://winzonsystem.com/career",
    siteName: "WinZone",
    title:
      "Careers at WinZone — Join Our Team | Premium Aluminium Windows & Facades Jobs",
    description:
      "Discover exciting career opportunities at WinZone. Join our growing team of professionals in fabrication, installation, sales, engineering, and design. Competitive benefits and growth opportunities await.",
    images: [
      {
        url: "https://winzonsystem.com/img/career-herosection.webp",
        width: 1200,
        height: 630,
        alt: "Careers at WinZone - Join Our Team of Professionals in Aluminium Windows and Facades",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WinZone",
    creator: "@WinZone",
    title: "WinZone Careers | Join Our Team - Aluminium Windows & Facades Jobs",
    description:
      "Discover exciting career opportunities at WinZone. Join our growing team of professionals in fabrication, installation, sales, engineering, and design.",
    images: ["https://winzonsystem.com/img/career-herosection.webp"],
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
    title: "WinZone Careers",
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
          contactType: "Human Resources",
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
          contactType: "Recruitment",
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
      "@id": "https://winzonsystem.com/career#webpage",
      url: "https://winzonsystem.com/career",
      name: "Careers at WinZone — Join Our Team | Premium Aluminium Windows & Facades Jobs",
      description:
        "Discover exciting career opportunities at WinZone. Join our growing team of professionals in fabrication, installation, sales, engineering, and design. Competitive benefits, growth opportunities, and innovative projects await.",
      isPartOf: { "@id": "https://winzonsystem.com/#website" },
      about: { "@id": "https://winzonsystem.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://winzonsystem.com/img/career-herosection.webp",
        width: 1200,
        height: 630,
        caption:
          "Careers at WinZone - Join Our Team of Professionals in Aluminium Windows and Facades",
      },
      datePublished: "2016-12-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: { "@id": "https://winzonsystem.com/career#breadcrumb" },
      mainEntity: { "@id": "https://winzonsystem.com/career#jobs" },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://winzonsystem.com/career#breadcrumb",
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
          name: "Careers",
          item: "https://winzonsystem.com/career",
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id": "https://winzonsystem.com/career#jobs",
      name: "Current Job Openings at WinZone",
      description:
        "Explore exciting career opportunities at WinZone in fabrication, installation, sales, engineering, and design",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: "https://winzonsystem.com/career#job-1",
          item: {
            "@type": "JobPosting",
            "@id": "https://winzonsystem.com/career#job-1",
            title: "Senior Window Fabricator",
            description:
              "Experienced aluminium window fabricator required with expertise in extrusion assemblies, glazing, finishing, and quality control. Lead fabrication team and ensure production standards.",
            datePosted: "2024-01-15T00:00:00+00:00",
            validThrough: "2024-12-31T23:59:59+00:00",
            employmentType: ["FULL_TIME"],
            hiringOrganization: {
              "@type": "Organization",
              name: "WinZone",
              sameAs: "https://winzonsystem.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                addressCountry: "IN",
                postalCode: "360024",
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "INR",
              value: {
                "@type": "QuantitativeValue",
                value: "400000-600000",
                unitText: "YEAR",
              },
            },
            applicantLocationRequirements: "Mumbai, Maharashtra, India",
            qualifications:
              "5+ years experience in aluminium window fabrication, technical diploma in mechanical engineering",
            responsibilities:
              "Fabricate aluminium windows, supervise production team, ensure quality standards, maintain equipment",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          url: "https://winzonsystem.com/career#job-2",
          item: {
            "@type": "JobPosting",
            "@id": "https://winzonsystem.com/career#job-2",
            title: "Project Site Supervisor",
            description:
              "Site supervisor for facade and glazing installations. Manage installation teams, ensure quality and safety standards, coordinate with clients and contractors.",
            datePosted: "2024-01-15T00:00:00+00:00",
            validThrough: "2024-12-31T23:59:59+00:00",
            employmentType: ["FULL_TIME"],
            hiringOrganization: {
              "@type": "Organization",
              name: "WinZone",
              sameAs: "https://winzonsystem.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                addressCountry: "IN",
                postalCode: "360024",
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "INR",
              value: {
                "@type": "QuantitativeValue",
                value: "500000-700000",
                unitText: "YEAR",
              },
            },
            applicantLocationRequirements: "Mumbai, Maharashtra, India",
            qualifications:
              "3+ years construction supervision experience, engineering degree preferred",
            responsibilities:
              "Supervise installation teams, ensure safety compliance, manage project timelines, coordinate with stakeholders",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          url: "https://winzonsystem.com/career#job-3",
          item: {
            "@type": "JobPosting",
            "@id": "https://winzonsystem.com/career#job-3",
            title: "Sales Engineer",
            description:
              "Technical sales professional for aluminium windows and facades. Work with architects, contractors, and clients to provide technical solutions and project support.",
            datePosted: "2024-01-15T00:00:00+00:00",
            validThrough: "2024-12-31T23:59:59+00:00",
            employmentType: ["FULL_TIME"],
            hiringOrganization: {
              "@type": "Organization",
              name: "WinZone",
              sameAs: "https://winzonsystem.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                addressCountry: "IN",
                postalCode: "360024",
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "INR",
              value: {
                "@type": "QuantitativeValue",
                value: "600000-800000",
                unitText: "YEAR",
              },
            },
            applicantLocationRequirements: "Mumbai, Maharashtra, India",
            qualifications:
              "Engineering degree, 3+ years sales experience in construction/building materials",
            responsibilities:
              "Technical sales support, client relationship management, project proposals, market development",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          url: "https://winzonsystem.com/career#job-4",
          item: {
            "@type": "JobPosting",
            "@id": "https://winzonsystem.com/career#job-4",
            title: "Facade Design Engineer",
            description:
              "Design engineer specializing in aluminium facades and curtain wall systems. Create technical drawings, perform structural calculations, and develop innovative facade solutions.",
            datePosted: "2024-01-15T00:00:00+00:00",
            validThrough: "2024-12-31T23:59:59+00:00",
            employmentType: ["FULL_TIME"],
            hiringOrganization: {
              "@type": "Organization",
              name: "WinZone",
              sameAs: "https://winzonsystem.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                addressCountry: "IN",
                postalCode: "360024",
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "INR",
              value: {
                "@type": "QuantitativeValue",
                value: "700000-900000",
                unitText: "YEAR",
              },
            },
            applicantLocationRequirements: "Mumbai, Maharashtra, India",
            qualifications:
              "Civil/Mechanical Engineering degree, 4+ years facade design experience, AutoCAD proficiency",
            responsibilities:
              "Design facade systems, structural calculations, technical drawings, client presentations",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          url: "https://winzonsystem.com/career#job-5",
          item: {
            "@type": "JobPosting",
            "@id": "https://winzonsystem.com/career#job-5",
            title: "Quality Control Manager",
            description:
              "Quality control manager ensuring product quality and compliance with industry standards. Develop quality procedures, conduct inspections, and maintain quality certifications.",
            datePosted: "2024-01-15T00:00:00+00:00",
            validThrough: "2024-12-31T23:59:59+00:00",
            employmentType: ["FULL_TIME"],
            hiringOrganization: {
              "@type": "Organization",
              name: "WinZone",
              sameAs: "https://winzonsystem.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                addressCountry: "IN",
                postalCode: "360024",
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "INR",
              value: {
                "@type": "QuantitativeValue",
                value: "550000-750000",
                unitText: "YEAR",
              },
            },
            applicantLocationRequirements: "Mumbai, Maharashtra, India",
            qualifications:
              "Engineering degree, 5+ years quality control experience, ISO certification knowledge",
            responsibilities:
              "Quality management, process improvement, compliance monitoring, team training",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          url: "https://winzonsystem.com/career#job-6",
          item: {
            "@type": "JobPosting",
            "@id": "https://winzonsystem.com/career#job-6",
            title: "Installation Technician",
            description:
              "Skilled installation technician for aluminium windows, doors, and facade systems. Perform on-site installations, maintenance, and repair work for residential and commercial projects.",
            datePosted: "2024-01-15T00:00:00+00:00",
            validThrough: "2024-12-31T23:59:59+00:00",
            employmentType: ["FULL_TIME"],
            hiringOrganization: {
              "@type": "Organization",
              name: "WinZone",
              sameAs: "https://winzonsystem.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Arush Industries Area, Survey No 258/1, Plot No.10, B/H Rajan Technocast, At-Shapar(Veraval) Rajkot-360024",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                addressCountry: "IN",
                postalCode: "360024",
              },
            },
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "INR",
              value: {
                "@type": "QuantitativeValue",
                value: "300000-450000",
                unitText: "YEAR",
              },
            },
            applicantLocationRequirements: "Mumbai, Maharashtra, India",
            qualifications:
              "ITI/Diploma in mechanical/electrical, 2+ years installation experience",
            responsibilities:
              "Install windows and doors, perform maintenance, ensure safety standards, client interaction",
          },
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://winzonsystem.com/career#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of jobs are available at WinZone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone offers various career opportunities including fabrication, installation, sales engineering, facade design, quality control, and project management roles. We have positions for both experienced professionals and entry-level candidates in the aluminium windows and facades industry.",
          },
        },
        {
          "@type": "Question",
          name: "What benefits does WinZone offer to employees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone provides competitive salaries, health insurance, professional development opportunities, flexible working arrangements, performance bonuses, and a collaborative work environment. We also offer training programs and career advancement opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "How can I apply for a job at WinZone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can apply for jobs at WinZone by contacting our HR team via email (info@winzonsystem.com) or phone (9909992145). Please send your resume and cover letter specifying the position you're interested in.",
          },
        },
        {
          "@type": "Question",
          name: "Does WinZone offer training for new employees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, WinZone provides comprehensive training programs for new employees including technical training, safety protocols, product knowledge, and industry best practices. We believe in continuous learning and professional development.",
          },
        },
        {
          "@type": "Question",
          name: "What is the work culture like at WinZone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WinZone fosters a collaborative, innovative, and inclusive work culture. We value teamwork, creativity, and excellence. Our employees enjoy a supportive environment that encourages professional growth and work-life balance.",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://winzonsystem.com/career#service",
      name: "Career Development & Recruitment Services",
      description:
        "Comprehensive career development and recruitment services at WinZone, offering exciting opportunities in aluminium windows, facades, and construction industry with competitive benefits and growth prospects.",
      provider: { "@id": "https://winzonsystem.com/#organization" },
      serviceType: "Career Development",
      areaServed: "Mumbai, Maharashtra, India",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Career Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Job Placement",
              description:
                "Professional job placement services in aluminium windows and facades industry",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Career Development",
              description:
                "Comprehensive career development programs and training opportunities",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Professional Training",
              description:
                "Technical and professional training programs for industry skills",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mentorship Programs",
              description:
                "Mentorship and guidance programs for career advancement",
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
        title="WINZON CAREER"
        description="Join us to redefine modern living - where innovation meets creativity, passion drives excellence, and teamwork shapes a future full of endless opportunities."
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/career-herosection.webp"
      />
      <WhyChoose />
      <LifeAtWinzone />
      <OpenPosition />
      <ContactUs />
    </div>
  );
};

export default page;
