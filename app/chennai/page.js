import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import ChennaiFAQ from "./ChennaiFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows & Doors in Chennai | WinZone",
  description:
    "Premium aluminium windows and doors in Chennai. WinZone offers energy-efficient, weather-resistant aluminium solutions with professional installation across Chennai and Tamil Nadu.",
  keywords: [
    "aluminium windows chennai",
    "aluminium doors chennai",
    "windows chennai",
    "doors chennai",
    "chennai windows",
    "aluminium windows tamil nadu",
    "windows and doors chennai",
    "best aluminium window company chennai",
    "sliding windows chennai",
    "casement windows chennai",
    "window dealer chennai",
  ],
  alternates: {
    canonical: "https://winzonsystem.com/chennai",
  },
  openGraph: {
    title: "Aluminium Windows & Doors in Chennai | WinZone",
    description:
      "Premium aluminium windows and doors in Chennai. Energy-efficient, weather-resistant solutions for homes and commercial spaces.",
    url: "https://winzonsystem.com/chennai",
    type: "website",
  },
};

const chennaiInformation = [
  "Check out WinZone's premium aluminium windows and doors in Chennai! We provide complete solutions for homes, offices, shops, and industrial spaces across Chennai and nearby areas in Tamil Nadu.",
  "Our Chennai branch offers local expertise, ensuring on-time delivery and professional installation. We understand Chennai's hot, humid climate and local building styles, so our windows and doors are perfectly suited for the city.",
  "From modern homes to commercial buildings, WinZone delivers high-quality aluminium windows and doors with personalised service, quick response, and ongoing support.",
  "Whether you're building, renovating, or upgrading, we provide consultation, design, manufacturing, and expert installation to meet the highest standards.",
];

const chennaiAdvantages = [
  "Right here in Chennai to provide personal service and quick help",
  "Deep understanding of Chennai's hot, humid weather and local building styles",
  "Fast delivery and professional installation for every Chennai project",
  "Solutions for homes, offices, shops, and industrial buildings",
  "Premium aluminium windows and doors with great thermal performance",
  "Energy-efficient designs made for Chennai's climate",
  "Always here to help with advice and support whenever you need it",
  "Customizable options to fit your space and style perfectly",
];

const chennaiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "WinZone - Aluminium Windows & Doors Chennai",
      description:
        "Premium aluminium windows and doors in Chennai. Energy-efficient, weather-resistant solutions for homes and commercial spaces across Chennai and Tamil Nadu.",
      url: "https://winzonsystem.com/chennai",
      areaServed: {
        "@type": "City",
        name: "Chennai",
        containedInPlace: { "@type": "State", name: "Tamil Nadu" },
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
          name: "Do you provide windows and doors in Chennai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! WinZone provides premium aluminium windows and doors in Chennai. Our local branch serves homes, offices, shops, and industrial spaces across Chennai and nearby areas in Tamil Nadu.",
          },
        },
        {
          "@type": "Question",
          name: "What types of windows and doors do you offer in Chennai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer casement windows, sliding windows, tilt and turn windows, lift and slide doors, slide and fold doors, and more from our Duraslim, Duraslim Edge, and Essential Series.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide installation services in Chennai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We provide complete installation services across Chennai with consultation, design, manufacturing, and professional installation.",
          },
        },
        {
          "@type": "Question",
          name: "Are your windows suitable for Chennai's climate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our windows and doors are designed for Chennai's hot, humid climate with thermal break technology for energy efficiency, weather-resistant seals, and corrosion-resistant aluminium frames.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get windows and doors in Chennai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timelines depend on project requirements and customization. Our Chennai branch enables quicker response and delivery. Contact us for specific timelines.",
          },
        },
      ],
    },
  ],
};

const ChennaiPage = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chennaiSchema) }}
      />
      <CommonHeroSection
        title="Aluminium Windows & Doors in Chennai"
        description="Get premium aluminium windows and doors in Chennai. Local expertise, quality products, and excellent service for your home or commercial project."
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/product-herosection.webp"
      />

      <section className="bg-white">
        <div className="section-container grid gap-4">
          <CommonTitle
            tag="ABOUT PRODUCT"
            extraTagCss="bg-theme-color/6"
            title="CHENNAI WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {chennaiInformation.map((item, index) => (
              <p key={index} className="text-[#777777] sm:text-lg text-base">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7]">
        <div className="section-container grid lg:gap-12 md:gap-10 sm:gap-8 gap-6">
          <CommonTitle
            tag="BENEFITS"
            extraTagCss="bg-theme-color/6"
            title="WHY CHOOSE WINZONE WINDOWS & DOORS IN CHENNAI"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/rajkot-img/rajkot-1.webp"
              width={402}
              height={408}
              alt="Aluminium Windows and Doors in Chennai"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {chennaiAdvantages.map((item, index) => (
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

      <section className="bg-white">
        <KeyFeatures />
      </section>

      <RelatedProducts />

      <section className="bg-white">
        <div className="section-container">
          <CommonTitle
            tag="FAQ"
            extraTagCss="bg-theme-color/6"
            title="FREQUENTLY ASKED QUESTIONS"
            extraTitleCss=""
            description="Find answers to common questions about aluminium windows and doors in Chennai"
            extraDescriptionCss="max-w-[650px]"
          />
          <ChennaiFAQ />
        </div>
      </section>

      <section className="bg-[#F7F7F7]">
        <div className="section-container">
          <div className="md:p-8 sm:p-6 p-4 bg-theme-color rounded-xl">
            <div className="grid gap-6 text-center">
              <div className="grid gap-2">
                <h2 className="font-semibold text-2xl-responsive font-titillium text-white">
                  Need More Information?
                </h2>
                <p className="text-[#C6C6C6] lg:text-lg sm:text-base text-sm font-archivo max-w-2xl mx-auto">
                  Our team is here to help you find the perfect windows and doors solution for your Chennai project. Get in touch today!
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

export default ChennaiPage;
