import CommonHeroSection from "@/components/Common/CommonHeroSection";
import CommonTitle from "@/components/Common/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import MumbaiFAQ from "./MumbaiFAQ";
import RelatedProducts from "./RelatedProducts";
import KeyFeatures from "./KeyFeatures";

export const metadata = {
  title: "Aluminium Windows & Doors in Mumbai | WinZone",
  description:
    "Looking for aluminium windows and doors in Mumbai? WinZone provides durable, energy-efficient aluminium window and door solutions with professional installation across Mumbai.",
  keywords: [
    "aluminium windows mumbai",
    "aluminium doors mumbai",
    "windows mumbai",
    "doors mumbai",
    "mumbai windows",
    "aluminium windows maharashtra",
    "windows and doors mumbai",
    "best aluminium window company mumbai",
    "sliding windows mumbai",
    "casement windows mumbai",
    "window dealer mumbai",
  ],
  alternates: {
    canonical: "https://winzonsystem.com/mumbai",
  },
  openGraph: {
    title: "Aluminium Windows & Doors in Mumbai | WinZone",
    description:
      "Premium aluminium windows and doors in Mumbai. Durable, energy-efficient solutions for homes and commercial spaces.",
    url: "https://winzonsystem.com/mumbai",
    type: "website",
  },
};

const mumbaiInformation = [
  "Are you looking for aluminium windows and doors in Mumbai that are strong and stylish? WinZone is here to help! We provide full solutions for homes, offices, and commercial spaces throughout Mumbai and nearby areas.",
  "Our Mumbai team understands the city's coastal weather and modern building styles, so our windows and doors in Mumbai are durable, long-lasting, and energy-efficient.",
  "Whether it's an apartment, villa, office, or shop, we provide friendly service, on-time delivery, professional installation, and custom designs to make your space look perfect.",
  "Choose WinZone for reliable, stylish, and high-quality aluminium windows and doors in Mumbai that last for years.",
];

const mumbaiAdvantages = [
  "Local team always nearby to help you quickly and kindly",
  "Deep understanding of Mumbai's coastal weather and modern building styles",
  "Fast and reliable delivery and installation for every project",
  "Complete solutions for homes, offices, shops, and more",
  "Durable and stylish aluminium windows and doors that stay strong for years",
  "Energy-efficient designs that keep your space cooler and more comfortable",
  "Reliable support whenever you need help",
  "Custom designs fully adjustable to match your style and space",
];

const mumbaiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "WinZone - Aluminium Windows & Doors Mumbai",
      description:
        "Premium aluminium windows and doors in Mumbai. Durable, energy-efficient solutions for homes and commercial spaces across Mumbai and Maharashtra.",
      url: "https://winzonsystem.com/mumbai",
      areaServed: {
        "@type": "City",
        name: "Mumbai",
        containedInPlace: { "@type": "State", name: "Maharashtra" },
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
          name: "Do you provide windows and doors in Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! WinZone provides premium aluminium windows and doors in Mumbai. Our local team serves homes, offices, apartments, and commercial spaces throughout Mumbai and nearby areas in Maharashtra.",
          },
        },
        {
          "@type": "Question",
          name: "What types of windows and doors do you offer in Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer casement windows, sliding windows, tilt and turn windows, lift and slide doors, slide and fold doors, and more from our Duraslim, Duraslim Edge, and Essential Series.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide installation services in Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We provide complete installation services across Mumbai with consultation, design, manufacturing, and professional installation.",
          },
        },
        {
          "@type": "Question",
          name: "Are your windows suitable for Mumbai's climate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our windows and doors are built for Mumbai's coastal humidity and heavy monsoons with weather-resistant seals and corrosion-resistant aluminium frames.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get windows and doors in Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timelines depend on project requirements and customization. Our Mumbai presence enables quicker response and delivery. Contact us for specific timelines.",
          },
        },
      ],
    },
  ],
};

const MumbaiPage = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mumbaiSchema) }}
      />
      <CommonHeroSection
        title="Aluminium Windows & Doors in Mumbai"
        description="Get premium aluminium windows and doors in Mumbai. Local expertise, quality products, and excellent service for your home or commercial project."
        extraTitleCss="xl:max-w-[548px]"
        extraDescriptionCss="max-w-[700px]"
        imgSrc="/img/product-herosection.webp"
      />

      <section className="bg-white">
        <div className="section-container grid gap-4">
          <CommonTitle
            tag="ABOUT PRODUCT"
            extraTagCss="bg-theme-color/6"
            title="MUMBAI WINDOWS & DOORS INFORMATION"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="grid sm:gap-4 gap-2 font-archivo">
            {mumbaiInformation.map((item, index) => (
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
            title="WHY CHOOSE WINZONE WINDOWS & DOORS IN MUMBAI"
            extraTitleCss=""
            extraDescriptionCss="hidden"
            gridView={true}
          />
          <div className="lg:flex max-lg:justify-items-center grid lg:gap-10 md:gap-8 sm:gap-6 gap-4">
            <Image
              src="/img/rajkot-img/rajkot-1.webp"
              width={402}
              height={408}
              alt="Aluminium Windows and Doors in Mumbai"
              className="w-full max-w-full sm:max-w-[350px] md:max-w-[380px] lg:w-[402px] lg:h-[408px] h-auto object-cover rounded-lg mx-auto lg:mx-0"
            />
            <div className="grid gap-4 font-archivo lg:pl-6 pl-0">
              {mumbaiAdvantages.map((item, index) => (
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
            description="Find answers to common questions about aluminium windows and doors in Mumbai"
            extraDescriptionCss="max-w-[650px]"
          />
          <MumbaiFAQ />
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
                  Our team is here to help you find the perfect windows and doors solution for your Mumbai project. Get in touch today!
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

export default MumbaiPage;
