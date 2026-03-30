import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import VadodaraFAQ from "./VadodaraFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows & Doors in Vadodara | WinZone",
  description:
    "Looking for aluminium windows and doors in Vadodara? WinZone offers stylish, energy-efficient aluminium window and door solutions with expert installation across Vadodara.",
  keywords: [
    "aluminium windows vadodara",
    "aluminium doors vadodara",
    "windows vadodara",
    "doors vadodara",
    "vadodara windows",
    "aluminium windows gujarat",
    "windows and doors vadodara",
    "best aluminium window company vadodara",
    "sliding windows vadodara",
    "casement windows vadodara",
    "window dealer vadodara",
  ],
  alternates: {
    canonical: "https://winzonsystem.com/vadodara",
  },
  openGraph: {
    title: "Aluminium Windows & Doors in Vadodara | WinZone",
    description:
      "Premium aluminium windows and doors in Vadodara. Energy-efficient, weather-resistant solutions for homes, offices, and commercial spaces.",
    url: "https://winzonsystem.com/vadodara",
    type: "website",
  },
};

const vadodaraInformation = [
  "Looking for stylish and strong aluminium windows and doors in Vadodara? You're in the right place! WinZone is here to make the process easy for you. We offer complete window and door solutions for homes, offices, and commercial spaces across Vadodara and nearby areas. From design to installation, we handle it all.",
  "Our local team understands Vadodara's hot summers and heavy monsoons. That's why our aluminium windows in Vadodara and aluminium doors in Vadodara are designed to handle the weather while giving your space a modern and stylish look.",
  "Whether you're building a new home, renovating your flat, or upgrading your office or showroom, we offer full support from consultation and custom design to manufacturing and professional installation.",
  "With quality products, timely service, and friendly support, WinZone aims to be the best aluminium window company in Vadodara for all your window and door needs.",
];

const vadodaraAdvantages = [
  "Strong local presence in Vadodara for quick response and personal attention",
  "Products designed to handle Vadodara's hot summers and heavy monsoons",
  "On-time delivery and smooth, professional installation for all project types",
  "Complete solutions for homes, offices, showrooms, and industrial spaces",
  "High-quality aluminium windows and doors that are strong, stylish, and long-lasting",
  "Energy-efficient aluminium solutions that keep your space cooler and comfortable",
  "Friendly local support and reliable after-sales service",
  "Fully customizable designs to match your space and style perfectly",
];

const vadodaraSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "WinZone - Aluminium Windows & Doors Vadodara",
      description:
        "Premium aluminium windows and doors in Vadodara. Energy-efficient, weather-resistant solutions for homes, offices, and commercial spaces across Vadodara and Gujarat.",
      url: "https://winzonsystem.com/vadodara",
      areaServed: {
        "@type": "City",
        name: "Vadodara",
        containedInPlace: { "@type": "State", name: "Gujarat" },
      },
      parentOrganization: {
        "@type": "Organization",
        name: "WinZone",
        url: "https://winzonsystem.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you provide windows and doors in Vadodara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! WinZone provides premium aluminium windows and doors in Vadodara. We have a strong local presence and serve homes, offices, showrooms, and commercial spaces across Vadodara and nearby areas in Gujarat.",
          },
        },
        {
          "@type": "Question",
          name: "What types of windows and doors do you offer in Vadodara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer casement windows, sliding windows, tilt and turn windows, lift and slide doors, slide and fold doors, and more. Our range includes Duraslim, Duraslim Edge, and Essential Series to suit different needs and budgets.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide installation services in Vadodara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We provide complete installation services in Vadodara. Our experienced team handles everything from consultation and design to manufacturing and professional installation.",
          },
        },
        {
          "@type": "Question",
          name: "Are your windows suitable for Vadodara's climate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our windows and doors are designed for Vadodara's hot summers and heavy monsoons. They feature thermal break technology for energy efficiency and weather-resistant seals for protection.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get windows and doors in Vadodara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline depends on your project requirements and customization needs. Our local presence in Vadodara ensures quicker response times and faster delivery. Contact us for specific timelines.",
          },
        },
      ],
    },
  ],
};

const VadodaraPage = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vadodaraSchema) }}
      />
      <CommonHeroSection
        title="Aluminium Windows & Doors in Vadodara"
        description="Get premium aluminium windows and doors in Vadodara. Local expertise, quality products, and excellent service for your home or commercial project."
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/product-herosection.webp"
      />

      {/* Product Information Section */}
      <section className="bg-white">
        <div className="section-container grid gap-4">
          <CommonTitle
            tag="ABOUT PRODUCT"
            extraTagCss="bg-theme-color/6"
            title="VADODARA WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {vadodaraInformation.map((item, index) => (
              <p key={index} className="text-[#777777] sm:text-lg text-base">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-[#F7F7F7]">
        <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
          <CommonTitle
            tag="BENEFITS"
            extraTagCss="bg-theme-color/6"
            title="WHY CHOOSE WINZONE WINDOWS & DOORS IN VADODARA"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/rajkot-img/rajkot-1.webp"
              width={402}
              height={408}
              alt="Aluminium Windows and Doors in Vadodara"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {vadodaraAdvantages.map((item, index) => (
                <ul key={index}>
                  <li className="text-[#777777] xl:text-lg lg:text-base sm:text-lg text-base list-disc">
                    {item}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white">
        <KeyFeatures />
      </section>

      {/* Related Products Section - Cross-Linking for SEO */}
      <RelatedProducts />

      {/* FAQ Section */}
      <section className="bg-white">
        <div className="section-container">
          <CommonTitle
            tag="FAQ"
            extraTagCss="bg-theme-color/6"
            title="FREQUENTLY ASKED QUESTIONS"
            extraTitleCss=""
            description="Find answers to common questions about aluminium windows and doors in Vadodara"
            extraDescriptionCss="max-w-[650px]"
          />
          <VadodaraFAQ />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#F7F7F7]">
        <div className="section-container">
          <div className="md:p-8 sm:p-6 p-4 bg-theme-color rounded-xl">
            <div className="grid gap-6 text-center">
              <div className="grid gap-2">
                <h2 className="font-semibold text-2xl-responsive font-titillium text-white">
                  Need More Information?
                </h2>
                <p className="text-[#C6C6C6] lg:text-lg sm:text-base text-sm font-archivo max-w-2xl mx-auto">
                  Our team is here to help you find the perfect windows and doors solution for your Vadodara project. Get in touch today!
                </p>
              </div>
              <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
                <Link
                  href="/contact-us"
                  className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-white flex gap-2 sm:gap-2.5 font-semibold text-theme-color font-archivo items-center hover:bg-theme-color hover:text-white transition-all duration-300 group text-sm sm:text-base"
                >
                  Contact Us
                  <div className="p-1 bg-theme-color rounded-full group-hover:bg-white transition-all duration-300">
                    <ArrowRightIcon size="20" className="text-white group-hover:text-theme-color transition-all duration-300" />
                  </div>
                </Link>
                <Link
                  href="/product"
                  className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-transparent flex gap-2 sm:gap-2.5 font-semibold text-white font-archivo items-center border border-solid border-white/30 hover:bg-white/10 transition-all text-sm sm:text-base"
                >
                  Explore Products
                  <div className="p-1 bg-white/20 rounded-full">
                    <ArrowRightIcon color="white" size="20" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VadodaraPage;
